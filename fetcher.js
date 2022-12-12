const fs = require('fs');
const request = require('request');
const URL = process.argv[2];
const localFilePath = process.argv[3];

request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  fs.writeFile(localFilePath, body, (error) => {
    if (error) {
      console.log('error:', error); //checks for error
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`); // after writing the file we log the length of the file and specify where we put the contents of the body!
    }
  });
});

/*
1.) need to take in to command line argument so lets use 2 variables
  a.) URL vairable which comes first
  b.) local file path variable which comes second
2.) We need to make a request at some point so lets copy our request from the previosu exercise
 a.) going to npm init and npm install request!
3.) After our response we need to a new file to save our information from our request in
 a.) createing an index.html file to be the local path as shown in the example test on compass
4.) Add in your URL variable to the old request function, add an if for error.
5.) Writing out our body with fs.writeFile, then console.log what the size of the body was and where we stored the information.
5a.) Add error statement incase we also get an error writing the file!
 */