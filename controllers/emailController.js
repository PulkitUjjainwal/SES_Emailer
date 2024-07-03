const { sendEmailMi, sendThankYouEmailMi , sendEmailEg , sendThankYouEmailEg } = require('../models/emailModel');

const sendEmailsMi = async (req, res) => {
    const { firstName, lastName, countryCode, contactNumber, workEmail, message } = req.body;

    if (!firstName || !lastName || !countryCode || !contactNumber || !workEmail || !message) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    try {
        const response = await sendEmailMi(firstName, lastName, countryCode, contactNumber, workEmail, message);
        await sendThankYouEmailMi(firstName, lastName, workEmail);
        res.status(200).send({ message: 'Emails have been sent successfully', response });
    } catch (error) {
        res.status(500).send({ message: 'Error sending email', error: error.message });
    }
};


const sendEmailsEg = async (req, res) => {
    const { firstName, lastName, countryCode, contactNumber, workEmail, message } = req.body;

    if (!firstName || !lastName || !countryCode || !contactNumber || !workEmail || !message) {
        return res.status(400).send({ message: 'All fields are required' });
    }

    try {
        const response = await sendEmailMi(firstName, lastName, countryCode, contactNumber, workEmail, message);
        await sendThankYouEmailMi(firstName, lastName, workEmail);
        res.status(200).send({ message: 'Emails have been sent successfully', response });
    } catch (error) {
        res.status(500).send({ message: 'Error sending email', error: error.message });
    }
};



module.exports = {
    sendEmailsMi,
    sendEmailsEg
};
