"use strict";

var connection;

const Service = require("egg").Service;

class MysqlService extends Service {
    async AddUser(n, p) {
        const res = await this.app.mysql.insert("user", {
            name: n,
            password: p
        });
        return res.affectedRows === 1;
    }

    async DeleteUser(n) {
        const res = await this.app.mysql.delete("user", {
            name: n
        });
        return res.affectedRows === 1;
    }

    async CheckExists(n) {
        const x = await this.app.mysql.get("user", {
            name: n
        });
        return x !== null;
    }

    async CheckPassword(n, p) {
        const u = await this.app.mysql.get("user", {
            name: n
        });
        return u === null ? false : u.password === p;
    }
}

module.exports = MysqlService;
