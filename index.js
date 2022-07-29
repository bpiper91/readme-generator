// load inquirer module (npm package)
const inquirer = require('inquirer');

// load file system module (core library module)
const fs = require('fs');

// link to generateMarkdown.js for generating markdown from user input
const generateMarkdown = require('./utils/generateMarkdown.js');

// create an array of questions for user input
const questions = [
    {   // GitHub username
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username.');
                return false;
            };
        }
    },
    {   // email address
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            };
        }
    },
    {   // project title
        type: 'input',
        name: 'title',
        message: 'Please enter your project title.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            };
        }
    },
    {   // project description
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            };
        }
    },
    {   // license
        type: 'list',
        name: 'licenseIndex',
        message: 'Please select the appropriate license.',
        choices: [
            // values below are used as indices for reference array in generateMarkdown.js
            {
                name: 'No License (License section will be omitted)',
                value: false
              },
            {
                name: 'Apache License 2.0',
                value: 0
              },
              {
                name: 'Boost Software License 1.0',
                value: 1
              },
              {
                name: 'BSD 3-Clause License',
                value: 2
              },
              {
                name: 'BSD 2-Clause License',
                value: 3
              },
              {
                name: 'Creative Commons CC0 1.0',
                value: 4
              },
              {
                name: 'Creative Commons Attribution 4.0 International',
                value: 5
              },
              {
                name: 'Creative Commons Attribution-ShareAlike 4.0 International',
                value: 6
              },
              {
                name: 'Creative Commons Attribution-NonCommercial 4.0 International',
                value: 7
              },
              {
                name: 'Creative Commons Attribution-NoDerivates 4.0 International',
                value: 8
              },
              {
                name: 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
                value: 9
              },
              {
                name: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
                value: 10
              },
              {
                name: 'Eclipse Public License 1.0',
                value: 11
              },
              {
                name: 'GNU GPL v3',
                value: 12
              },
              {
                name: 'GNU GPL v2',
                value: 13
              },
              {
                name: 'GNU AGPL v3',
                value: 14
              },
              {
                name: 'GNU LGPL v3',
                value: 15
              },
              {
                name: 'GNU FDL v1.3',
                value: 16
              },
              {
                name: 'The Hippocratic License 2.1',
                value: 17
              },
              {
                name: 'The Hippocratic License 3.0',
                value: 18
              },
              {
                name: 'IBM Public License Version 1.0',
                value: 19
              },
              {
                name: 'Open Source Initiative ISC License',
                value: 20
              },
              {
                name: 'The MIT License',
                value: 21
              },
              {
                name: 'Mozilla Public License 2.0',
                value: 22
              },
              {
                name: 'Open Data Commons Attribution License (BY)',
                value: 23
              },
              {
                name: 'Open Database License (ODbL)',
                value: 24
              },
              {
                name: 'Public Domain Dedication and License (PDDL)',
                value: 25
              },
              {
                name: 'Perl Artistic License 2.0',
                value: 26
              },
              {
                name: 'SIL Open Font License 1.1',
                value: 27
              },
              {
                name: 'The Unlicense',
                value: 28
              },
              {
                name: 'The Do What the F*ck You Want to Public License',
                value: 29
              },
              {
                name: 'The zlib/libpng License',
                value: 30
              }
            ]
    },
    {   // installation instructions
        type: 'input',
        name: 'installation',
        message: 'How should others install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions.');
                return false;
            };
        }
    },
    {   // usage information
        type: 'input',
        name: 'usage',
        message: 'How should others use your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please proivde usage instructions.');
                return false;
            };
        }
    },
    {   // contribution guidelines
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide contribution instructions.');
                return false;
            };
        }
    },
    {   // test instructions
        type: 'input',
        name: 'test',
        message: 'How can others test the project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide testing instructions.');
                return false;
            };
        }
    },
    {   // how to reach you with questions
        type: 'input',
        name: 'reach',
        message: 'How should others reach you with questions?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide instructions for contacting you.');
                return false;
            };
        }
    }
];

// write README file
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
