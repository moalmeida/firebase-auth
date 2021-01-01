import { UserInput, UserOutput } from "./user.model";

export interface UserDataSource {
  createUser(user: UserInput): Promise<UserOutput>;
  getUser(email: string): Promise<UserOutput>;
  changeAvatar(uid: string, avatar: string): Promise<void>;
}
