export interface AuthenticateOutput {
  id: string;
  token: string;
  refreshToken: string;
  authService: AuthService;
  thirdProvider: ThirdProvider;
}

export enum AuthService {
  Cognito = "Cognito",
  Firebase = "Firebase",
}

export enum ThirdProvider {
  Facebook = "facebook",
  Google = "google",
  None = "None",
}
