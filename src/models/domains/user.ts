import { BaseDomain } from './base';

export class User extends BaseDomain {
  private _email?: String | null = null;
  private _password?: String | null;
  private _verifyPassword?: String | null;
  private _pseudo?: String | null;


  constructor(user?: User) {
    super();
    this._email = user ? user.Email : null;
    this._pseudo = user ? user.Pseudo : null;
    this._password = null;
    this._pseudo = null;
  }

  public get Email(): String | null {
    return this._email || null;
  }

  public set Email(email: String | null) {
    this._email = email;
  }

  public get Password(): String | null {
    return this._password || null;
  }

  public set Password(password: String | null) {
    this._password = password;
  }

  public get VerifyPassword(): String | null {
    return this._verifyPassword || null;
  }

  public set VerifyPassword(verifyPassword: String | null) {
    this._verifyPassword = verifyPassword;
  }

  public get Pseudo(): String | null {
    return this._pseudo || null;
  }

  public set Pseudo(pseudo: String | null) {
    this._pseudo = pseudo;
  }
}
