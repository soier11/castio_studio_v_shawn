import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import router from './router';
import path from 'path';
import fs from 'fs';

const PORT = 3011;
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Being connected successfully.')

// page router
let indexPage = "";
console.log(__dirname)
fs.readFile(path.resolve(__dirname, '../studio_v2/build/index.html'), 'utf8', function(err, data){
  indexPage = data;
});

app.use('/', express.static(__dirname + '/../studio_v2/build'));
app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.redirect('/not-found')
});
app.get('/*', (req, res) => {
  res.end(indexPage)
});

const server = app.listen(PORT, () =>
    console.log(`-- HTTP Server running on ${PORT}`)
);