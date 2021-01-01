import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export interface UnbanUserInput {
  id: string;
}

export class UnbanUserUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: UnbanUserInput): Promise<void> {
    return this.authenticationDataSource.unbanUser(input.id);
  }
}
