const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// Use the existing routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Add new route for Contact Us page
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
});

// Add POST route for the form submission and redirect to the success page
app.post('/success', (req, res) => {
    const { name, email } = req.body;
    console.log(`Received submission: Name - ${name}, Email - ${email}`);

    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
