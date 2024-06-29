    const AWS = require('aws-sdk');
    require('dotenv').config();
    require('aws-sdk/lib/maintenance_mode_message').suppress = true;

    const SES_CONFIG = {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'ap-south-1',
    };

    const AWS_SES = new AWS.SES(SES_CONFIG);

    console.log('SES Config:', SES_CONFIG);

    const sendEmail = async (recipientEmail, name) => {
        const params = {
            // senders email address comes here
            Source: 'pulkitnov2@gmail.com',
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

        try {
            const res = await AWS_SES.sendEmail(params).promise();
            console.log('Email has been sent', res);
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    };

    // Example usage:
    sendEmail("pulkit.ujjainwal.ug20@nsut.ac.in", "Pulkit");


    // fn ln company name contact(country code) workemail(api - use - check domain name for not free) message/comment 


