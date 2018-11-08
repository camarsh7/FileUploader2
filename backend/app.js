const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', (req, res) => {
    return res.send({ test: 'testing' });
});

app.post('/upload', (req, res) => {
    res.send('I received your POST. This is what you sent me: ${req.body.post}'
    );
});

app.listen(process.env.PORT || 8080);