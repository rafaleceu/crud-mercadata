export = { 
    mysql: { 
        HOST: "localhost",
        USER: "root",
        PASSWORD: "123",
        DB: "mercadata-users",
        dialect: "mysql",
        pool: { max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
        }
    },

    server:{
        PORT: "8080"

    }
}