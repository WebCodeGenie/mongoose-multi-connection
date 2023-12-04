const { mongoose, db } = require('mongoose-multi-connection');

//create connection
mongoose.connect(process.env.DATABASE_URI); //  mongodb://127.0.0.1:27017/main
//set debug
mongoose.set('debug', true); //optional
//set prefix
mongoose.prefix = "dev_"; //optional
//set postfix
mongoose.postfix = "_dev"; //optional

//user model
const Users = require('./models/user');

(async function () {
    //record will create in main database passed in DATABASE_URI
    let createdUserInMain = await Users.create({ name: "Khimji" });
    console.log(createdUserInMain);

    //record will create in db1 database passed in db()
    let createdUserIndb1 = await db('db1', Users).create({ name: "Dipesh" });
    console.log(createdUserIndb1);
})()