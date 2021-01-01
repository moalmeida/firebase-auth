import { UserDataSource } from "../datasource/user.datasource";
import { ChangeAvatarInput } from "../presentation/handler/change-avatar.handler";

export class ChangeAvatarUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: ChangeAvatarInput): Promise<void> {
    return this.userDataSource.changeAvatar(input.uid, input.avatar);
  }
}
