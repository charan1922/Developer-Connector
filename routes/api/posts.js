const express = require("express")
const router = express.Router();

//@routes   GET api/posts/test
//@desc     Test post route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "posts works" }));



module.exports = router;

