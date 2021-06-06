const express = require("express")
const User = require("../models/User") // new
const router = express.Router()

router.post("/", async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	})
	await user.save()
	res.send(user)
})

module.exports = router