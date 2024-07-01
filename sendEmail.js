const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
require('dotenv').config();
require('aws-sdk/lib/maintenance_mode_message').suppress = true;

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json());

const SES_CONFIG = {
    credentials: {
        accessKeyId: 'AKIAQUINFHMHTTMZJHS3',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'us-west-2',
};

const AWS_SES = new AWS.SES(SES_CONFIG);
// console.log(AWS_SES);



const sendEmail = async (firstName, lastName, countryCode, contactNumber, workEmail, message) => {
    const fullContactNumber = `${countryCode} ${contactNumber}`;
    const params = {
        Source: 'kawanpreet@exportgenius.in',
        Destination: {
            ToAddresses: ['marketing@indiatradedata.com' ], // Fixed recipient email
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'New Contact Us Form Submission',
            },
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <html>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                                <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0;">Contact Us Form Submission</h2>
                                <p style="color: #333;"><strong>First Name:</strong> ${firstName}</p>
                                <p style="color: #333;"><strong>Last Name:</strong> ${lastName}</p>
                                <p style="color: #333;"><strong>Contact Number:</strong> ${fullContactNumber}</p>
                                <p style="color: #333;"><strong>Work Email:</strong> ${workEmail}</p>
                                <p style="color: #333;"><strong>Message:</strong></p>
                                <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                            </div>
                        </body>
                        </html>
                    `,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: `
                        First Name: ${firstName}\n
                        Last Name: ${lastName}\n
                        Contact Number: ${fullContactNumber}\n
                        Work Email: ${workEmail}\n
                        Message:\n
                        ${message}
                    `,
                },
            },
        },
    };

    try {
        const res = await AWS_SES.sendEmail(params).promise();
        console.log('Email has been sent', res);
        return res;
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw error;
    }
};

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, countryCode, contactNumber, workEmail, message } = req.body;

    if (!firstName || !lastName || !countryCode || !contactNumber || !workEmail || !message) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    try {
        const response = await sendEmail(firstName, lastName, countryCode, contactNumber, workEmail, message);
        res.status(200).send({ message: 'Email has been sent successfully', response });
    } catch (error) {
        res.status(500).send({ message: 'Error sending email', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
