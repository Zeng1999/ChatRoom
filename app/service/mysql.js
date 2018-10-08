"use strict";

const Service = require("egg").Service;
const connection = require("mysql").createConnection({
    host: "192.168.0.111",
    user: "foo",
    password: "123456",
    port: 8806,
    database: "ChatRoom"
});

connection.connect();

class MysqlService extends Service {
    async AddUser(n, p) {
        var ins = `INSERT INTO user (name, password) VALUES ('${n}', '${p}')`;
        connection.query(ins, function(err) {
            if(err) {
                console.log(err.message);
                throw err;
            }
        });
    }

    async DeleteUser(n) {
        var del = `DELETE FROM user WHERE name='${n}'`;
        connection.query(del, function(err) {
            if(err) {
                console.log(err.message);
                throw err;
            }
        });
    }

    async CheckExists(n, callback) {
        var sel = `SELECT * FROM user WHERE name='${n}'`;
        connection.query(sel, function(err, res) {
            if(err) {
                console.log(err.message);
                throw err;
            }
            callback(res.length);
        });
    }

    async CheckPassword(n, callback) {
        var sel = `SELECT * FROM user WHERE name='${n}'`;
        connection.query(sel, function(err, res) {
            if(err) {
                console.log(err.message);
                throw err;
            }
            callback(res[0].password);
        });
    }
}

module.exports = MysqlService;
