import { UserDataSource } from "../../datasource/user.datasource";
import { ChangeAvatarUseCase } from "../../usecase/change-avatar.usecase";

export const ChangeAvatarHandler = async (
  input: ChangeAvatarInput,
  userDataSource: UserDataSource
): Promise<void> => {
  return new ChangeAvatarUseCase(userDataSource).execute(input);
};

export interface ChangeAvatarInput {
  uid: string;
  avatar: string;
}
