const express = require("express")
const router = express.Router();

//@routes   GET api/users/test
//@desc     Test users route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "user works" }));

//@routes   POST api/posts/test
//@desc     Test post route
//@access   Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email Already Exists' })
      }
      else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,

        })
      }
    })

});




module.exports = router;

