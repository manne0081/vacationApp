export class Employee {
  nameI: string;
  nameII: string;
  username: string;
  password: string;
  vacationClaim: number;

  constructor(nameI: string, nameII: string, username: string, password: string, vacationClaim: number) {
    this.nameI = nameI;
    this.nameII = nameII;
    this.username = username;
    this.password = password;
    this.vacationClaim = vacationClaim;
  }

}
