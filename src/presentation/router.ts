import { SigninHandler } from "./handler/firebase-login";
import { SignUpHandler } from "./handler/firebase-signup";
import { Context, AuthType } from "../context";
import { SendResetPasswordEmailHandler } from "./handler/send-reset-password-email";
import { AuthenticateHandler } from "./handler/authenticate";
import { SignOutHandler } from "./handler/sign-out";
import { ChangePasswordHandler } from "./handler/change-password";
import { BanUserHandler } from "./handler/banUser";
import { UnbanUserHandler } from "./handler/unbanUser";
import { DeleteUserHandler } from "./handler/delete-user";

export interface application {
  route: any;
  post: any;
  get: any;
  delete: any;
  patch: any;
}

export interface Request {
  headers: any;
  body: any;
  query: any;
}

export interface Response {
  status: any;
  send: any;
}

export class Routes {
  public setRoutes(app: application) {
    app.route("/firebase/signin").post(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!req.body) {
            throw new Error("Missing Body");
          }
          const result = await SigninHandler(
            req.body,
            new Context(AuthType.Firebase)
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/signup").post(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!req.body) {
            throw new Error("Missing Body");
          }
          const result = await SignUpHandler(
            req.body,
            new Context(AuthType.Firebase)
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/reset-password-email").get(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!(req.query && req.query["email"])) {
            throw new Error("Missing email parameter");
          }
          const email = req.query["email"];
          const result = await SendResetPasswordEmailHandler(
            { email },
            new Context(AuthType.Firebase)
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/authenticate").get(
      async (req: Request, res: Response): Promise<any> => {
        try {
          const result = await AuthenticateHandler(
            req.headers,
            new Context(AuthType.Firebase)
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/sign-out").get(
      async (req: Request, res: Response): Promise<any> => {
        try {
          const result = await SignOutHandler(
            req.headers,
            new Context(AuthType.Firebase)
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/change-password").get(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!(req.headers && req.headers["token"])) {
            throw new Error("Missing information in headers");
          }

          if (!(req.body && req.body["newPassword"])) {
            throw new Error("Missing newPassword parameter in body");
          }

          const result = await ChangePasswordHandler(
            { headers: req.headers, body: req.body },
            new Context(AuthType.Firebase)
          );
          res.status(200).send({ message: result });
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/ban-user").get(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!(req.headers && req.headers["token"])) {
            throw new Error("Missing information in headers");
          }

          const result = await BanUserHandler(
            req.headers,
            new Context(AuthType.Firebase)
          );
          res.status(200).send({ message: result });
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/unban-user").post(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!(req.body && req.body.userId)) {
            throw new Error("UserId not provided");
          }

          const result = await UnbanUserHandler(
            { id: req.body.userId },
            new Context(AuthType.Firebase)
          );
          res.status(200).send({ message: result });
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );

    app.route("/firebase/delete-user").post(
      async (req: Request, res: Response): Promise<any> => {
        try {
          if (!(req.body && req.body.userId)) {
            throw new Error("UserId not provided");
          }

          const result = await DeleteUserHandler(
            { id: req.body.userId },
            new Context(AuthType.Firebase)
          );

          res.status(200).send({ message: result });
        } catch (err) {
          res.status(400).send(err);
        }
      }
    );
  }
}
