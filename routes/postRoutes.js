const express = require("express")
const Post = require("../models/Post") // new
const router = express.Router()

const middle = (req, res, next) => {
	if (!req.session || !req.session.user) {
		return res.status(401).json({'message': 'User not authorized'});
	}
	next()
}

router.post("/", middle, async (req, res) => {
	const session = req.session;
    console.log('session', session)
	const post = new Post({
		title: req.body.title,
		text: req.body.text,
	})
	await post.save()
	res.send(post)
})

module.exports = router