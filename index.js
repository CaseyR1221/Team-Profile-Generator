// require classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createCards = require('./src/generateHTML');
// require packages
const inquirer = require('inquirer');

let employees = [];
// Start the program by asking for manager info
init = () => {
getInput(managerQuestions);
}
// Menu asks the user if they want to add another employee or build the site
menu = () => {
  console.log("Welcome to the Team Builder!");
  inquirer
  .prompt(menuQuestions)
  .then((answers) => {
  if (answers.menu == 'Add an Engineer') {
    getInput(engineerQuestions);
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
      'Add an Engineer',
      'Add an Intern',
      'Build Team',
    ],
  }
];

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Manager's name?"
  },  
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's ID #?"

  },  
  {
    type: 'input',
    name: 'email',
    message: "What is the Manager's email address?"
  },
  {
    type: 'input',
    name: 'office',
    message: "What is the Manager's offices' phone number?"

  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Engineer's name?"

  },  

  {
    type: 'input',
    name: 'id',
    message: "What is the Engineer's ID #?"

  },  

  {
    type: 'input',
    name: 'email',
    message: "What is the Engineer's email address?"

  },

  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's GitHub username?"

  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Intern's name?"
  },  
  {
    type: 'input',
    name: 'id',
    message: "What is the Intern's ID #?"

  },  
  {
    type: 'input',
    name: 'email',
    message: "What is the Intern's email address?"

  },
  {
    type: 'input',
    name: 'school',
    message: "What school is the Intern from?"

  }
];

// Asks the user questions to build the team
getInput = (empQs) => {
console.log("getting questions");
  inquirer
    .prompt(empQs)
    .then((answers) => {
      let e = answers;
      console.log(empQs[0].message);
      if (empQs[0].message.includes("Engineer")){
        // create new engineer obj
        employees.push(new Engineer(e.name, e.id, e.email, e.github));
        console.log(employees);
        menu();
      }
      else if (empQs[0].message.includes("Manager")) {
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
// starts the program
init();