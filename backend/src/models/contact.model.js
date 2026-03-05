const mongoose =require("mongoose")

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        trim: true
    },
    subject: {
        type: String,
        required: [true, "subject is required"],
    },
    message: {
        type: String,
        required: [true, "message is required"],
    }
})

const contactModel = mongoose.model("Contact", contactSchema)

module.exports = contactModel