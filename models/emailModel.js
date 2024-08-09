const AWS_SES = require('../config/awsConfig');

const sendEmailMi = async (
  firstName,
  lastName,
  countryCode,
  contactNumber,
  workEmail,
  message,
  url,
  ip
) => {
  const fullContactNumber = `${countryCode} ${contactNumber}`;
  const params = {
    Source: "no-reply@marketinsidedata.com", // senders Email
    Destination: {
      ToAddresses: ["info@marketinsidedata.com", "webenquiry@marketinsidedata.com"], // Fixed recipient email
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: "New Contact Us Form Submission",
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      background-color: #F7F7F7;
                    }
                    img {
                      text-align: center;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ddd;
                      background-color: white;
                      margin-top: 50px;
                    }
                    .header {
                      background-color: #f78020;
                      color: white;
                      padding: 10px;
                      text-align: center;
                      font-weight: 300;
                      font-size: larger;
                      margin-bottom: 50px;
                    }
                    .content {
                      color: #333;
                    }
                    .child-content {
                      text-align: left;
                    }
                    .text {
                      border-bottom: 1px solid #dedede;
                      padding-bottom: 5px;
                    }
                    .message {
                      background-color: #f9f9f9;
                      padding: 15px;
                      border-radius: 5px;
                    }
                    .para-bottom {
                      margin-top: 50px;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <center>
                      <img width="125px" alt="market-logo" src="https://www.marketinsidedata.com/images/markit-logo.png" />
                    </center>
                    <h2 class="header">Contact Us Form Submission</h2>
                    <div class="content">
                      <div class="child-content">
                        <p class="text"><strong>First Name:</strong> ${firstName}</p>
                        <p class="text"><strong>Last Name:</strong> ${lastName}</p>
                        <p class="text"><strong>Contact Number:</strong> ${fullContactNumber}</p>
                        <p class="text"><strong>Work Email:</strong> ${workEmail}</p>
                        <p class="text"><strong>Message:</strong> ${message}</p>
                        <p class="text"><strong>URL:</strong> ${url}</p>
                        <p class="text"><strong>IP Address:</strong> ${ip}</p>
                      </div>
                      <p class="para-bottom">
                        If you have any query, contact our support team at
                        <a href="mailto:info@marketinsidedata.com">info@marketinsidedata.com</a>
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
              First Name: ${firstName}\n
              Last Name: ${lastName}\n
              Contact Number: ${fullContactNumber}\n
              Work Email: ${workEmail}\n
              URL: ${url}\n
              IP Address: ${ip}\n
              Message:\n
              ${message}
            `,
        },
      },
    },
  };

  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email has been sent", res);
    return res;
  } catch (error) {
    console.error("Error sending email:", error.message);
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
                                    background-color: #FB923C;
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
                                    <p>Market Inside Team</p>
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


// quickenquiry.eg@gmail.com


const sendEmailEg = async (
  firstName,
  lastName,
  countryCode,
  contactNumber,
  workEmail,
  message,
  url,
  ip
) => {
  const fullContactNumber = `${countryCode} ${contactNumber}`;
  const params = {
    Source: "enquiryform.eg@exportgenius.in", // sender's Email
    Destination: {
      ToAddresses: ["quickenquiry.eg@gmail.com"], // Fixed recipient email
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: "New Contact Us Form Submission",
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      background-color: #F7F7F7;
                    }
                    img {
                      text-align: center;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ddd;
                      background-color: white;
                      margin-top: 50px;
                    }
                    .header {
                      background-color: #5C9BD3;
                      color: white;
                      padding: 10px;
                      text-align: center;
                      font-weight: 300;
                      font-size: larger;
                      margin-bottom: 50px;
                    }
                    .content {
                      color: #333;
                    }
                    .child-content {
                      text-align: left;
                    }
                    .text {
                      border-bottom: 1px solid #dedede;
                      padding-bottom: 5px;
                    }
                    .message {
                      background-color: #f9f9f9;
                      padding: 15px;
                      border-radius: 5px;
                    }
                    .para-bottom{
                      margin-top: 50px;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <center>
                      <img width="125px"
                        alt="exportgenius-logo"
                        src="https://www.exportgenius.in/images/logo.png"
                      />
                    </center>
  
                    <h2 class="header">Contact Us Form Submission</h2>
                    <div class="content">
                      <div class="child-content">
                        <p class="text"><strong>First Name:</strong> ${firstName}</p>
                        <p class="text"><strong>Last Name:</strong> ${lastName}</p>
                        <p class="text"><strong>Contact Number:</strong> ${fullContactNumber}</p>
                        <p class="text"><strong>Work Email:</strong> ${workEmail}</p>
                        <p class="text"><strong>Message:</strong> ${message}</p>
                        <p class="text"><strong>URL:</strong> ${url}</p>
                        <p class="text"><strong>IP Address:</strong> ${ip}</p>
                      </div>
  
                      <p class="para-bottom">
                        If you have any query, contact our support team at
                        <a href="mailto:info@exportgenius.com">info@exportgenius.com</a>
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
        },
        Text: {
          Charset: "UTF-8",
          Data: `
              First Name: ${firstName}\n
              Last Name: ${lastName}\n
              Contact Number: ${fullContactNumber}\n
              Work Email: ${workEmail}\n
              URL: ${url}\n
              IP Address: ${ip}\n
              Message:\n
              ${message}
            `,
        },
      },
    },
  };

  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email has been sent", res);
    return res;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

const sendThankYouEmailEg = async (firstName, lastName, workEmail) => {
  const params = {
    Source: "no-reply@marketinsidedata.com", // sender's Email
    Destination: {
      ToAddresses: [workEmail], // Send to the user's email
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: "Thank You for Contacting Us",
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      line-height: 1.6;
                      background-color: #f7f7f7;
                    }
                    center {
                      margin-bottom: 20px;
                    }
                    .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px 0;
                      border: 1px solid #ddd;
                      background-color: white;
                    }
                    .content {
                      color: #333;
                      background-color: #f9fff6;
                      padding-inline: 40px;
                      padding-top: 20px;
                      padding-right: 20px;
                      padding-bottom: 20px;
                      padding-left: 20px;
                      border-bottom: 1px solid #dedede;
                      border-top: 1px solid #dedede;
                    }
                    .para-bottom {
                      padding: 15px 15px;
                    }
                    .first-para {
                      padding-top: 20px;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <center>
                      <img
                        width="125px"
                        alt="exportgenius-logo"
                        src="https://www.exportgenius.in/images/logo.png"
                      />
                    </center>
                    <div class="content">
                      <p class="first-para">Dear ${firstName} ${lastName},</p>
                      <p>
                        Thank you for reaching out to us. We have received your message and
                        will get back to you shortly.
                      </p>
                      <p>Best regards,</p>
                    </div>
                    <p class="para-bottom">
                      If you have any query, contact our support team at
                      <a href="mailto:info@exportgenius.com">info@exportgenius.com</a>
                    </p>
                  </div>
                </body>
              </html>
            `,
        },
        Text: {
          Charset: "UTF-8",
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
    console.log("Thank You email has been sent", res);
    return res;
  } catch (error) {
    console.error("Error sending Thank You email:", error.message);
    throw error;
  }
};

module.exports = {
  sendEmailMi,
  sendThankYouEmailMi,
  sendEmailEg,
  sendThankYouEmailEg
};