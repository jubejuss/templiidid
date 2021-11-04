const express = require('express');
const path = require('path');
const app = express();

// sellega registreerin sobiva templiitimise mootori
// app.set('view engine', 'pug');
// app.set('view engine', 'ejs');

// Handlebaril on natsa rohkem seadistamist
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.set('views', path.join(__dirname, 'views'));

/* app.get('/', (request, response) => {
  return response.send('OK');
}); */

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});

// pug-i route
app.get('/', (request, response) => {
  response.render('index', {
    subject: 'template engine',
    name: 'our template',
    link: 'https://google.com',
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    subject: 'About leht',
    name: 'Sitt',
    link: 'https://jubejuss.ee',
  });
});
