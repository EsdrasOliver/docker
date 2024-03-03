const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Ola Docker, isso e uma atualizacao')
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})