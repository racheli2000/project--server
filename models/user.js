

const mongoose= require('mongoose');

const userSchema= mongoose.Schema({

    name:{
        type:String,
        require: true
    },
    age:{
        type:String,
    },
    city:{
        type:String
    },
    mail:{
        type:String
    },
    phone:{
        type: String
    }

})

module.exports= mongoose.model('User', userSchema);