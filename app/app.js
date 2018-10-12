module.exports = app => {
    app.beforeStart(async () => {
        const mysqlConfig = await app.configCenter.fetch("mysql");
        app.database = app.mysql.createInstance(mysqlConfig);
    });
};