import { Application, Request, Response } from "../application.model";
import { UserDataSource } from "../../datasource/user.datasource";

export class UserController {
  constructor(
    private app: Application,
    private userDataSource: UserDataSource
  ) {
    this.setRoutes(this.app);
  }

  async createUser(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getUser(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async changeAvatar(req: Request, res: Response): Promise<any> {
    throw new Error("Method not implemented.");
  }

  private setRoutes(app: Application) {
    app.route("/create-user").post(this.createUser);
    app.route("/get-user").get(this.getUser);
    app.route("/change-avatar").post(this.changeAvatar);
  }
}
