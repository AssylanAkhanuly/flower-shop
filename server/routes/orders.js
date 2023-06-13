const OrderModel = require('../models/Orders');

const router = require('express').Router();

router.post("/createOrder", async(req, res) => {
    const order = req.body;
    if(!order) return res.status(400).json("Bad request");

    const newOrder = new OrderModel(order);
    try {
        const result = await newOrder.save();

        if(result) res.status(200).json(result);
        else res.status(400).json("Unable to create the order");
    } catch(e) {
        res.status(400).json(e)
    }
})

module.exports = router

