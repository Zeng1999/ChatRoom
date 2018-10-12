'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1538882298447_7610';

    // add your config here
    config.middleware = [];

    config.security = {
        domainWhiteList: ['*'],
        methodnoallow: {
            enable: false,
        },
        csrf: {
            enable: false,
            headName: "x-csrf-token",
            ignoreJSON: false,
        },
    };

    config.mysql = {
        client: {
            host: "192.168.0.109",
            port: "8806",
            user: "foo",
            password: "123456",
            database: "ChatRoom",
        },
        app: true,
        agent: false,
    };

    config.io = {
        init: { },
        namespace: {
            "/": {
                connectionMiddleware: [ "connection" ],
                packetMiddleware: [],
            },
            "/example": {
                connectionMiddleware: [],
                packetMiddleware: [],
            },
        },
    };

    return config;
};
