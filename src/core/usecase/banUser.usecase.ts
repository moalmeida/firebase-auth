import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { ThirdProvider } from "../datasource/authentication.model";
import { AuthenticateInput, AuthenticateUseCase } from "./authenticate.usecase";

export interface BanUserInput {
  token: string;
  provider: ThirdProvider;
}

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
