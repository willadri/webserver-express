var express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//registramos el directorio de los parciales
hbs.registerPartials(__dirname + '/views/partials');
//Express Hbs
app.set('view engine', 'hbs');

//ruta inicial
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'william',
    });
});
//ruta /about
app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => console.log(`Escuchando el puerto ${port}`));