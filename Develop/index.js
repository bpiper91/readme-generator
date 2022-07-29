// TODO: Include packages needed for this application
// load inquirer module (npm package)
const inquirer = require('inquirer');

// load file system module (core library module)
const fs = require('fs');

// link to generateMarkdown.js for generating markdown from user input
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   // Project Title
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            };
        }
    },
    {   // Project Description
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject Promise and send error text
            if (err) {
                reject(err);
                // return out of function
                return;
            }

            // if no error, resolve
            resolve({
                ok: true,
                message: 'README.md created successfully.'
            });
        });
    });
};

// function to initialize app and create README
function init() {
    return inquirer
        // prompt user for project data
        .prompt(questions)
        // use user input to generate markdown for the README file
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        // create README.md using the generated markdown
        .then(readmeMarkdown => {
            return writeToFile('./output/README.md', readmeMarkdown);
        })
        // log success message
        .then(writeFileResponse => console.log(writeFileResponse.message))
        // handle errors
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
