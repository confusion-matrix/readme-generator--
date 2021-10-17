function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    case "IBM":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
    case "GNU":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "IBM":
      return "https://opensource.org/licenses/IPL-1.0";
    case "GNU":
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }
}

function renderLicenseSection(license) {
  return [renderLicenseBadge(license), renderLicenseLink(license)];
}

function generateMarkdown(data) {
  let licenses = renderLicenseSection(data.license)
  return `# ${data.projectName}
  ${licenses[0]}
  ## Table of Contents
  * [1. Description](#-1-description)
  * [2. installation](#-2-installation)
  * [3. Usage](#-3-usage)
  * [4. License](#-4-license)
  * [5. Contributors](#-5-contributors)
  * [6. Tests](#-6-tests)
  * [7. Questions](#-7-questions)
  ### 1. Description 
  ${data.description}
  ### 2. Installation
  ${data.installation}
  ### 3. Usage 
  ${data.usage}
  ### 4. License
    Info: ${licenses[1]}
  ### 5. Contributors 
  ${data.contributors}
  ### 6. Tests
  ${data.tests}
  ### 7. Questions
  Contact me at the following links:
  https://github.com/${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
