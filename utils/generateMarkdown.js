// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  switch(license){

    case 'NPM(inquirer)':
       var badge = `https://img.shields.io/npm/l/inquirer`;
       break;
    case 'NPM(fs)':
      var badge =  'https://img.shields.io/npm/l/fs';
      break;
    default:
      return badge = ` `
  }
}  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license){

    case 'NPM(inquirer)':
       var liclink = `https://img.shields.io/npm/l/inquirer`;
       break;
    case 'NPM(fs)':
      var liclink =  'https://img.shields.io/npm/l/fs';
      break;
    default:
      return liclink= ` `
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
       renderLicenseBadge(license);
       renderLicenseLink(license);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown (answers) {
  renderLicenseSection(data.license);
  var readMe = 
          `# ${data.title}
            ${badge}
            ${data.description}
            ---
          ## Table of Contents:  
          * [Installation](#Installation)
          * [Licence](#License)
          * [Usage](#usage)
          * [Contributing](#contributing)
          * [Testing](#Testing)
          * [GIT Profile](# GIT Profile)
          * [Questions](#questions)
          ### Installation:
          In order to install please use:
          ${data.installs}
          ### Licence
          This project is licensed under:
          ${liclink}
          ### Contributing
          ${data.contributing}
          ### Testing
          ${data.testing}
          ### GIT Profile
          This project can be found at : ${data/gitlink}
          ### Questions
          * If you have any questions about this application please email me at ${email}`;

module.exports = {readMe}  
};


