import { UserDataSource } from "../../datasource/user.datasource";
import {
  ChangeAvatarInput,
  ChangeAvatarUseCase,
} from "../../usecase/change-avatar.usecase";

export const ChangeAvatarHandler = async (
  input: ChangeAvatarInput,
  userDataSource: UserDataSource
): Promise<void> => {
  return new ChangeAvatarUseCase(userDataSource).execute(input);
};
