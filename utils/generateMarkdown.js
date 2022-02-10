// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const { error } = require("console");
const fs = require(`fs`);

function renderLicenseBadge(badge) {
  console.log(badge);
  
  switch(badge){

    case 'NPM':
       badge = `(https://img.shields.io/badge/license-npm-red.svg)`;
       break;
    case 'GNU':
      badge =  `(https://img.shields.io/badge/License-GNUv3-blue.svg)`;
      break;
    case 'MIT':
      badge =  `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'MPL':
      badge =  `(https://img.shields.io/badge/License-MPL-yellow.svg)`;
      break;
    default:
      return badge = ` `
  }
  return badge;
}  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(liclink) {
console.log(liclink);

  switch(liclink){

    case `NPM`:
      liclink = `![License npm]https://img.shields.io/npm/1/inquirer`;
      break;
    case `GNU`:
      liclink =  `![License: GPL v3]https://img.shields.io/gnu`;
      break;
    case `MPL`:
      liclink = `![License: MIT]https://img.shields.io/MPL/l/fs`; 
      break;
    case `MIT`:
      liclink = `![License: MIT]https://img.shields.io/MIT/l/fs`;
      break;
    default:
      return liclink= ` `
  }
  return liclink;
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
 //      renderLicenseBadge(license);
 //      renderLicenseLink(license);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown (answers) {
  console.log(answers);
//  renderLicenseSection(answers.license);
  var readMe = 
`# ${answers.title}

  ${renderLicenseBadge(answers.licences)}


---
${answers.description}
---
## Table of Contents: 

* [Installation](#Installation)
* [Licence](#License)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#Testing)
* [GIT Profile](#gitprofile)
* [Questions](#questions)
---
## Installation 
:exclamation:In order to install please use:
${answers.installs}
---
## Licence
This project is licensed under:
 ${renderLicenseLink(answers.licences)}
---
## Usage
 ${answers.usage}
---
## Contributing
 ${answers.contributing}
 ---
## Testing
${answers.tests}
---
## GIT Profile :link: 
This project can be found at : ${answers.gitlink}
---
### Questions :question:
* If you have any questions about this application please email me at ${answers.email}`;

fs.writeFile(`./README.md`,readMe, error => error? console.log(error) : console.log(`File created`)) 
};

module.exports = {generateMarkdown}

