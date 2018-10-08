"use strict";

const Controller = require("egg").Controller;

class SignController extends Controller {
    async signIn() {
        let data = this.ctx.request.body;
        var that = this;
        this.ctx.service.mysql.CheckExists(data.name, function(len) {
            if(len == 0) {
                that.ctx.body = {
                    Ok: false,
                    Message: "User not find !"
                };
            } else {
                that.ctx.service.mysql.CheckPassword(data.name, function(p) {
                    if(p == data.pass) {
                        that.ctx.body = {
                            Ok: true,
                            Message: "Log in success !"
                        };
                    } else {
                        that.ctx.body = {
                            Ok: false,
                            Message: "Innocent password !"
                        };
                    }
                });
            }
        });
        await new Promise(r => {setTimeout(r, 50);});
    }

    async signUp() {
        let data = this.ctx.request.body;
        var that = this;
        this.ctx.service.mysql.CheckExists(data.name, function(len) {
            if(len == 0) {
                that.ctx.service.mysql.AddUser(data.name, data.pass);
                that.ctx.body = {
                    Ok: true,
                    Message: "Add user !"
                };
            } else {
                that.ctx.body = {
                    Ok: false,
                    Message: "User already exists !"
                };
            }
        });
        await new Promise(r => {setTimeout(r, 50);});
    }
}

module.exports = SignController;