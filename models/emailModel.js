const AWS_SES = require('../config/awsConfig');

const sendEmailMi = async (firstName, lastName, countryCode, contactNumber, workEmail, message , url) => {
    const fullContactNumber = `${countryCode} ${contactNumber}`;
    const params = {
        Source: 'no-reply@marketinsidedata.com', // senders Email
        Destination: {
            ToAddresses: ['pulkit.ujjainwal.ug20@nsut.ac.in'], // Fixed recipient email
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
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    line-height: 1.6;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 10px;
                                }
                                .header {
                                    background-color: #4CAF50;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                }
                                .content {
                                    color: #333;
                                }
                                .message {
                                    background-color: #f9f9f9;
                                    padding: 15px;
                                    border-radius: 5px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">Contact Us Form Submission</h2>
                                <div class="content">
                                    <p><strong>First Name:</strong> ${firstName}</p>
                                    <p><strong>Last Name:</strong> ${lastName}</p>
                                    <p><strong>Contact Number:</strong> ${fullContactNumber}</p>
                                    <p><strong>Work Email:</strong> ${workEmail}</p>
                                    <p><strong>URL:</strong> <a href="${url}">${url}</a></p>
                                    <p><strong>Message:</strong></p>
                                    <div class="message">${message}</div>
                                </div>
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
                        URL: ${url}\n
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

const sendThankYouEmailMi = async (firstName, lastName, workEmail) => {
    const params = {
        Source: 'no-reply@marketinsidedata.com', // senders Email
        Destination: {
            ToAddresses: [workEmail], // Send to the user's email
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'Thank You for Contacting Us',
            },
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    line-height: 1.6;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 10px;
                                }
                                .header {
                                    background-color: #4CAF50;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                }
                                .content {
                                    color: #333;
                                }
                                .message {
                                    background-color: #f9f9f9;
                                    padding: 15px;
                                    border-radius: 5px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">Thank You for Contacting Us</h2>
                                <div class="content">
                                    <p>Dear ${firstName} ${lastName},</p>
                                    <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                                    <p>Best regards,</p>
                                    <p>Export Genius Team</p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: `
                        Dear ${firstName} ${lastName},\n
                        Thank you for reaching out to us. We have received your message and will get back to you shortly.\n
                        Best regards,\n
                        Export Genius Team
                    `,
                },
            },
        },
    };

    try {
        const res = await AWS_SES.sendEmail(params).promise();
        console.log('Thank You email has been sent', res);
        return res;
    } catch (error) {
        console.error('Error sending Thank You email:', error.message);
        throw error;
    }
};



const sendEmailEg = async (firstName, lastName, countryCode, contactNumber, workEmail, message , url) => {
    const fullContactNumber = `${countryCode} ${contactNumber}`;
    const params = {
        Source: 'no-reply@marketinsidedata.com', // senders Email
        Destination: {
            ToAddresses: [''], // Fixed recipient email
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
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    line-height: 1.6;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 10px;
                                }
                                .header {
                                    background-color: #4CAF50;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                }
                                .content {
                                    color: #333;
                                }
                                .message {
                                    background-color: #f9f9f9;
                                    padding: 15px;
                                    border-radius: 5px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">Contact Us Form Submission</h2>
                                <div class="content">
                                    <p><strong>First Name:</strong> ${firstName}</p>
                                    <p><strong>Last Name:</strong> ${lastName}</p>
                                    <p><strong>Contact Number:</strong> ${fullContactNumber}</p>
                                    <p><strong>Work Email:</strong> ${workEmail}</p>
                                    <p><strong>URL:</strong> <a href="${url}">${url}</a></p>
                                    <p><strong>Message:</strong></p>
                                    <div class="message">${message}</div>
                                </div>
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
                        URL: ${url}\n
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

const sendThankYouEmailEg = async (firstName, lastName, workEmail) => {
    const params = {
        Source: 'no-reply@marketinsidedata.com', // senders Email
        Destination: {
            ToAddresses: [workEmail], // Send to the user's email
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: 'Thank You for Contacting Us',
            },
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    line-height: 1.6;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    border: 1px solid #ddd;
                                    border-radius: 10px;
                                }
                                .header {
                                    background-color: #4CAF50;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    border-radius: 10px 10px 0 0;
                                }
                                .content {
                                    color: #333;
                                }
                                .message {
                                    background-color: #f9f9f9;
                                    padding: 15px;
                                    border-radius: 5px;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <h2 class="header">Thank You for Contacting Us</h2>
                                <div class="content">
                                    <p>Dear ${firstName} ${lastName},</p>
                                    <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                                    <p>Best regards,</p>
                                    <p>Export Genius Team</p>
                                </div>
                            </div>
                        </body>
                        </html>
                    `,
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: `
                        Dear ${firstName} ${lastName},\n
                        Thank you for reaching out to us. We have received your message and will get back to you shortly.\n
                        Best regards,\n
                        Export Genius Team
                    `,
                },
            },
        },
    };

    try {
        const res = await AWS_SES.sendEmail(params).promise();
        console.log('Thank You email has been sent', res);
        return res;
    } catch (error) {
        console.error('Error sending Thank You email:', error.message);
        throw error;
    }
};



module.exports = {
    sendEmailMi,
    sendThankYouEmailMi,
    sendEmailEg,
    sendThankYouEmailEg
};
