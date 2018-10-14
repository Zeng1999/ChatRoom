var x = 0;

module.exports = app => {
    return async (ctx, next) => {
        // connect
        x++;
        ctx.socket.broadcast.emit("important", {
            onlineCount: x
        });
        ctx.socket.emit("important", {
            onlineCount: x
        });
        await next();
        x--;
        ctx.socket.broadcast.emit("important", {
            onlineCount: x
        });
        // disconnect
    };
};