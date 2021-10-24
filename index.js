// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What are the contents?",
        name: "table",
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
