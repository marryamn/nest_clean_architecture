import { UserM } from '../model/user.model';

export interface UserRepository {
  getAllUsers(): Promise<UserM[]>;
}
