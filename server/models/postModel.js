const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  postUrl: { type: String },
  avatar: { type: String, required: true },
  timestamp: { type: Number, default: Date.now },
  comments: { type: Array, default: {} },
  likes: { type: Number, default: 0 },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model("posts", postSchema);
