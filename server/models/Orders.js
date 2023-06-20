const mongoose = require('mongoose');
const UserModel = require('./Users');
const ProductModel = require('./Products');

const OrderSchema = new mongoose.Schema({
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
    status: {
        type: String,
        required: false,
        default: "On progress"
    }
}, {timestamps: true})

const OrderModel = mongoose.model("orders", OrderSchema);
module.exports = OrderModel;