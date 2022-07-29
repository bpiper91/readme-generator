// TODO: Include packages needed for this application
// load inquirer module (npm package)
const inquirer = require('inquirer');

// load file system module (core library module)
const fs = require('fs');

// link to generateMarkdown.js for generating markdown from user input
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {   // GitHub username
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
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
        message: 'Please enter your email address. (Required)',
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
        message: 'Please enter your project title. (Required)',
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
        message: 'Please enter a description of your project. (Required)',
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
        name: 'license',
        message: 'Please select the appropriate license.',
        choices: [
            {name: 'Academic Free License v3.0', value: 'afl-3.0'},
            {name: 'Apache license 2.0', value: 'apache-2.0'},
            {name: 'Artistic license 2.0', value: 'artistic-2.0'},
            {name: 'Boost Software License 1.0', value: 'bsl-1.0'},
            {name: 'BSD 2-clause "Simplified" license', value: 'bsd-2-clause'},
            {name: 'BSD 3-clause "New" or "Revised" license', value: 'bsd-3-clause'},
            {name: 'BSD 3-clause Clear license', value: 'bsd-3-clause-clear'},
            {name: 'Creative Commons license family', value: 'cc'},
            {name: 'Creative Commons Zero v1.0 Universal', value: 'cc0-1.0'},
            {name: 'Creative Commons Attribution 4.0', value: 'cc-by-4.0'},
            {name: 'Creative Commons Attribution Share Alike 4.0', value: 'cc-by-sa-4.0'},
            {name: 'Do What The F*ck You Want To Public License', value: 'wtfpl'},
            {name: 'Educational Community License v2.0', value: 'ecl-2.0'},
            {name: 'Eclipse Public License 1.0', value: 'epl-1.0'},
            {name: 'Eclipse Public License 2.0', value: 'epl-2.0'},
            {name: 'European Union Public License 1.1', value: 'eupl-1.1'},
            {name: 'GNU Affero General Public License v3.0', value: 'agpl-3.0'},
            {name: 'GNU General Public License family', value: 'gpl'},
            {name: 'GNU General Public License v2.0', value: 'gpl-2.0'},
            {name: 'GNU General Public License v3.0', value: 'gpl-3.0'},
            {name: 'GNU Lesser General Public License family', value: 'lgpl'},
            {name: 'GNU Lesser General Public License v2.1', value: 'lgpl-2.1'},
            {name: 'GNU Lesser General Public License v3.0', value: 'lgpl-3.0'},
            {name: 'ISC', value: 'isc'},
            {name: 'LaTeX Project Public License v1.3c', value: 'lppl-1.3c'},
            {name: 'Microsoft Public License', value: 'ms-pl'},
            {name: 'MIT', value: 'mit'},
            {name: 'Mozilla Public License 2.0', value: 'mpl-2.0'},
            {name: 'Open Software License 3.0', value: 'osl-3.0'},
            {name: 'PostgreSQL License', value: 'postgresql'},
            {name: 'SIL Open Font License 1.1', value: 'ofl-1.1'},
            {name: 'University of Illinois/NCSA Open Source License', value: 'ncsa'},
            {name: 'The Unlicense', value: 'unlicense'},
            {name: 'zLib License', value: 'zlib'}
            ]
    },
    {   // installation instructions
        type: 'input',
        name: 'installation',
        message: 'How should others install your project?'
    },
    {   // usage information
        type: 'input',
        name: 'usage',
        message: 'How should others use your project?'
    },
    {   // contribution guidelines
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to the project?'
    },
    {   // test instructions
        type: 'input',
        name: 'test',
        message: 'How can others test the project?'
    },
    {   // how to reach you with questions
        type: 'input',
        name: 'reach',
        message: 'How should others reach you with questions?'
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
