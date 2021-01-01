import { SigninHandler, SignInInput } from "../handler/sign-in.handler";
import { SignUpHandler, SignUpInput } from "../handler/sign-up.handler";
import {
  ResetPasswordEmailInput,
  SendResetPasswordEmailHandler as ResetPasswordEmailHandler,
} from "../handler/reset-password-email.handler";
import {
  AuthenticateHandler,
  AuthenticateInput,
} from "../handler/authenticate.handler";
import { SignOutHandler, SignOutInput } from "../handler/sign-out.handler";
import {
  ChangePasswordHandler,
  ChangePasswordInput,
} from "../handler/change-password.handler";
import { BanUserHandler, BanUserInput } from "../handler/banUser.handler";
import { UnbanUserHandler, UnbanUserInput } from "../handler/unbanUser.handler";
import {
  DeleteUserHandler,
  DeleteUserInput,
} from "../handler/delete-user.handler";
import { Application, Request, Response } from "../application.model";
import { AuthenticationDataSource } from "../../datasource/authentication.datasource";

export class AuthenticationController {
  constructor(
    private app: Application,
    private authenticationDataSource: AuthenticationDataSource
  ) {
    this.setRoutes(this.app);
  }

  async signIn(req: Request, res: Response): Promise<any> {
    try {
      if (!req.body) {
        throw new Error("Missing Body");
      }

      const result = await SigninHandler(
        req.body as SignInInput,
        this.authenticationDataSource
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async signUp(req: Request, res: Response): Promise<any> {
    try {
      if (!req.body) {
        throw new Error("Missing Body");
      }

      const result = await SignUpHandler(
        req.body as SignUpInput,
        this.authenticationDataSource
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async resetPasswordEmail(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.query && req.query["email"])) {
        throw new Error("Missing email parameter");
      }

      const result = await ResetPasswordEmailHandler(
        { email: req.query["email"] } as ResetPasswordEmailInput,
        this.authenticationDataSource
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async authenticate(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.headers && req.headers["token"])) {
        throw new Error("Missing information in headers");
      }

      const result = await AuthenticateHandler(
        {
          token: req.headers["token"] as string,
          provider: req.headers["provider"] as string,
        } as AuthenticateInput,
        this.authenticationDataSource
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async signOut(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.headers && req.headers["token"])) {
        throw new Error("Missing information in headers");
      }

      const result = await SignOutHandler(
        {
          token: req.headers["token"] as string,
        } as SignOutInput,
        this.authenticationDataSource
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async changePassword(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.headers && req.headers["token"])) {
        throw new Error("Missing information in headers");
      }
      if (!(req.body && req.body["newPassword"])) {
        throw new Error("Missing newPassword parameter in body");
      }

      const result = await ChangePasswordHandler(
        {
          ...req.body,
          token: req.headers["token"] as string,
        } as ChangePasswordInput,
        this.authenticationDataSource
      );
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async banUser(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.headers && req.headers["token"])) {
        throw new Error("Missing information in headers");
      }

      const result = await BanUserHandler(
        {
          token: req.headers["token"] as string,
        } as BanUserInput,
        this.authenticationDataSource
      );
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async unBanUser(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.body && req.body.uid)) {
        throw new Error("UID not provided");
      }

      const result = await UnbanUserHandler(
        req.body as UnbanUserInput,
        this.authenticationDataSource
      );
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<any> {
    try {
      if (!(req.body && req.body.uid)) {
        throw new Error("UID not provided");
      }

      const result = await DeleteUserHandler(
        req.body as DeleteUserInput,
        this.authenticationDataSource
      );

      res.status(200).send({ message: result });
    } catch (err) {
      res.status(400).send(err);
    }
  }

  private setRoutes(app: Application) {
    app.route("/sign-in").post(this.signIn);
    app.route("/sign-up").post(this.signUp);
    app.route("/reset-password-email").get(this.resetPasswordEmail);
    app.route("/authenticate").get(this.authenticate);
    app.route("/sign-out").get(this.signOut);
    app.route("/change-password").get(this.changePassword);
    app.route("/ban-user").get(this.banUser);
    app.route("/unban-user").post(this.unBanUser);
    app.route("/delete-user").post(this.deleteUser);
  }
}
