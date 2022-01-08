const fs = require('fs')
const inquirer = require('inquirer')

// Employee Classes 
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


// Employee data 
const employeeProfile = [];


// Function for Manager Prompts
function managerProfile() {
    inquirer.prompt([
        {
          type: 'input',
          message: "Enter manager's name:",
          name: 'name'
        },
        {
            type: 'input',
            message: "Enter manager's ID: ",
            name: 'id'
        },
        {
            type: 'input',
            message: "Enter manager's Email:",
            name: 'email'
        },
        {
            type: 'imput',
            message: "Enter manager's office number:",
            name: 'officeNumber'
        },
        {
            type: 'list',
            message: "Add a team member?",
            choices: [
                'Engineer',
                'Inter',
                'Finish'
            ],
            name: 'role'
        }
    ])

    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNum);
        employeeProfile.push(manager);

        if(data.role === 'Engineer') {
            engineerProfile();

        }else if (data.role === 'Intern') {
            interProfile();
        }else {
            renderHtml();
        }
    })
     .catch((err) => {
     console.error(err)
    });
}

function engineerProfile() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name:",
            name: 'name'
        },
        {
            type: 'input',
            message: "Enter engineer's ID:",
            name: 'id'
        },
        {
            type: 'input',
            message: "Enter engineer's Email:",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter engineer's GitHub username:",
            name: 'github'
        },
        {
            type: 'list',
            message: "Add a team member?",
            choices: [
                'Engineer',
                'Inter',
                'Finish'
            ],
            name: 'role'
        }
    ])

//     .then((data) => {
//         const engineer = new Engineer(data.name, data.id, data.email, )
//     }
}




managerProfile();
