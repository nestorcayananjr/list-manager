const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'gz9he6vaxiy5',
    database: 'demodb'
});

client.connect();

client.on("connect", () => {
    console.log("Connected to Database");
});

client.on("end", () => {
    console.log("Connection ended");
});

module.exports = client;