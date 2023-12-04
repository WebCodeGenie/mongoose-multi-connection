const mongoose = require('mongoose');
//export db function which will create other db's connection
module.exports.db = function(dbName, model){
    let databaseName = dbName;
    //set prefix
    if(mongoose.prefix){
        databaseName = `${mongoose.prefix}${databaseName}`;
    }
    //set postfix
    if(mongoose.postfix){
        databaseName = `${databaseName}${mongoose.postfix}`;
    }
    //set specified db's connection
    const db = mongoose.connection.useDb(databaseName, {
        useCache: true
    });
    //check for registered model
    if (!db.models[model.collection.modelName]) {
        //if not set
        db.model(model.collection.modelName, model.schema)
    }
    return db.model(model.collection.modelName);
};
//export mongoose
module.exports.mongoose = mongoose;