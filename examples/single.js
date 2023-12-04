const {mongoose} = require('mongoose-multi-connection');

//create connection
mongoose.connect(process.env.DATABASE_url);
//set debug
mongoose.set('debug', true); //optional

const Users = require('./models/user');

(async function(){
    let createdUser = await Users.create({ name: "Aman" });
    console.log(createdUser);
})()