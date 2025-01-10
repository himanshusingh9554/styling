const path=require('path')
const rootDir = require('../util/path');

exports.contactuscontroller = (req, res) => {
    res.render('contactus', { pageTitle: 'Contact Us' });
};
