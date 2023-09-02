const { Schema, model } = require('mongoose');

const userchema = new Schema({
    usersName: {
        type: String,
        require: true,
        trim: true,
        unique: true
    }
}, {
    timestamps:true
});

module.exports = model('user', userSchema);