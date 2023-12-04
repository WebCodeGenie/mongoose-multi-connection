# Mongoose Multiple Database Connection

**mongoose-multi-connection** is used to create multiple database connection, base of this package is [mongoose](https://www.npmjs.com/package/mongoose), you can integrate other mongoose functionality too.


# Install

    npm i mongoose-multi-connection

## Use of Multi db Connection
You can see below example for multiple connection, you can check examples directory for example, it also supports esm
```js
const { mongoose, db } = require('mongoose-multi-connection');

//import { mongoose, db } from 'mongoose-multi-connection'; //for esm

//create connection
mongoose.connect(process.env.DATABASE_URI); //  mongodb://127.0.0.1:27017/main
//set debug
mongoose.set('debug', true); //optional
//set prefix
mongoose.prefix = "dev_"; //optional
//set postfix
mongoose.postfix = "_dev"; //optional

//user model check example directory for reference
const Users = require('./models/user'); 

(async function () {
    //record will create in main database passed in DATABASE_URI
    let createdUserInMain = await Users.create({ name: "Khimji" });
    console.log(createdUserInMain);

    //record will create in db1 database passed in db()
    let createdUserIndb1 = await db('db1', Users).create({ name: "Dipesh" });
    console.log(createdUserIndb1);
})()
```


## Use of Single db Connection
You can see below example for single connection, you can check examples directory for example, it also supports esm
```js
const {mongoose} = require('mongoose-multi-connection');

//import { mongoose, db } from 'mongoose-multi-connection'; //for esm

//create connection
mongoose.connect(process.env.DATABASE_url);
//set debug
mongoose.set('debug', true); //optional

//user model check example directory for reference
const Users = require('./models/user');

(async function(){
    let createdUser = await Users.create({ name: "Aman" });
    console.log(createdUser);
})()
```