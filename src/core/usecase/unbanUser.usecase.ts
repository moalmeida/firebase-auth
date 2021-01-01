import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { UnbanUserInput } from "../presentation/handler/unbanUser.handler";

export class UnbanUserUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: UnbanUserInput): Promise<void> {
    return this.authenticationDataSource.unbanUser(input.id);
  }
}
