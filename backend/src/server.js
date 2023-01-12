require('dotenv').config()
const app = require('./app')
require("./database/mongo");
const { appConfig } = require("./config");

app.listen(appConfig.port, () => {
    console.log(`serve at http://localhost:${appConfig.port}`);
});
