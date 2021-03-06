const inquirer = require(`inquirer`);

var {generateMarkdown} = require (`./utils/generateMarkdown.js`);

 function init() {
    inquirer.prompt([
      {
        type: `input`,
        message: `What is the name of the application ?`,
        name: `title`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please enter a title for your application`;
          }
        },
      },
      {
        type: `input`,
        message: `Briefly describe what the application does`,
        name: `description`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please enter some information about your application/project`;
          }
        },
      },
      {
        type: `input`,
        name: `installs`,
        message: `In order to install please use:`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please enter some instructions on how to implement your application`;
          }
        },
      },
      {
        type: `input`,
        name: `usage`,
        message: `Usage`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Usage???????`;
          }
        },
      },
      {
        type: `list`,
        name: `licences`,
        message: `Please select the applicable licence`,
        choices: [`NPM`, `MIT`,`GNU`,`MPL`],
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please select at least one option`;
          }
        },
      },
      {
        type: `input`,
        name: `contributing`,
        message: `Contributing`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Will there be contributions?`;
          }
        },
      },
      {
        type: `input`,
        name: `tests`,
        message: `Tests`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please details about the testing done`;
          }
        },
      },
      {
        type: `input`,
        name: `gitlink`,
        message: "Git Hub Profile",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please enter your GIT hub profile`;
          }
        },
      },
      {
        type: `input`,
        name: `email`,
        message: `Please enter an email address`,
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return `Please enter your email address`
          }
        }
      }
    ]
    )
    .then(answers => generateMarkdown(answers))   
    .catch ((error) => {
      if (error) {
      console.log (`Error in environments`,error)
    }
  }
)};
init();
