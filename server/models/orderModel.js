const mongoose = require('mongoose');

const orderSchema=mongoose.Schema({
    userId:{
        type:'String',
        required:true
    },
    Products:[{
        productId:{
            type:'String'
        },
        quantity:{
            type:'Number',
            default:1
        }
    }],
    amount:{
        type:'Number',
        required:true
    },
    address:{
        type:'String',
        required:true
    },

    status:{
        type:'String',
        default:"pending"
    },
    date:{
        type:'Date'
    }
});

module.exports=mongoose.model('Order',orderSchema);