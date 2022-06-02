const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.engineerGitHub = engineerGitHub
  }
  getRole() {
    return "Engineer"
  }
  getgitHub() {
    return this.gitHub;
  }
}
  // TODO - Write Engineer class so it satisfies the test cases when running `npm run test`

module.exports = Engineer;
