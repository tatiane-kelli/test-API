const database = require ('./_database')

async function dropTable() {
    await database.connect()
    await database.query('DROP TABLE products CASCADE')
    await database.end()

    console.log("Tabela removida")
}

dropTable()