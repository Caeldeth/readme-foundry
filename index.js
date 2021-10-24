// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title? (Required)",
        name: "title",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("You must enter a project title!");
                return false;
            }
        },
    },
    {
        type: "input",
        message: "What is the project description? (Required)",
        name: "description",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("You must enter a project description!");
                return false;
            }
        },
    },
    {
        type: "checkbox",
        message: "What optional sections would you like to add?",
        name: "sections",
        // don't give options for description, table of contents, installation, usage, license, questions
        choices: ["Contributing", "Tests"],
    },
    {
        type: "input",
        message: "What are the steps for installation?",
        name: "installsteps",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    // Conditional for selecting contribution guidelines based on optional sections checkbox value
    {
        type: "list",
        message: "Would you like to include the Contributor Covenant or custom contribution guidelines?",
        name: "glconfirm",
        choices: ["Contributor Covenant", "Custom"],
        default: "Contributor Covenant",
        when: (answers) => answers.sections.includes('Contributing')
    },
    {
        type: "input",
        message: "What are your custom contribution guidelines?",
        name: "customguidelines",
        validate: (customguidelines) => {
            if (customguidelines) {
                return true;
            } else {
                console.log("You must enter a custom guidelines!");
                return false;
            }
        },
        when: (answers) => answers.glconfirm.includes("Custom")
    },
    // Conditionals for test steps if included
    {
        type: "input",
        message: "What are the test instructions?",
        name: "teststeps",
        validate: (teststepsInput) => {
            if (teststepsInput) {
                return true;
            } else {
                console.log("You must enter a custom guidelines!");
                return false;
            }
        },
        when: (answers) => answers.sections.includes("Tests")
    },
    // License selection
    {
        type: "list",
        message: "what license should the project have?",
        name: "license",
        choices: ["Mozilla 2.0", "MIT", "Apache 2.0"],
    },
    // User info
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "Provide a link to the repo",
        name: "repo"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err) => err ? console.log(err) : console.log(`README.md has been generated.`))
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then((answers) => generateMarkdown(answers))
    .then((data) => writeToFile('./dist/README.md', data))
    .catch((err) => {
        console.log(err);
    });
