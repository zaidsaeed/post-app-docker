const express = require("express")
const User = require("../models/User") // new
const router = express.Router()

router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
    const foundUser = await User.findOne({username: username}).catch(err => {return res.status(400).send({error: "Could not find user"})})
    if (!foundUser) {
        return res.status(400).send({error: "Could not find user"})
    }
    if (foundUser.password !== password) {
        return res.status(401).send({error: "The user entered the wrong password"})
    }
    return res.send({foundUser})
})

module.exports = router