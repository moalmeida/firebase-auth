import { UserDataSource } from "../datasource/user.datasource";

export interface ChangeAvatarInput {
  uid: string;
  avatar: string;
}

export class ChangeAvatarUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: ChangeAvatarInput): Promise<void> {
    return this.userDataSource.changeAvatar(input.uid, input.avatar);
  }
}
