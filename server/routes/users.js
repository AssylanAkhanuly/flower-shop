const UserModel = require('../models/Users');

const router = require('express').Router();


router.get('/getUsers', async (req, res) => {

    try {
        const result = await UserModel.find({})
        res.json(result)
    } catch(e) {
        res.status(400).json(e)
    }
})

router.get('/getUser', async(req, res) => {
    try {
        const result = await UserModel.findOne({phone: req.query.phone});
        if(!result) return res.status(404).json("Not found")
        if(result.password === req.query.password) res.status(200).json(result)
        else res.status(400).json("Invalid Password");
    } catch(e) {
        res.status(400).json(e)
    }
})

router.post("/createUser", async (req, res) => {
    if(!req.body) return res.status(400).json("Bad request");
    const user = req.body;
    const newUser = new UserModel(user)
    try {
        const result = await newUser.save();
        if(result) res.status(200).json(user)
        else res.status(400).json("Unable to create new user")
    } catch (e) {
        res.status(400).json(e)
    }
})

module.exports = router;