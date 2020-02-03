/* eslint-disable lines-between-class-members */
export class User {
  private email?: String | null;
  private password?: String | null;
  private verifyPassword?: String | null;
  private pseudo?: String | null;


  constructor(user?: User) {
    this.email = user ? user.email : null;
    this.pseudo = user ? user.pseudo : null;
  }
}
