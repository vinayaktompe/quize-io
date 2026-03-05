const contactModel = require('../models/contact.model');

async function contactUsController(req, res) {
    const { name, email, subject, message } = req.body

    try {
        const Contact = await contactModel.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            data: Contact
        });

    } catch (error) {

        console.log(error);
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

module.exports = {
    contactUsController
}