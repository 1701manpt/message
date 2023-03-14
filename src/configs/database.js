const defineTable = require('./tables')

module.exports = {
    "development": {
        "username": "moviego",
        "password": "A6XpVGrfFD4WUzoXpfU5puM77zIy94F0",
        "host": "dpg-cg84bendvk4ljrg7dcig-a.singapore-postgres.render.com",
        "database": "moviego",
        "dialect": "postgres",
        "port": 5432,
        "protocol": "postgres",
        "dialectOptions": {
            "useUTC": false,
            "ssl": {
                "require": true,
                "rejectUnauthorized": false
            }
        },
        "timezone": "+07:00",
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