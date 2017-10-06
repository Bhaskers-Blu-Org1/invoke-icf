const options = {
  // This is the URL of a sample deployed through the developerWorks sandbox.
  // See https://developer.ibm.com/sandbox/index.html to deploy your own code.
  url: 'https://openwhisk.ng.bluemix.net/api/v1/web/devworkssandbox_pub/0100001H7N/1046891-1001.json',

  // We're using JSON, of course. You may need to include Authorization or
  // other HTTP headers depending on the service. For the service we're using
  // here, this is all you need.
  headers: {'Content-Type': 'application/json'},
  json: true,

  // Use any name you like...
  body: {'name': 'Doug'}
};

// If the call worked, we print the JSON response, otherwise we print
// an error message. Simple as that.
function icfCallback(err, response, body) {
  if (!err && response.statusCode == 200) {
    console.log(response.body.greeting);
  } else {
    console.log('The call failed! ' + err.message);
  }
}

// We're doing a POST with the options and callback function we defined
const request = require('request');
request.post(options, icfCallback);
