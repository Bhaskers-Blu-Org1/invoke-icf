// This is the sample function deployed to the IBM Cloud Functions platform
// via the developerWorks sandbox
// (https://developer.ibm.com/sandbox/index.html).

function main(params) {
  var greeting = 'Hello, ' + params.name;
  return {greeting};
}

var defaultParameters = {'name': 'Doug'};

if (require.main === module)
  console.log(main(defaultParameters));
