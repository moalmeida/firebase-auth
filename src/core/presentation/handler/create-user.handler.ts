import { UserDataSource } from "../../datasource/user.datasource";
import { UserOutput } from "../../datasource/user.model";
import {
  CreateUserInput,
  CreateUserUseCase,
} from "../../usecase/create-user.usecase";

export const CreateUserHandler = async (
  input: CreateUserInput,
  userDataSource: UserDataSource
): Promise<UserOutput> => {
  return new CreateUserUseCase(userDataSource).execute(input);
};
