export class Employee {
  username: string;
  password: string;
  vacationClaim: number;

  constructor(username: string, password: string, vacationClaim: number) {
    this.username = username;
    this.password = password;
    this.vacationClaim = vacationClaim;
  }

}
