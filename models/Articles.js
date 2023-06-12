const { Schema, model } = require("mongoose");

const ArticleSchema = Schema({
	title: {
        type: String,
        require: true
    },
	content: {
        type: String,
        require: true
    },
	date: {
        type: Date,
        require: true
    },
	image: String,
});
