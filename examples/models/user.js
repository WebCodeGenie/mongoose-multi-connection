const {mongoose} = require('mongoose-multi-connection');

const users = new mongoose.Schema({
    name: {
        type: String
    }    
}, {
    timestamps: true
});

const user = mongoose.model('User', users)

module.exports = user