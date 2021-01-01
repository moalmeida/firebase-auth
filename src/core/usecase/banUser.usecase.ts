import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { AuthenticateInput } from "../presentation/handler/authenticate.handler";
import { BanUserInput } from "../presentation/handler/banUser.handler";
import { AuthenticateUseCase } from "./authenticate.usecase";

export class BanUserUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: BanUserInput): Promise<void> {
    const credentials = await new AuthenticateUseCase(
      this.authenticationDataSource
    ).execute({
      token: input.token,
      provider: input.provider,
    } as AuthenticateInput);
    return this.authenticationDataSource.banUser(credentials.id);
  }
}
