const path = require('path');
const Product = require('../models/product');

const express = require('express');

const productsController = require('../controllers/products');
const contactusController = require('../controllers/contactus');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
    const product = new Product(req.body.title);
    product
        .save()
        .then(() => {
            res.redirect('/products');
        })
        .catch((err) => {
            console.log(err);
        });
});

// /products => GET
router.get('/products', (req, res) => {
    Product.fetchAll()
        .then((result) => {
            res.render('products', {
                prods: result.rows,
                pageTitle: 'Product List',
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
router.get('/contactus', contactusController.contactuscontroller);

module.exports = router;