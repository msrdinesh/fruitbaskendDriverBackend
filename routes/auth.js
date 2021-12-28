var express = require("express");
var router = express.Router();
const { f, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    
  ],
  signup
);

router.post(
  "/signin",
  [
   
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
