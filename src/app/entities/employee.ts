class Employee {
  username: string;
  password: string;
  employeeList: Employee[] = [];

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  createEmployee() {
    let test = new Employee('test', 'test2');
  }

  addData(username: string, password: string) {
    this.employeeList.push(new Employee(username, password));
  }

  getData(): void {
    console.log(this.employeeList.toString);
  }

}
