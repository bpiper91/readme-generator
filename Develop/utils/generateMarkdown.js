// reference array to get data for user-selected license
const licenseData = [
  // any change to this array needs to be reflected in the one used by index.js
  {
    license: 'Apache License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0',
  },
  {
    license: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt',
  },
  {
    license: 'BSD 3-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
  },
  {
    license: 'BSD 2-Clause License',
    badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    link: 'https://opensource.org/licenses/BSD-2-Clause',
  },
  {
    license: 'Creative Commons CC0 1.0',
    badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    license: 'Creative Commons Attribution 4.0 International',
    badge: '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)',
    link: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    license: 'Creative Commons Attribution-ShareAlike 4.0 International',
    badge: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)',
    link: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    license: 'Creative Commons Attribution-NonCommercial 4.0 International',
    badge: '[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)',
    link: 'https://creativecommons.org/licenses/by-nc/4.0/',
  },
  {
    license: 'Creative Commons Attribution-NoDerivates 4.0 International',
    badge: '[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)',
    link: 'https://creativecommons.org/licenses/by-nd/4.0/',
  },
  {
    license: 'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
    badge: '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)',
    link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  },
  {
    license: 'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
    badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)',
    link: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
  },
  {
    license: 'Eclipse Public License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: 'https://opensource.org/licenses/EPL-1.0',
  },
  {
    license: 'GNU GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
  },
  {
    license: 'GNU GPL v2',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  },
  {
    license: 'GNU AGPL v3',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    link: 'https://www.gnu.org/licenses/agpl-3.0',
  },
  {
    license: 'GNU LGPL v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    link: 'https://www.gnu.org/licenses/lgpl-3.0',
  },
  {
    license: 'GNU FDL v1.3',
    badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)',
    link: 'https://www.gnu.org/licenses/fdl-1.3',
  },
  {
    license: 'The Hippocratic License 2.1',
    badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
    link: 'https://firstdonoharm.dev',
  },
  {
    license: 'The Hippocratic License 3.0',
    badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
    link: 'https://firstdonoharm.dev',
  },
  {
    license: 'IBM Public License Version 1.0',
    badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    link: 'https://opensource.org/licenses/IPL-1.0',
  },
  {
    license: 'Open Source Initiative ISC License',
    badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    link: 'https://opensource.org/licenses/ISC',
  },
  {
    license: 'The MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    license: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    link: 'https://opensource.org/licenses/MPL-2.0',
  },
  {
    license: 'Open Data Commons Attribution License (BY)',
    badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
    link: 'https://opendatacommons.org/licenses/by/',
  },
  {
    license: 'Open Database License (ODbL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
    link: 'https://opendatacommons.org/licenses/odbl/',
  },
  {
    license: 'Public Domain Dedication and License (PDDL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)',
    link: 'https://opendatacommons.org/licenses/pddl/',
  },
  {
    license: 'Perl Artistic License 2.0',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    link: 'https://opensource.org/licenses/Artistic-2.0',
  },
  {
    license: 'SIL Open Font License 1.1',
    badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    link: 'https://opensource.org/licenses/OFL-1.1',
  },
  {
    license: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    link: 'http://unlicense.org/',
  },
  {
    license: 'The Do What the F*ck You Want to Public License',
    badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    link: 'http://www.wtfpl.net/about/',
  },
  {
    license: 'The zlib/libpng License',
    badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
    link: 'https://opensource.org/licenses/Zlib',
  }
]

// return a license badge based on the user-selected license
function renderLicenseBadge(num) {
  if (num) {
    return `
${licenseData[num].badge}
`;
  } else {
    return '';
  };
};

// generate the license section of README
function renderLicenseSection(num) {
  if (num) {
  // if there is a license, add the section to the page
    return `

## License
    
This project is licensed under [${licenseData[num].license}](${licenseData[num].link}).`
  } else {
    // if there is no license, return an empty string
    return "";
  };
};

// if there is a license, add a link to the table of contents
function renderLicenseTOC(num) {
  if (num) {
    return `
- [License](#license)`;
  } else {
    return "";
  };
};

// generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  // deconstruct data
  const {
    github,
    email,
    title,
    description,
    licenseIndex,
    installation,
    usage,
    contribution,
    test,
    reach
  } = data;

  return `# ${title}
${renderLicenseBadge(licenseIndex)}
## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenseTOC(licenseIndex)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}${renderLicenseSection(licenseIndex)}

## Contributing

${contribution}

## Tests

${test}

## Questions

GitHub: [${github}](https://github.com/${github})

Email: ${email}

${reach}
`;
}

// export generated markdown
module.exports = generateMarkdown;
