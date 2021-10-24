const licenseArr = ["Mozilla 2.0", "MIT", "Apache 2.0"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === licenseArr[0]) {
        return `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-orange?style=plastic&logo=appveyor)](https://www.mozilla.org/en-US/MPL/2.0/)`;
    } else if (license === licenseArr[1]) {
        return `[![License: MIT License](https://img.shields.io/badge/License-Apache%202.0-yellow?style=plastic&logo=appveyor)](https://opensource.org/licenses/MIT)`;
    } else if (license === licenseArr[1]) {
        return `[![License: Apache License 2.0](https://img.shields.io/badge/License-MIT-blue?style=plastic&logo=appveyor)](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === licenseArr[0]) {
        return `[${licenseArr[0]}](https://www.mozilla.org/en-US/MPL/2.0/)`;
    } else if (license === licenseArr[1]) {
        return `[${licenseArr[1]}](https://opensource.org/licenses/MIT)`;
    } else if (license === licenseArr[2]) {
        return `[${licenseArr[2]}](https://www.apache.org/licenses/LICENSE-2.0)`;
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === licenseArr[0]) {
        return `Read more about ${licenseArr[0]} here:`;
    } else if (license === licenseArr[1]) {
        return `Read more about ${licenseArr[1]} here:`;
    } else if (license === licenseArr[2]) {
        return `Read more about ${licenseArr[2]} here:`;
    } else {
        return "";
    }
}

function hasContributors(contribs) {
  if (contribs == false) {
    return ""
  } else if (contribs == true) {
    return `* [Contributing](#contributing)`;
  } else {
    return ""
  }
}

function hasTests(teststeps) {
  if (teststeps.length < 1) {
    return ""
  } else {
    return `* [Tests](#tests)`;
  }
}

function renderCovenant(glconfirm) {
  if (glconfirm) {
    return `## Contributing
This project utilizes the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
    `;
  } else {
    return ""
  }
}

function renderCustomGL(mygl) {
  if (mygl !== undefined) {
    return `## Contributing
${mygl}
    `
  } else {
    return ""
  }
}

function renderTesting(teststeps) {
  if (teststeps.length < 1) {
    return ""
  } else {
    return `## Testing
${teststeps}
    `
  }
}

function renderQuestions(username, repo, email, title) {
  let tempTitle = title;
  let smartTitle = tempTitle.replace(/\s/g, '%20');

  let tempName = username;
  let smartName = tempName.charAt(0).toUpperCase() + tempName.slice(1).toLowerCase();

  return `## Questions
If you have any questions on this project:
* please [open an issue](${repo})
* or contact me via [email](mailto:${email}?subject=[Github%20Question%20-%20${smartTitle}]).

Visit my [profile](https://github.com/${smartName}) to see more great projects!
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Badges
${renderLicenseBadge(data.license)}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${hasContributors(data.contribs)}
${hasTests(data.teststeps)}
* [Questions?](#questions)

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
${data.installsteps}

## Usage
${data.usage}

${renderCovenant(data.glconfirm)}

${renderCustomGL(data.mygl)}

${renderTesting(data.teststeps)}

${renderQuestions(data.username, data.repo, data.email, data.title)}
`;
}

module.exports = generateMarkdown;
