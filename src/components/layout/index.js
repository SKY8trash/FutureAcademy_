import express from 'express'
import mysql from 'mysql2'

const PORT = 5000;
const app = express();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'futureacademy'
});


app.listen(PORT, () => console.log('server work ' + PORT))