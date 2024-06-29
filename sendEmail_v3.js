const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
require('dotenv').config();

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'ap-south-1',
};


const sesClient = new SESClient(SES_CONFIG);

const sendEmail = async (recipientEmail , name) => {

    const params = {
        // senders email address comes here
        Source: "pulkitnov2@gmail.com",
        Destination: {
            ToAddresses: [
                recipientEmail
            ],
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "<html><body><h1>HTML_FORMAT_BODY</h1></body></html>",
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "TEXT_FORMAT_BODY",
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: `Hello ${name}`,
            },
        },
    };

    try{
        const sendEmailCommand = new SendEmailCommand(params);
        const res = await sesClient.send(sendEmailCommand)
        console.log('Email has been Sent' , res);
    } 
    catch(error){
        console.log(error);
    }
}



// Example usage:
sendEmail('pulkit.ujjainwal.ug20@nsut.ac.in', "Pulkit");




