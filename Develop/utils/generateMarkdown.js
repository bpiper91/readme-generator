// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license;
};

// generate the license section of README
function renderLicenseSection(license) {
  if (license) {
  // if there is a license, add the section to the page
    return `

## License
    
${renderLicenseLink(license)}`
  } else {
    // if there is no license, return an empty string
    return "";
  };
};

// if there is a license, add it to the table of contents
function renderLicenseTOC(license) {
  if (license) {
    return `
- [License](#license)`;
  } else {
    return "";
  };
};

// generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenseTOC(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})

Email address: ${data.email}

${data.reach}
`;
}

// export generated markdown
module.exports = generateMarkdown;
