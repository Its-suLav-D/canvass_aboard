var express = require("express");
var router = express.Router();
const Post = require("../models/postModel");
const { error } = require("console");

router.get("/", (req, res, next) => {
  Post.find()
    .then((post) => {
      console.log(post);
      res.status(200).json({
        message: "Message Fetched Successfully",
        posts: post,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "There was an error Fetching the Posts",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const post = new Post({
    username: req.body.username,
    title: req.body.title,
    subtitle: req.body.subtitle,
    postUrl: req.body.postUrl,
    avatar: req.body.avatar,
    timestamp: req.body.timestamp,
  });
  post
    .save()
    .then((createPost) => {
      console.log(createPost);
      res.status(201).json({
        message: "Post added Successfully",
        post: createPost,
        postId: createPost._id,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    subtitle: req.body.subtitle,
  });
  Post.updateOne({ _id: req.params.id }, post)
    .then((update) => {
      console.log(update);
      res.status(200).json({
        message: "Post updated Successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error Updating the Post!!",
        error: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      Post.deleteOne({ _id: req.params.id })
        .then((result) => {
          res.status(204).json({
            message: "Post deleted successfully",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "An error occurred",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Post could not be found.",
        error: { message: "Post not found" },
      });
    });
});

module.exports = router;
