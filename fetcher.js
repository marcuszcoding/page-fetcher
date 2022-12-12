const URL = process.argv[2]
const filePath = process.argv[3]
const request = require('request');


request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

/* 
1.) need to take in to command line argument so lets use 2 variables
  a.) URL vairable which comes first 
  b.) local file path variable which comes second
2.) We need to make a request at some point so lets copy our request from the previosu exercise 


*/