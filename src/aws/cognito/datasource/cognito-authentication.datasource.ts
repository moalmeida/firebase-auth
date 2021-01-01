import { AuthenticationDataSource } from "../../../core/datasource/authentication.datasource";
import { AuthenticateOutput } from "../../../core/datasource/authentication.model";

export class CognitoAuthenticationDataSource
  implements AuthenticationDataSource {
  signInWithEmail(
    email: string,
    password: string
  ): Promise<AuthenticateOutput> {
    throw new Error("Method not implemented.");
  }
  signUpWithEmail(
    email: string,
    password: string
  ): Promise<AuthenticateOutput> {
    throw new Error("Method not implemented.");
  }
  signOut(token: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  resetPasswordEmail(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  changePassword(token: string, newPassword: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  authenticate(token: string): Promise<AuthenticateOutput> {
    throw new Error("Method not implemented.");
  }
  facebookAuthenticate(token: string): Promise<AuthenticateOutput> {
    throw new Error("Method not implemented.");
  }
  googleAuthenticate(token: string): Promise<AuthenticateOutput> {
    throw new Error("Method not implemented.");
  }
  banUser(uid: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  unbanUser(uid: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteUser(uid: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
