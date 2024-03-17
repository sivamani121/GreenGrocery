const mongoose= require('mongoose');

const addSchema=mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        require: [true, "a add item must have corresponding product ids "],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:[true,"a add item must have corresponding user id"],
    }
});

module.exports=mongoose.model('Add',addSchema);