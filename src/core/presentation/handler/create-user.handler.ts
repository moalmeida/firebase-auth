import { UserDataSource } from "../../datasource/user.datasource";
import { UserOutput } from "../../datasource/user.model";
import { CreateUserUseCase } from "../../usecase/create-user.usecase";

export const CreateUserHandler = async (
  input: CreateUserInput,
  userDataSource: UserDataSource
): Promise<UserOutput> => {
  return new CreateUserUseCase(userDataSource).execute(input);
};

export interface CreateUserInput {
  email: string;
  displayName: string;
}
