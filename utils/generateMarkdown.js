function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Apache License 2.0") {
    return  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "GPL 3.0") {
    return  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "ISC License") {
    return  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "None") {
    return  "[![License: ISC](https://img.shields.io/badge/license-none-lightgrey)](https://opensource.org/licenses/None)";
  }
  
}

function generateMarkdown(data) {
    return `
  # ${data.title}
  ${renderLicenseBadge(data.license, data.username, data.title)}
  
  ## Description:
  ${data.description}
  __________________________________

  > ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:
  To install necessary dependencies run the following command:
  > ${data.installation}

  ## Usage Information: 
  ${data.usage}

  ## Contributing Information: 
  ${data.contributing}
  
  ## Tests:
  To run tests, run the following command: 
  > ${data.tests}
  
  ## Questions:
  
  > <img src="${data.avatar_url}" width="250"></img>
  _____________________________________________________
  > Creator Github account: [Kasey Raymond](${data.url})

  > Email Creator: [kaseyleigh1978@gmail.com](mailto:)`
  }
  
  module.exports = generateMarkdown;
