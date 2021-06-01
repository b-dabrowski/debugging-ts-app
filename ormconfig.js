module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "password",
    "database": "books",    
    "entities": ["build/db/entity/*.js"],
    "logging": true,
    "synchronize": true
}