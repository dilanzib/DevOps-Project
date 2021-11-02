var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Creating the publish parameters
var params = {
  Message: 'Hey, jusy checking if SNS publish message works', 
  TopicArn: 'arn:aws:sns:us-east-1:516155992695:MyBotTopic'
};

// Creating the promise and the SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });



