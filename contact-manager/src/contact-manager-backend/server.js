const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', contactRoutes); // Use the contact routes for everything

mongoose.connect('mongodb://localhost:27017/contactManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected...');
})
.catch((error) => {
    console.log('Error connecting to MongoDB:', error);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
