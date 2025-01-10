const db = require('../util/database');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        return db.query('INSERT INTO products (title) VALUES ($1)', [this.title]);
    }

    static fetchAll() {
        return db.query('SELECT * FROM products');
    }
};
