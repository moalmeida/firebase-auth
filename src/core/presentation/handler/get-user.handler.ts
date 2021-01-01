import { UserDataSource } from "../../datasource/user.datasource";
import { UserOutput } from "../../datasource/user.model";
import { GetUserInput, GetUserUseCase } from "../../usecase/get-user.usecase";

export const GetUserHandler = async (
  input: GetUserInput,
  userDataSource: UserDataSource
): Promise<UserOutput> => {
  return new GetUserUseCase(userDataSource).execute(input);
};
