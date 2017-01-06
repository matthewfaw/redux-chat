import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('/*', function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, DELETE");
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/list', (req, res) => {
    console.log(req.body)
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
