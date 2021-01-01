import { AuthenticateOutput } from "./authentication.model";

export interface AuthenticationDataSource {
  signInWithEmail(email: string, password: string): Promise<AuthenticateOutput>;
  signUpWithEmail(email: string, password: string): Promise<AuthenticateOutput>;
  signOut(token: string): Promise<void>;
  resetPasswordEmail(email: string): Promise<void>;
  changePassword(token: string, newPassword: string): Promise<void>;
  authenticate(token: string): Promise<AuthenticateOutput>;
  facebookAuthenticate(token: string): Promise<AuthenticateOutput>;
  googleAuthenticate(token: string): Promise<AuthenticateOutput>;
  banUser(uid: string): Promise<void>;
  unbanUser(uid: string): Promise<void>;
  deleteUser(uid: string): Promise<void>;
}
