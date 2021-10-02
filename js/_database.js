const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgress',
    password: 'postgres',
    port: 3003
})

module.exports = client