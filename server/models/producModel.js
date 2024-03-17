const mongoose = require('mongoose');

const  productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter product name'],
        trim:true,
        maxLength:[100,'Please enter product name']
    },
    price:{
        type:Number,
        required:[true,'please enter product name'],
        maxLength:[100,'Please enter product name'],
        default:0.0
    },
    Description:{
        type:String,
        required:[true,'please enter product name']
    },
    ratings:{
        type:Number,
        default:0
    },
    quantity:{
        type:Number,
        default:0,
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,'please enter product Category'],
        values:[
            'fruits',
            'vegatables',
            'diary'
        ],
        message:'please slect correct category for product'
    },
     
})

module.exports=mongoose.model('Product',productSchema);