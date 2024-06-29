const { SESClient, CreateTemplateCommand } = require("@aws-sdk/client-ses");
require('dotenv').config();

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'ap-south-1',
};

const sesClient = new SESClient(SES_CONFIG);
console.log(SES_CONFIG)

const run = async (templateName) => {
    const createTemplateCommand = new CreateTemplateCommand({
        Template: {
            TemplateName: templateName,
            HtmlPart: `
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                        <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0;">Contact Us Form Submission</h2>
                        <p style="color: #333;"><strong>First Name:</strong> {{firstName}}</p>
                        <p style="color: #333;"><strong>Last Name:</strong> {{lastName}}</p>
                        <p style="color: #333;"><strong>Contact Number:</strong> {{contactNumber}}</p>
                        <p style="color: #333;"><strong>Work Email:</strong> {{workEmail}}</p>
                        <p style="color: #333;"><strong>Message:</strong></p>
                        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">{{message}}</p>
                    </div>
                </body>
                </html>`,
            TextPart: `
                First Name: {{firstName}}\n
                Last Name: {{lastName}}\n
                Contact Number: {{contactNumber}}\n
                Work Email: {{workEmail}}\n
                Message:\n
                {{message}}`,
            SubjectPart: "New Contact Us Form Submission",
        },
    });

    try {
        const res = await sesClient.send(createTemplateCommand);
        console.log("SES Template has been created", res);
    } catch (error) {
        console.log("Error while creating Template", error.message);
    }
}

run('ContactUsTemplate');
