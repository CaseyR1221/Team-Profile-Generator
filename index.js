// require classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createCards = require('./src/generateHTML');

// require packages
const inquirer = require('inquirer');

// empty array to add new employees to
let employees = [];

// Start the program
init = () => {
  console.log("Lets build a team!");
getInput(managerQuestions);
}

// Asks the user questions to build the team
getInput = (Qs) => {
  console.log("getting questions");
    inquirer
      .prompt(Qs)
      .then((answers) => {
        let e = answers;
        console.log(Qs[0].message);
        if (Qs[0].message.includes("Engineer")){
          // create new engineer obj
          employees.push(new Engineer(e.name, e.id, e.email, e.github));
          console.log(employees);
          menu();
        }
        else if (Qs[0].message.includes("Manager")) {
          // create new engineer obj
          employees.push(new Manager(e.name, e.id, e.email, e.office));
          console.log(employees);
          menu();
        } else {
          // create new intern
          employees.push(new Intern(e.name, e.id, e.email, e.school));
          console.log(employees);
          menu();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

// Menu asks the user if they want to add another employee or build the site
menu = () => {
  inquirer
  .prompt(menuQuestions)
  .then((answers) => {
  if (answers.menu == 'Add a Manager') {
    getInput(managerQuestions);
  }
  else if (answers.menu == 'Add an Engineer'){
    getInput(engineerQuestions)
  }
  else if (answers.menu == 'Add an Intern') {
    getInput(internQuestions);
  }
  else {
    console.log("Building the team site");
    createCards(employees);
    // build / sort / write files
  }
  })
  .catch((error) => {
  console.log(error);
  });
  }

const menuQuestions = [
  {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do next?',
    choices:[
      'Add a Manager',
      'Add an Engineer',
      'Add an Intern',
      'Build Team',
    ],
  }
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name?",
    default: "Bob"
  },  
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's ID #?",
    default: "12345"
  },  
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email address?",
    default: "me@gmail.com"
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the Manager's offices' phone number?",
    default: "123A"
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Engineer's name?",
    default: "Bob"
  },  

  {
    type: 'input',
    name: 'id',
    message: "What is the Engineer's ID #?",
    default: "12345"
  },  

  {
    type: 'input',
    name: 'email',
    message: "What is the Engineer's email address?",
    default: "me@gmail.com"
  },

  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's GitHub username?",
    default: "SuperStar1"
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Intern's name?",
    default: "Bob"
  },  
  {
    type: 'input',
    name: 'id',
    message: "What is the Intern's ID #?",
    default: "12345"
  },  
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email address?",
    default: "me@gmail.com"
  },
  {
    type: 'input',
    name: 'school',
    message: "What school is the Intern from?",
    default: "UCF"
  }
];

// starts the program
init();