import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export interface DeleteUserInput {
  id: string;
}

export class DeleteUserUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: DeleteUserInput): Promise<void> {
    return this.authenticationDataSource.deleteUser(input.id);
  }
}
