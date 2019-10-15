const express = require('express')

const app = express()

// minhaapp.com.br
// minhaapp.com.br/help
// minhaapp.com.br/about

app.get('', (req, res) =>{
    res.send('Hello minha app')
})

app.get('/help', (req, res) => {
    res.send('help page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/cotacoes', (req, res) => {
    res.send('cotacoes page')
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})