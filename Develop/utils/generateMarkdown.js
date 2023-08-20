// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${answers.tableOfContents}

  ## Installation Instructions
  ${answers.installation}

  ## Usage Information
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contribution Guidelines
  ${answers.contribution}

  ## Testing
  ${answers.testing}

  ## Questions
  ${answers.questions}


`;
}

module.exports = generateMarkdown;
