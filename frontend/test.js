const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbpkm",
  port: 8181
})

db.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  };
  //Select all customers and return the result object:
  db.query("SELECT count(*) FROM 'pokemon'", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});