const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "dbpkm",
        port: 8181,
    });
    con.connect();
    con.query(sql, data, function(error, results, fields){
        if(error) throw error;
        callback(results);
    });
    con.end();
}
