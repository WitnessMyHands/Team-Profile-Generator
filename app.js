const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./script/Manager');
const Engineer = require('./script/Engineer');
const Intern = require('./script/Intern');

let employeeId = [];
let teamList = [];
function appPrompts() {
    // Manager Information    
    function managerPrompts() {
        console.log('Build Your Team!');
        inquirer.prompt([
        { 
            type: 'input',
            message: 'Managers Name:',
            name: 'managerName',
            validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
        },
        { 
            type: 'input',
            message: 'Managers Id:',
            name: 'managerId',
            validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
        },
        { 
            type: 'input',
            message: 'What is the Managers Email Address?',
            name: 'managerEmail',
            validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
        },
        { 
            type: 'input',
            message: 'What is the Office Number?',
            name: 'managerNumber',
            validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
        },
        ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
                teamList.push(manager);
                employeeId.push(answers.managerId);
                createTeam();
            });
    }
    // Employee Selection
    function createTeam() {
        inquirer.prompt([
        {
            type: 'list',
            message: "What is the Employee's Role?",
            choices: ['Engineer', 'Intern', 'No More Team Members'],
            name: 'employeeType',
        },
        ])
            .then(selectedEmployee => {
                switch (selectedEmployee.employeeType) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                        selectTeam();
                }
            });
        } // Engineer Information
        function addEngineer() {
            inquirer.prompt([
            {
                type: 'input',
                message: 'Engineers Name:',
                name: 'engineerName',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            { 
                type: 'input',
                message: 'Engineers Id:',
                name: 'engineerId',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            { 
                type: 'input',
                message: 'What is the Engineers Email Address?',
                name: 'engineerEmail',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            {
                type: 'input',
                message: 'What is the Engineers GitHub Username?',
                name: 'engineerGithub',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamList.push(engineer);
                employeeId.push(answers.engineerId);
                createTeam();
            });
        } // Intern Information
        function addIntern() {
            inquirer.prompt([
            {
                type: 'input',
                message: 'Interns Name:',
                name: 'internName',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            { 
                type: 'input',
                message: 'Interns Id:',
                name: 'internId',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            { 
                type: 'input',
                message: 'What is the Interns Email Address?',
                name: 'internEmail',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            {
                type: 'input',
                message: 'What School did the Intern Attend?',
                name: 'internSchool',
                validate: (value) => {if(value){return true} else {return 'Input a response to continue.'}},
            },
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamList.push(intern);
                employeeId.push(answers.internId);
                createTeam();
            });
        } 
        // Draft HTML
    function selectTeam() {
        let allCards = '';

        teamList.forEach(item => {
            let cardString = item.createCard();
            allCards += cardString;
        });

        let entireHTML = `
        <!DOCTYPE html>
        <html lang='en'>

            <head>
                <meta charset='UTF-8'>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0' crossorigin='anonymous'>
                <title>The 'Bee' Team</title>
            </head>

            <body>
                <div class='container-fluid bg-warning text-center d-flex align-items-center justify-content-center' style='height: 200px'>
                    <h1 class='text-center'>The 'Bee' Team</h1>
                </div>
                
                <!-- Begin Cards -->
                <div class='d-flex justify-content-center'>
                    ${allCards}
                </div>
                <!-- End Cards -->

                <div class='position-relative mt-5 bottom-0 start-50 translate-middle-x'>
                    <img src='../assets/images/bee.gif' class='img-fluid' alt='Bee Mascot'>
                </div>
            </body>
        </html>
        `;

        fs.writeFile('./output/team.html', entireHTML, function(err) {
            if (err) {
                return console.log(err);
            }
        });
    }
    managerPrompts();
}
appPrompts();