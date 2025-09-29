const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dikshit@2002',
    database: 'delta_app'
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Connection error:', err);
        return;
    }
    console.log('✅ Connected to MySQL!');

    const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        username VARCHAR(50),
        email VARCHAR(100),
        password VARCHAR(100)
    )`;

    connection.query(createTableSQL, (err) => {
        if (err) {
            console.error('❌ Error creating table:', err);
            connection.end();
            return;
        }

        // Insert 5 random users
        for (let i = 0; i < 5; i++) {
            const user = {
                id: faker.string.uuid(),
                username: faker.person.firstName() + '_' + faker.person.lastName(), // ✅ new username
                email: faker.internet.email(),
                password: faker.internet.password()
            };

            const insertSQL = "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
            connection.query(insertSQL, [user.id, user.username, user.email, user.password], (err) => {
                if (err) {
                    console.error('❌ Error inserting user:', err);
                } else {
                    console.log(`✅ User inserted: ${user.username}`);
                }
            });
        }

        // Fetch all users after inserts
        setTimeout(() => {
            connection.query("SELECT * FROM users", (err, results) => {
                if (err) {
                    console.error('❌ Error fetching users:', err);
                } else {
                    console.log('📋 All users in DB:');
                    console.table(results);
                }
                connection.end();
            });
        }, 500);
    });
});
