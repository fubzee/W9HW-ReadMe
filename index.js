// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const { Console } = require(`console`);
var readMe = require (`./utils/generateMarkdown.js`);


// TODO: Create an array of questions for user input

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
    mesasge: `Installation Instructions`,
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
    message: `Please select the applicable licences`,
    choices: [`NPM(inquirer)`, `NPM(fs)`],
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
        return `Please select at least one option`;
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
    display: "Git Hub Profile",
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
])
.then ((answers) => {generateMarkdown(answers)})
.catch((err) => {console.log(`error with generating README`, err)})
;

// TODO: Create a function to initialize app



function init() {
 
  fs.writeFileSync(`./utils/README.md`, readMe);
//  .catch((err) => err ? console.log (err) : console.log(`Successfully wrote README.md`);
}
//   inquirer.prompt(questions).then((answers) => {`./utils/README.md`,generateMarkdown(answers)))
//   then 
//     console.log(answers)
//     fs.writeFile(`./utils/README.md`, function ()  {generateMarkdown(answers)})
//     .then(() => console.log("Successfully wrote README.md"))
//     .catch((err) => console.error(err));
// });
// }



init();
