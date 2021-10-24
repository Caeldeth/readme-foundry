const licenseArr = ["Mozilla 2.0", "MIT", "Apache 2.0"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === licenseArr[0]) {
        return `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-orange?style=plastic&logo=appveyor](https://www.mozilla.org/en-US/MPL/2.0/)`;
    } else if (license === licenseArr[1]) {
        return `[![License: MIT License](https://img.shields.io/badge/License-Apache%202.0-yellow?style=plastic&logo=appveyor](https://opensource.org/licenses/MIT)`;
    } else if (license === licenseArr[1]) {
        return `[![License: Apache License 2.0](https://img.shields.io/badge/License-MIT-blue?style=plastic&logo=appveyor](https://www.apache.org/licenses/LICENSE-2.0)`;
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;
