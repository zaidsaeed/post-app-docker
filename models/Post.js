const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	text: String,
})

module.exports = mongoose.model("Post", schema)