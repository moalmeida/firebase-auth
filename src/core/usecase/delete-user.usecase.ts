import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { UnbanUserInput } from "../presentation/handler/unbanUser.handler";

export class DeleteUserUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: UnbanUserInput): Promise<void> {
    return this.authenticationDataSource.deleteUser(input.id);
  }
}
