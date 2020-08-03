const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

//exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);


exports.handler = (event, context, callback) => {

    console.log('[info]', 'Event', JSON.stringify(event,null,2))
    awsServerlessExpress.proxy(server, event, context)
    
}
