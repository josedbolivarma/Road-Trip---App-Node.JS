const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático
app.use( express.static('public') );

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'José Bolivar',
        titulo: 'Página estática'
    });
})

app.get('/generic', (req, res) => {
        res.render('generic', {
            nombre: 'Jose Bolivar',
            titulo: 'Página estática'
        });
    })

    app.get('/elements', (req, res) => {
        res.render('elements', {
            nombre: 'Jose Bolivar',
            titulo: 'Página estática'
        });
    })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})