import express from 'express';
import path from 'path';

const app = express();
const PORT = 8080;

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
