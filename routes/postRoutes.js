const express = require("express")
const Post = require("../models/Post") // new
const router = express.Router()

router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		text: req.body.text,
	})
	await post.save()
	res.send(post)
})

module.exports = router