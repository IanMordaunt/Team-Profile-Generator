// Dependencies
const fs = require('fs')
const inquirer = require('inquirer')
const { inherits } = require('util')

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
            name: 'OfficeNumber'
        },
        {
            type: 'list',
            message: "Add a team member?",
            choices: [
                'Engineer',
                'Intern',
                'Finish'
            ],
            name: 'role'
        }
    ])

// Capture input data and push to employeeProfile Array or continue to diffrent employee function
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.OfficeNumber);
        employeeProfile.push(manager);

        if(data.role === 'Engineer') {
            engineerProfile();
            createPage();

        }else if (data.role === 'Intern') {
            internProfile();
            createPage();

        }else {
            createPage();

        }
    })
     .catch((err) => {
     console.error(err)
    });
}

// Function for generation of HTML
function createPage() {
    headerHTML();
    addCard();
}

// Function for Engineer Prompts
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
                'Intern',
                'Finish'
            ],
            name: 'role'
        }
    ])

    // Capture input data and push to employeeProfile Array or continue to diffrent employee function
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employeeProfile.push(engineer);

        if(data.role === 'Engineer') {
            engineerProfile();
            addCard();

        }else if (data.role === 'Intern') {
            internProfile();
            addCard();

        }else {
            addCard();
            footerHtml();
        }
    })
     .catch((err) => {
     console.error(err)
    });
}

// Function for Intern Prompts
function internProfile() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter intern's name:",
            name: 'name'
        },
        {
            type: 'input',
            message: "Enter intern's ID:",
            name: 'id'
        },
        {
            type: 'input',
            message: "Enter intern's Email:",
            name: 'email'
        },
        {
            type: 'input',
            message: "Enter intern's school:",
            name: 'school'
        },
        {
            type: 'list',
            message: "Add a team member?",
            choices: [
                'Engineer',
                'Intern',
                'Finish'
            ],
            name: 'role'
        }
    ])

    // Capture input data and push to employeeProfile Array or continue to diffrent employee function
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employeeProfile.push(intern);

        if(data.role === 'Engineer') {
            engineerProfile();
            addCard();

        }else if (data.role === 'Intern') {
            internProfile();
            addCard();

        }else {
            addCard();
            footerHtml();
            
        }
    })
     .catch((err) => {
     console.error(err)
    });
    
}


// Function that generates the html:5 (temp-code) and header of the webpage
function headerHTML() {
    const htmlHead = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
            </div>
        </nav>
        <section class="continer">`;

// Write htmlHead (string) to index.html
    fs.writeFile("./dist/index.html", htmlHead, (err) =>
    err ? console.error(err) : console.log('Page created successfully!')
   
    );
 
}

// Function that generates a card for every team member entered
function addCard() {
    let data = "";
    for(const i of employeeProfile) {
        data = `
            <div class="col-6">
                <div class="card mx-auto mb-3" style="width: 18rem">
                     <h4 class="card-header">${i.getName()}</h4>
                     <h5 class="card-role">${i.getRole()}</h5> 
                     <ul class="list-group list-group-flush">
                         <li class="list-group-item">ID: ${i.getId()}</li>
                          <li class="list-group-item">Email: <a href="mailto:${i.getEmail()}" target="_blank">${i.getEmail()}<a></li>
                           <li class="list-group-item">${uniqueInfo(i)}</li>
                      </ul>
                 </div>
             </div>`;
    }

// Write data (string) to index.html
        fs.appendFile("./dist/index.html", data,  (err) =>
        err ? console.error(err) : console.log('New team member added!')
        );
}

// Funtion that gets the uniqueInfo for specific team roles
function uniqueInfo(employee) {
    
     if (employee.getRole() === "Engineer") {
        return `GitHub: <a href="https://www.github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a>`;

     }else if (employee.getRole() === "Intern") {
        return `School: ${employee.getSchool()}`

    }else {
        return `Office Number: ${employee.getOfficeNumber()}`;
    }
}

// function uniqueIcon(employee) {
    
//     if (employee.getRole() === "Engineer") {
//        return `src="../dist/assets/glasses.png"`;

//     }else if (employee.getRole() === "Intern") {
//        return `src="../dist/assets/school.png"`
       
//    }else {
//        return `src="../dist/assets/coffee.png"`;
//    }
// }

function footerHtml () {

const htmlFoot = `
        </section>
        <section class="footer-container"
            <h4>TEAMWORK MAKES THE DREAM WORK</h4>
        </section>
    </body>
    </html>`;

    fs.appendFile("./dist/index.html", htmlFoot,  (err) =>
        err ? console.error(err) : console.log('Page Complete!')
        );
}
    



    
    


// function renderHtml() {

// }




managerProfile();
