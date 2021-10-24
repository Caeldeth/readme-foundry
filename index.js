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
        type: "editor",
        message: "What is the project description? (Required)",
        name: "description",
        validate: (descriptionEditor) => {
            if (descriptionEditor) {
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
        when: ({ contribs }) => contribs
    },
    {
        type: "editor",
        message: "What are the contributor guidelines?",
        name: "mygl",
        validate: (myglEditor) => {
            if (myglEditor) {
                return true;
            } else {
                console.log("You must enter contributor guidelines!");
                return false;
            }
        },
        when(answers) {
            return answers.glconfirm == false
        }
    },
    {
        type: "editor",
        message: "What are the steps for installation?",
        name: "installsteps",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "teststeps",
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
        message: "Provide a link to the repo: ",
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
