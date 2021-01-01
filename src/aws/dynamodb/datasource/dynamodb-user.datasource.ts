import { UserDataSource } from "../../../core/datasource/user.datasource";
import { UserInput, UserOutput } from "../../../core/datasource/user.model";

export class DynamobdUserDataSource implements UserDataSource {
  createUser(user: UserInput): Promise<UserOutput> {
    throw new Error("Method not implemented.");
  }
  getUser(email: string): Promise<UserOutput> {
    throw new Error("Method not implemented.");
  }
  changeAvatar(uid: string, avatar: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
