const database = require ('./_database')

async function listData(){
    await database.connect();
    var result

    result = await database.query("SELECT * FROM products")
    console.log("products")
    console.log(result.rows)
}

listData()