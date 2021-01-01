import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { DeleteUserUseCase } from "../../usecase/delete-user.usecase";

export const DeleteUserHandler = async (
  input: DeleteUserInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new DeleteUserUseCase(authenticationDataSource).execute(input);
};

export interface DeleteUserInput {
  id: string;
}
