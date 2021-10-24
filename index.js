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
        type: "confirm",
        message: "Do you want to include contributor information?",
        name: "contribs",
        default: "No"
    },
    {
        type: "confirm",
        message: "Press Y for the Contributor Covenant, N for Custom guidelines",
        name: "glconfirm",
        default: "Yes",
        when(answers) {
            return answers.contribs == "Yes"
        }
    },
    {
        type: "input",
        message: "What are the contributor guidelines?",
        name: "customcontribs",
        validate: (customcontribs) => {
            if (customcontribs) {
                return true;
            } else {
                console.log("You must enter contributor guidelines!");
                return false;
            }
        },
        when(answers) {
            return answers.glconfirm == "No"
        }
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
    {
        type: "confirm",
        message: "Do you want to include testing information?",
        name: "testing",
        default: "No"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "teststeps",
        validate: (teststeps) => {
            if (teststeps) {
                return true;
            } else {
                console.log("You must enter a testing instructions!");
                return false;
            }
        },
        when: ({ testing }) => testing
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
