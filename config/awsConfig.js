const AWS = require('aws-sdk');
require('dotenv').config();
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const SES_CONFIG = {
    credentials: {
        accessKeyId: "AKIAQUINFHMHTTMZJHS3",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'us-west-2',
};

const AWS_SES = new AWS.SES(SES_CONFIG);

console.log(SES_CONFIG)

module.exports = AWS_SES;
