const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_username',     // Replace with your PostgreSQL username
    host: 'localhost',         // Host where PostgreSQL is running
    database: 'productdb',     // Database name
    password: 'your_password', // Replace with your PostgreSQL password
    port: 5432                 // Default PostgreSQL port
});

module.exports = pool;
