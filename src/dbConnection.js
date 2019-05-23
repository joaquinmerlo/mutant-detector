const mysql = require('mysql');

const db_config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'humans'
}

let mysqlConnection;

function dbConnection() {

    mysqlConnection = mysql.createConnection(db_config);

    mysqlConnection.connect(function (err) {
        if (err) {
            setTimeout(dbConnection, 2000);
            return
        } else {
            console.log('DB is connected');
        }
    });

    mysqlConnection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            dbConnection();
        } else {
            throw err;
        }
    });
}

dbConnection();

module.exports = mysqlConnection;