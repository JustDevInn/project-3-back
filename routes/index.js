var express = require('express');
var router = express.Router();

// this is where you should code the get and post methods of the signup and login. 
// the frontend (see utils/auth in the frontend) makes a call to the backend which triggers this js file to run.
// create a user model first and import it in this file.
// use router.post to save the user to your database
// don't forget to catch the error
// do this for login as well

// router.post("/signup",(req,res) => {
//   User
//   .create({
//      username: req.body.username,
//      firstname: "",
//      ... 
//      ...
//      and so on

//   })
//   .then((response) => {
//     ...
//   })
//   .catch...
//  })


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
