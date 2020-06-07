import { Profile } from './profile';

export interface User {
  name: string;
  key: string;
  profile?: Profile;
}
