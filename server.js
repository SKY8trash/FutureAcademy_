const http = require("http");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "FutureAcademy"
});

// Регистрация и вход
const server = http.createServer((req, res) => {
  cors()(req, res, () => {
    if (req.method === "POST") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const { name, phone, email, password } = JSON.parse(body);

        if (req.url === "/register") {
          if (!name || !phone || !email || !password) {
            res.statusCode = 400;
            res.end(
              JSON.stringify({
                success: false,
                error: "Все поля должны быть заполнены",
              })
            );
            return;
          }

          bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            const query = "INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)";
            conn.query(query, [phone, password, hash], (err, result) => {
              if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                  res.statusCode = 400;
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: "Пользователь с таким номером телефона уже существует",
                    })
                  );
                } else {
                  res.statusCode = 500;
                  res.end(
                    JSON.stringify({
                      success: false,
                      error: "Произошла ошибка при регистрации",
                    })
                  );
                }
              } else {
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
              }
            });
          });
        } else if (req.url === "/phone") {
          if (!phone || !password) {
            res.statusCode = 400;
            res.end(
              JSON.stringify({
                success: false,
                error: "Все поля должны быть заполнены",
              })
            );
            return;
          }

          const query = "SELECT * FROM users WHERE phone = ?";
          conn.query(query, [phone], (err, result) => {
            if (err) {
              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  success: false,
                  error: "Произошла ошибка при авторизации",
                })
              );
            } else {
              if (result.length > 0) {
                const user = result[0];
                bcrypt.compare(password, user.password, (err, isMatch) => {
                  if (err) throw err;

                  if (isMatch) {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ success: true, name: user.name }));
                  } else {
                    res.statusCode = 401;
                    res.end(
                      JSON.stringify({
                        success: false,
                        error: "Неверный номер телефона или пароль",
                      })
                    );
                  }
                });
              } else {
                res.statusCode = 401;
                res.end(
                  JSON.stringify({
                    success: false,
                    error: "Неверный номер телефона или пароль",
                  })
                );
              }
            }
          });
        } else {
          res.statusCode = 404;
          res.end("Not found");
        }
      });
    } else {
      res.statusCode = 404;
      res.end("Not found");
    }
  });
});


// Скрипт для регистрации писать 
{/* <script>
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/register", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        alert("Регистрация прошла успешно!");
      } else {
        const response = JSON.parse(xhr.responseText);
        alert("Ошибка регистрации: " + response.error);
      }
    }
  };
  xhr.send(JSON.stringify({ name, phone, email, password }));
});
</script> */}

// Скрипт для авторизации
{/* <script>
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/login", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        alert(`Добро пожаловать, ${response.name}!`);
      } else {
        const response = JSON.parse(xhr.responseText);
        alert("Ошибка авторизации: " + response.error);
      }
    }
  };
  xhr.send(JSON.stringify({ phone, password }));
});
</script> */}


// Вывод пользователя из БД
conn.connect();
var queryString = 'SELECT * FROM users';
var user = "";
conn.query(queryString, function(err, rows, fields) {
  if (err) throw err;

  for (var i in rows) {
    user += '<tr><td>'+rows[i].id+'</td><td>'+rows[i].name+'</td><td>'+rows[i].phone+'</td><td>'+rows[i].email+'</td><td>'+rows[i].password+'</td></tr>';

  }
});
var http = require('http');
http.createServer(function(req, res, rows) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(
    +'<!DOCTYPE html>'
    +'<html lang="en">'
    +'<head>'
    +'<meta charset="UTF-8">'
    +'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    +'</head>'
    +'<body>'
    +'<table align="center" border="1px">'
    +'<h1 align="center">Пользователи</h1>');
    var queryString = 'SELECT * FROM users';
    var user = "";
    conn.queri(queryString, function(err, rows, fields) {
      if (err) throw err;

      for (var i in rows) {
        user = '<tr><td>'+rows[i].id+'</td><td>'+rows[i].name+'</td><td>'+rows[i].phone+'</td><td>'+rows[i].email+'</td><td>'+rows[i].password+'</td></tr>';
        res.write(user);

      }
      res.write(+'</table>'
      +'</body>'
      +'</html>');
      res.end();
    });
});


// Вывод курсов из бд
conn.connect();
var queryString = 'SELECT * FROM application';
var application = "";
conn.query(queryString, function(err, rows, fields) {
  if (err) throw err;

  for (var i in rows) {
    application += '<tr><td>'+rows[i].id+'</td><td>'+rows[i].name_programm+'</td><td>'+rows[i].avatar+'</td><td>'+rows[i].name_application+'</td><td>'+rows[i].description+'</td></tr>'+rows[i].time+'</td><td>'+rows[i].created_at+'</td><td>'+rows[i].update_at+'</td><td>';

  }
});
var http = require('http');
http.createServer(function(req, res, rows) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(
    +'<!DOCTYPE html>'
    +'<html lang="en">'
    +'<head>'
    +'<meta charset="UTF-8">'
    +'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    +'</head>'
    +'<body>'
    +'<table align="center" border="1px">'
    +'<h1 align="center">Курсы</h1>');
    var queryString = 'SELECT * FROM users';
    var application = "";
    conn.queri(queryString, function(err, rows, fields) {
      if (err) throw err;

      for (var i in rows) {
        application = '<tr><td>'+rows[i].id+'</td><td>'+rows[i].name_programm+'</td><td>'+rows[i].avatar+'</td><td>'+rows[i].name_application+'</td><td>'+rows[i].description+'</td></tr>'+rows[i].time+'</td><td>'+rows[i].created_at+'</td><td>'+rows[i].update_at+'</td><td>';
        res.write(application);

      }
      res.write(+'</table>'
      +'</body>'
      +'</html>');
      res.end();
    });
});