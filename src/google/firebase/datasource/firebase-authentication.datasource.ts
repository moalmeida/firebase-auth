import * as admin from "firebase-admin";
import { default as firebase } from "firebase";
import { getConfig } from "../../../config";
import { AuthenticationDataSource } from "../../../core/datasource/authentication.datasource";
import {
  AuthenticateOutput,
  AuthService,
  ThirdProvider,
} from "../../../core/datasource/authentication.model";

export class FirebaseAuthenticationDataSource
  implements AuthenticationDataSource {
  private user: firebase.User;

  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        credential: admin.credential.cert({
          projectId: getConfig().firebase.projectId,
          clientEmail: getConfig().firebase.clientEmail,
          privateKey: getConfig().firebase.privateKey,
        }),
        apiKey: getConfig().firebase.apiKey,
      });
    }

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: getConfig().firebase.projectId,
          clientEmail: getConfig().firebase.clientEmail,
          privateKey: getConfig().firebase.privateKey,
        }),
      });
    }
  }

  public async signUpWithEmail(
    email: string,
    password: string
  ): Promise<AuthenticateOutput> {
    return new Promise<AuthenticateOutput>(async (res, rej) => {
      try {
        const credential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const customToken = await admin
          .auth()
          .createCustomToken(credential.user.uid);

        res(this.firebaseCredentialToAuthInfo(credential, customToken));
      } catch (err) {
        rej(err);
      }
    });
  }

  public async signInWithEmail(
    email: string,
    password: string
  ): Promise<AuthenticateOutput> {
    return new Promise<AuthenticateOutput>(async (res, rej) => {
      try {
        const credential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const customToken = await admin
          .auth()
          .createCustomToken(credential.user.uid);

        res(this.firebaseCredentialToAuthInfo(credential, customToken));
      } catch (err) {
        rej(err);
      }
    });
  }

  public async resetPasswordEmail(email: string): Promise<void> {
    return new Promise<void>(async (res, rej) => {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        res();
      } catch (err) {
        rej(err);
      }
    });
  }
  public async changePassword(
    token: string,
    newPassword: string
  ): Promise<void> {
    await this.authenticate(token);
    await this.user.updatePassword(newPassword);
  }

  public async facebookAuthenticate(
    token: string
  ): Promise<AuthenticateOutput> {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    return new Promise<AuthenticateOutput>(async (res, rej) => {
      await firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          res({
            id: result.user.uid,
            token,
            refreshToken: result.user.refreshToken,
            authService: AuthService.Cognito,
            thirdProvider: ThirdProvider.Facebook,
          });
        })
        .catch((err) => console.log("err: ", err));
    });
  }

  public async googleAuthenticate(token: string): Promise<AuthenticateOutput> {
    const credential = firebase.auth.GoogleAuthProvider.credential(token);

    return new Promise<AuthenticateOutput>(async (res, rej) => {
      await firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          res({
            id: result.user.uid,
            token,
            refreshToken: result.user.refreshToken,
            authService: AuthService.Cognito,
            thirdProvider: ThirdProvider.Google,
          });
        })
        .catch((err) => console.log("err: ", err));
    });
  }
  public async authenticate(token: string): Promise<AuthenticateOutput> {
    await firebase.auth().signInWithCustomToken(token);

    this.user = firebase.auth().currentUser;

    return {
      id: this.user.uid,
      token,
      refreshToken: this.user.refreshToken,
      authService: AuthService.Firebase,
      thirdProvider: ThirdProvider.None,
    };
  }

  public async signOut(token: string): Promise<void> {
    await this.authenticate(token);
    await firebase.auth().signOut();
  }

  public async banUser(uid: string): Promise<void> {
    return new Promise(async (res, rej) => {
      try {
        await admin.auth().updateUser(uid, {
          disabled: true,
        });

        res();
      } catch (err) {
        rej(err);
      }
    });
  }

  public async unbanUser(uid: string): Promise<void> {
    await admin.auth().updateUser(uid, {
      disabled: false,
    });
  }

  public async deleteUser(uid: string): Promise<void> {
    await admin.auth().deleteUser(uid);
  }

  private async firebaseCredentialToAuthInfo(
    firebaseCredentials: firebase.auth.UserCredential,
    customToken?: string
  ): Promise<AuthenticateOutput> {
    const token = customToken || (await firebaseCredentials.user.getIdToken());
    return {
      id: firebaseCredentials.user.uid,
      token,
      refreshToken: firebaseCredentials.user.refreshToken,
      authService: AuthService.Firebase,
      thirdProvider: ThirdProvider.None,
    };
  }
}
