const mongoose = require('mongoose');
const UserModel = require('./Users');
const ProductModel = require('./Products');

const OrderSchema = new mongoose.Schema({
    user: {
        type: Object,
        required: true,
        default: {}
    },
    receiver: {
        type: Object,
        required: true,
        default: {}
    },
    product: {
        type: Array,
        required: true,
        default: []
    }, 
}, {timestamps: true})

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;