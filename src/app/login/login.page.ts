import { Component, OnInit } from '@angular/core';
import {
  Auth0Service,
  AzureService,
  CognitoService,
  OktaService,
} from '@app/services';
import { Observable, forkJoin, from, timer, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAmazon, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import {
  faSync,
  faStar,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

interface AuthMethod {
  name: string;
  color: string;
  icon: IconDefinition;
  handler: () => void;
  refresh: () => Promise<void>;
  refreshing: boolean;
  state$: Observable<boolean>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public refreshIcon = faSync;
  public azureIcon = faMicrosoft;
  public azureState$ = this.azureService.authState$;
  public refreshing: boolean = false;

  constructor(private azureService: AzureService) {}

  ngOnInit() {}

  public async refresh(): Promise<void> {
    this.refreshing = true;
    forkJoin([
      from(this.azureService.isAuthenticated()),
      timer(1000).pipe(take(1)),
    ]).subscribe(() => {
      this.refreshing = false;
    });
  }

  public expire(): void {
    this.azureService.expire();
  }

  public refreshSession(): void {
    this.azureService.refreshSession();
  }

  public async useAzure(): Promise<void> {
    const authenticated = await this.azureService.isAuthenticated();
    if (authenticated) {
      this.azureService.logout();
    } else {
      this.azureService.login();
    }
  }

  public async useAzureAlt(): Promise<void> {
    const authenticated = await this.azureService.isAuthenticated();
    if (authenticated) {
      this.azureService.logout();
    } else {
      this.azureService.login(
        'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_signup',
      );
    }
  }
}
