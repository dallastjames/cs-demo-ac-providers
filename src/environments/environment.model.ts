import { IonicAuthOptions } from '@ionic-enterprise/auth';

export interface Environment {
  production: boolean;
  webHost: string;
  appHost: string;
  azure: IonicAuthOptions;
}
