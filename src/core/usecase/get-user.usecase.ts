import { UserDataSource } from "../datasource/user.datasource";
import { GetUserInput } from "../presentation/handler/get-user.handler";
import { UserOutput } from "../datasource/user.model";

export class GetUserUseCase {
  constructor(private userDataSource: UserDataSource) {}

  public async execute(input: GetUserInput): Promise<UserOutput> {
    return this.userDataSource.getUser(input.email);
  }
}
