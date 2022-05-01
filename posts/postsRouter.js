const router = require("express").Router();
const {createPost,findPostbyText} = require("./postsController");
router.post("/",createPost);
router.get("/:query",findPostbyText);

module.exports = router;