const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'futureacademy'
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.get('/teachers', (req, res) => {
  const sql = 'SELECT * FROM teachers';
  conn.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при получении преподователей' });
    }
    res.status(200).json(results);
  });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});