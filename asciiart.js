// asciiArt.js
const figlet = require('figlet');

const generateAsciiArt = (inputString) => {
  figlet(inputString, (err, data) => {
    if (err) {
      console.log('Error:', err);
      return;
    }
    console.log(data);
  });
};

// Read the command line argument
const inputString = process.argv[2];

// Check if a string is provided
if (inputString) {
  generateAsciiArt(inputString);
} else {
  console.log('Please provide a string as a command line argument.');
}
