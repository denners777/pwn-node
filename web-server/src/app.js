const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'Cotações',
        author: 'Denner'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'Sobre',
        author: 'Denner Fernandes'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        title: 'Ajuda',
        author: 'Denner'
    })
})

app.get('/cotacoes', (req, res) => {
    const cotacao = {
        symbol : 'PETR4.SA', 
        price_open: 10, 
        price : 12, 
        day_high : 13, 
        day_low : 9    
    }

    const cotacoes = new Array()
    cotacoes.push(cotacao)
    cotacoes.push(cotacao)

    res.send(cotacoes)
})

app.get('/help/*', (req, res) => {
    
    res.render('404', {
        title : '404',
        errorMessage : 'Não existe página depois de /help',
        author: 'Denner'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title : '404',
        errorMessage : 'Página não encontrada',
        author: 'Denner'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})