const database = require ('./_database')

async function insertData(){
    await database.connect()

    const queryProducts = "INSERT INTO products (nome) VALUES $1"

    await database.queryProducts(queryProducts, ['produto um'])
    await database.queryProducts(queryProducts, ['40.00'])
    await database.queryProducts(queryProducts, ['8'])


    await database.end()
}

insertData()