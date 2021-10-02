const database = require ('./_database')

async function createTable(){
    await database.connect()

    await database.query(`CREATE TABLE products(
        id serial PRIMARY KEY, 
        nome VARCHAR UNIQUE NOT NULL,
        preco MONEY UNIQUE NOT NULL,
        qtdEstoque NUMERIC
    )`)

    await database.end()

    console.log("Tabela criada");
}

createTable()