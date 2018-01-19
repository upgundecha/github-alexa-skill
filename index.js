var request = require('request');

exports.handler = (event, context, callback) => {
  try {
    switch (event.request.type) {
      case "LaunchRequest":
        buildResponse("Welcome to Github")
        break;
      case "IntentRequest":
        switch(event.request.intent.name){
          case "FollowerCount":
            getFollowerCount(function(count){
              context.succeed(buildResponse(`You have ${count} followers`))
            })
            break;
          default:
          context.succeed(buildResponse("Sorry I couldn't understand"))
        }
        break;
      case "SessionEndedRequest":
        break;
      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
    }
  } catch(error) { context.fail(`Exception: ${error}`) }
}

getFollowerCount = (callback) =>{
  var options = {
    url: `https://api.github.com/users/${process.env.USERNAME}`,
    headers: {
      'User-Agent': 'github-alexa-skill'
    }
  };
  request(options, function(error, response, body){
    var data = JSON.parse(body)
    callback(data.followers)
  })
}

buildResponse = (outputText) => {
  return {
    version: "1.0",
    sessionAttributes: {},
    response: {
      outputSpeech: {
        type: "PlainText",
        text: outputText
      }
    },
      shouldEndSession: true
  }
}