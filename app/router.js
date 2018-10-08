"use strict";

module.exports = app =>  {
    const { router, controller, io } = app;

    //sign up and sign in
    router.post("/signin", controller.sign.signIn);
    router.post("/signup", controller.sign.signUp);

    //socket.io
    io.of("/").route("send", io.controller.home.foo);
};
