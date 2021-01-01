import { UserDataSource } from "../datasource/user.datasource";
import { CreateUserInput } from "../presentation/handler/create-user.handler";
import { UserInput, UserOutput } from "../datasource/user.model";

export class CreateUserUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: CreateUserInput): Promise<UserOutput> {
    return this.userDataSource.createUser({
      email: input.email,
      displayName: input.displayName,
    } as UserInput);
  }
}
