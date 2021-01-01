import { UserDataSource } from "../datasource/user.datasource";
import { UserInput, UserOutput } from "../datasource/user.model";

export interface CreateUserInput {
  email: string;
  displayName: string;
}

export class CreateUserUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: CreateUserInput): Promise<UserOutput> {
    return this.userDataSource.createUser({
      email: input.email,
      displayName: input.displayName,
    } as UserInput);
  }
}
