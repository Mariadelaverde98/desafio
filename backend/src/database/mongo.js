const mongoose = require('mongoose');
const { options } = require('../app');
mongoose.set('strictQuery', false)

mongoose
    .connect(
        process.env.MONGO_DB,
        {
            maxPoolSize:  100,
        }
    )
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err.message);
    });