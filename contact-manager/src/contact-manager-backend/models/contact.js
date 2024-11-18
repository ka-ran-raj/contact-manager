const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    dob: Date,
    department: String,
    designation: String,
});

module.exports = mongoose.model('Contact', contactSchema);
