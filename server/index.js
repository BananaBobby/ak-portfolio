const path = require('path');
const express = require('express');
const data = require('./data');

const PORT = 3000;
const app = express();
const DIR_PUBLIC = path.resolve(__dirname, '../public');

app.set('view engine', 'pug');
app.set('views', './src/html');
app.use('/public', express.static(DIR_PUBLIC));

app.get('/', (req, res) => {
    res.render('index', data);
});

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`);
});
