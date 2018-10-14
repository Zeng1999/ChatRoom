"use strict";

const Controller = require("egg").Controller;

class IOHomeController extends Controller {
    async message() {
        var msg = this.ctx.args[0];
        console.log(msg);
        await this.ctx.socket.broadcast.emit("receive", msg);
        await this.ctx.socket.emit("receive", msg);
    }
}

module.exports = IOHomeController;
