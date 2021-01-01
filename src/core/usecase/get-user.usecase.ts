import { UserDataSource } from "../datasource/user.datasource";
import { UserOutput } from "../datasource/user.model";

export interface GetUserInput {
  email: string;
}

export class GetUserUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: GetUserInput): Promise<UserOutput> {
    return this.userDataSource.getUser(input.email);
  }
}
