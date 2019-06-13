const mongoose = require(`mongoose`);

const user = 'approot';
const password = 'apppssw';
// const user = '';
// const password = '';
const credentials = user && password ? `${user}:${password}@` : '';
const connectionString = `mongodb://${credentials}localhost:27017/mydb`;

const conn = mongoose
    .createConnection(connectionString, { useNewUrlParser: true });

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function callback () {
    console.log("It worked");
});