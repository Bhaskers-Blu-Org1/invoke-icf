// This is the source of the sample function deployed to the IBM Cloud
// Functions platform via the developerWorks sandbox
// (https://developer.ibm.com/sandbox/index.html).

// JSON data comes in, JSON goes out
function main(params) {
  var greeting = 'Hello, ' + params.name;
  return {greeting};
}

// Choose a really good name as the default
var defaultParameters = {'name': 'Doug'};

// require.main === module means this file is being run directly instead of
// via require(). If this code is run directly, main() is invoked with the
// default parameters.
if (require.main === module)
  console.log(main(defaultParameters));
