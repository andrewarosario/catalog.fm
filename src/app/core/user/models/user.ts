import { Profile } from '../../profile/models/profile';

export interface User {
  name: string;
  key: string;
  profile?: Profile;
}
