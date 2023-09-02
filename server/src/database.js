const mongoose  = require("mongoose");

const URL = process.env.MONGOBD_URL
                ? process.env.MONGOBD_URL
                : 'mongodb://localhost/databasetest';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});