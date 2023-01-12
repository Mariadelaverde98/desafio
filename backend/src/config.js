const config = {
    appConfig: {
        port: process.env.APP_PORT || 3000
    },
    dbConfig: {
        db: process.env.MONGO_DB,
    }
}

module.exports = config