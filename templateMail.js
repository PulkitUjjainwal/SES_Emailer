const { SESClient, SendTemplatedEmailCommand } = require("@aws-sdk/client-ses");
const send = require("send");
require('dotenv').config();

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'ap-south-1',
};


const sesClient = new SESClient(SES_CONFIG);

const sendMail = async (templateName , recipientEmail) => {
    const sendtemplateEmail = new SendTemplatedEmailCommand({
        Source : "pulkitnov2@gmail.com" ,
        Destination: {
            ToAddresses: [
                recipientEmail
            ],

        },

        Template : templateName, 
        TemplateData :  JSON.stringify({ name : 'Pulkit'}),

    })


    try {
        const res = await sesClient.send(sendtemplateEmail);
        console.log("Email has been sent successfully !" , res);
    } catch (error) {
        console.log(error);
    }
}

// template with reciepient email
sendMail("ContactUsTemplate" , "pulkit.ujjainwal.ug20@nsut.ac.in");