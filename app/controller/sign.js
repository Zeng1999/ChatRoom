"use strict";

const Controller = require("egg").Controller;

class SignController extends Controller {
    async signIn() {
        const data = this.ctx.request.body;
        const ok = await this.ctx.service.mysql.CheckPassword(data["name"], data["pass"]);
        this.ctx.body =  ok ? {
            Ok: true,
            Message: "Log in success !"
        } : {
            Ok: false,
            Message: "Innocent password !"
        };
    }

    async signUp() {
        const data = this.ctx.request.body;
        const ok = await this.ctx.service.mysql.CheckExists(data["name"]);
        this.ctx.body = ok ? {
            Ok: false,
            Message: "User already exists !"
        } : (await this.ctx.service.mysql.AddUser(data["name"], data["pass"]) ? {
            Ok: true,
            Message: "Sign up success !"
        } : {
            Ok: false,
            Message: "Some Errors !"
        });
    }
}

module.exports = SignController;