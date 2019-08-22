export class PasswordChecker {
  protected password: string;

  constructor(password: string) {
    this.password = password;
  }
  public isStrong(password: string): boolean {
    return false;
  }

  public isLongEnough() {
    return this.password.length > 7;
  }

  public containsAlpha() {
    // look for one or more characters, no spaces
    const regex = /\w+\S/g;
    return regex.test(this.password);
  }

  public containsNumber() {
    const regex = /\d+\S/g;
    return regex.test(this.password);
  }
}
