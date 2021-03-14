const express = require("express");
const PostController = require("../controllers/posts");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file-image");

router.post("", checkAuth, extractFile, PostController.createPost);

router.put("/:id", checkAuth, extractFile, PostController.modifyPostById);

router.get("", PostController.getPost);

router.get("/:id", PostController.getPostById);

router.delete("/:id", checkAuth, PostController.deletePostById);

module.exports = router;
