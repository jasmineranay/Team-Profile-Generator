const Employee = require("./Employee");

class Manager extends Employee {
  // TODO - Write Manager class so it satisfies the test cases when running `npm run test`
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum
  }
  getRole() {
    return "Manager"
  }
  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
