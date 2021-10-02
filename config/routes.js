const express = require('express')
const routes = express.Router()

let db = [
    //id, nome, preço e quantidade em estoque (valores padrão)
    {'1': {Nome: 'produto 1', Preço: '40,00', Estoque: '8'} },
    {'2': {Nome: 'produto 2', Preço: '30,00', Estoque: '5'} }
]

//buscar os dados
routes.get('/', (req, res) => { 
    return res.json(db)
})
//inserir novos dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req,res) => {
    const id = req.params.id

    let newDb = db.filter( item =>  {
        if(!item[id]) {
            return item
        }
    })

    db = newDb

    return res.send(newDb)
})

module.exports = routes