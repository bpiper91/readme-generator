// TODO: Include packages needed for this application
// load inquirer module (npm package)
const inquirer = require('inquirer');
// take input data from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   // Project Title
        type: 'input',
        name: 'name',
        message: 'What is your project title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            };
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// function to initialize app and create README
function init() {
    return inquirer
        // prompt user for project data
        .prompt(questions)
        // use user input to generate markdown for the README file
        .then(readmeData => {
            console.log(readmeData);
            // return generateMarkdown(readmeData);
        })
        // create README.md using the generated markdown
        // .then(readmeMarkdown => {
        //     return writeToFile('./output/README.md', readmeMarkdown);
        // })
        // handle errors
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
