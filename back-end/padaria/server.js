import express from 'express'

const app = express();

const paes = [];

app.post('paes', (req, res) => {
    
});

app.get('/paes', (req, res) => {
    res.send('Ok, deu bom');
})

app.listen(3000);

