const Manager = require("./Manager");
const inquirer = require("inquirer");
const fs = require("fs");

function init() {
    createManager();

}

init()

var employeeArr = [];

function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?",

    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's ID?",

},
{
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email?",

},
{
    type: "input",
    name: "managerofficeNum",
    message: "What is the team manager's office number?",

},

]) 
.then ((answers) => {
    const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerofficeNum
    );
    employeeArr.push(manager)
    addMoreEmployees()

});
}
function addMoreEmployees(){
    inquirer.prompt([
        {
            type:"list",
            name: "whatToDO",
            message: "Do you want to add more employees?",
            choices: ["New Engineer", "New Intern", "Exit"]

        }

    ]) .then ((answer) => {
        switch(answer.whatTodDO) {
            case "New Engineer":
                addEngineer();
            break;
            case "New Intern":
                addIntern();
            break
            default:
                exit()
        }
    })
}

function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        }, {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub?"
        },
    ]) .then((answers) => {
        const engineer = new Engineer(answers.engineerName. answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        engineer = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGitHub
        );
        employeeArr.push(engineer)
        addMoreEmployees()

    });
}

function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is the intern's ID?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        }, {
            type: "input",
            name: "internGitHub",
            message: "What is the intern's GitHub?"
        },
    ]) .then((answers) => {
        const intern = new Intern(answers.engineerName. answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        intern = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internGitHub
        );
        employeeArr.push(intern)
        addMoreEmployees()

    });
}

function createCard(employee) {
    console.log(employee)
    // if(employee.role === "Manager") {
    //     let extraProperty = employee.managerofficeNum
    // }
    return `
    <div class="card">
    <h3>${employee.name}</h3>
    <h4>${employee.role}<h4>

    <p>${employee.id}</p>
    <p>${employee.email}</p>
    <p>${employee.officeNumber || employee.GitHub || employee.school}</p>


    </div>

    `
}

function createHtml() {
    return `
    
    `;
}
function exit() {
    var HTML = "";
    for (var i = 0; i < employeeArr.length; i++) {
         console.log(i)
        HTML = createCard(employeeArr[i]);

    }
    fs.writeFile("./READ.html", HTML, function(err){
        console.log(err)
        console.log ("Your employee has been created!")
    })
}

