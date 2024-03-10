const mongoose =require('mongoose');
const slugify = require('slugify');

const cartItemSchema=new mongoose.Schema(
    {
        ProductId:{
            type: mongoose.Schema.Types.ObjectId,type: mongoose.Schema.Types.ObjectId,
            ref:'Product',
            require:[true,'a cart item must have corresponding product ids '],
            
        },
        quantity:{
            type:Number,
            require:[true,'must specify quantity'],
            min: [1, 'Quantity must be greater than 0'],
        },

        units:{
            type:String,
            minlength:[2,'length of units must be greater than 2']
        }

    }
)