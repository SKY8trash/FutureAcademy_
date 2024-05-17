const mysql = require("mysql");

const conn = mysql.createConnection ({
  host: "FutureAcademy",
  user: "root",
  database: "FutureAcademy",
  password: ""
});

conn.connect (error => {
  if (error) {
    return error;
  }
  else {
    console.log('DataBase ----- ok')
  }
});


let query = "SELECT * FROM application";
conn.query(query, (error, result, field) =>{
  console.log(error);
  console.log(result);
  // console.log(field);
});