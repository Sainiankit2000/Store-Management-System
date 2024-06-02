// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

// Create a new SQLite database connection
const db = new sqlite3.Database('./database.db');

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('public'));

// Define routes for interacting with the database

// Example: Get a list of products from the database
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
