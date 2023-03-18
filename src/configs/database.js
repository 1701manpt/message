const defineTable = require('./tables')

module.exports = {
    "development": {
        "username": "epiz_33805531",
        "password": "rbFQkiRnYa92",
        "host": "sql307.byetcluster.com",
        "database": "epiz_33805531_testmoviego",
        "dialect": "mysql",
        port: 3306,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: defineTable
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}