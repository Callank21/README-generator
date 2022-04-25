// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      
      case 'GNU Lesser Genreal Public License v3.0':
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

      case 'Mozilla Public LIcense 2.0':
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

      case 'GNU General Public License v3.0':
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

      case 'Apache-2.0':
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

      case 'The Unlicense':
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return "(https://opensource.org/licenses/MIT)";
      
      case 'GNU Lesser Genreal Public License v3.0':
        return "(https://www.gnu.org/licenses/lgpl-3.0)";

      case 'Mozilla Public LIcense 2.0':
        return "(https://opensource.org/licenses/MPL-2.0)";

      case 'GNU General Public License v3.0':
        return "(https://www.gnu.org/licenses/gpl-3.0)";

      case 'Apache-2.0':
        return "(https://opensource.org/licenses/Apache-2.0)";

      case 'The Unlicense':
        return "(http://unlicense.org/)";
    };
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
      
      case 'GNU Lesser Genreal Public License v3.0':
        return "Copyright (C) 1991, 1999 Free Software Foundation, Inc. 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301 USA Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.";

      case 'Mozilla Public License 2.0':
        return "Mozilla is the custodian of the Mozilla Public License (MPL), an open source/free software license.";

      case 'GNU General Public License v3.0':
        return "Copyright © 2007 Free Software Foundation, Inc. Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.";

      case 'Apache-2.0':
        return "The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development.";

      case 'The Unlicense':
        return "The Unlicense is a template for disclaiming copyright monopoly interest in software you've written; in other words, it is a template for dedicating your software to the public domain. It combines a copyright waiver patterned after the very successful public domain SQLite project with the no-warranty statement from the widely-used MIT/X11 license.";
    };
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Credits

  [${data.username}](${data.link})

  ## License

  [${data.license}](${renderLicenseLink(data.license)})

  ${renderLicenseSection(data.license)}

  ## How to Contribute

  ${data.cont}

  ## Tests

  ${data.testing}

`;
}

module.exports = generateMarkdown;
