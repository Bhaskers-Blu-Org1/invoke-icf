var options = {
  // This is the URL of a sample deployed through the developerWorks sandbox.
  // See https://developer.ibm.com/sandbox/index.html to deploy your own code.
  url: 'https://openwhisk.ng.bluemix.net/api/v1/web/devworkssandbox_pub/0100001H7N/1046891-1001.json',

  // Use any name you like...
  body: {'name': 'Doug'},
  headers: {'Content-Type': 'application/json'},
  json: true
};

function owCallback(err, response, body) {
  if (!err && response.statusCode == 200) {
    console.log(response.body.greeting);
  } else {
    console.log('The call failed! ' + err.message);
  }
}

var request = require('request');
request.post(options, owCallback);
