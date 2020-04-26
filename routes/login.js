const router = require("express").Router();
const User = require("../models/user.model");



router.post("/users/login", (req, res, next) => {
    const { body } = req;
    console.log("body", body);
    console.log(req.session.isLoggedIn, "my session");
    const {
        email,
        password
    } = body;
    if (!email) {
        return res.end({
            success: false,
            message: "error: Email cannot be blank."
        });
    }
    if (!password) {
        return res.end({
            success: false,
            message: "error: Password cannot be blank."
        });
    }
    let emailLower = email.toLowerCase();
    User.getAuthenticated(emailLower, password, (err, user, anothererr) => {
        if (err) {
            return res.status(401).json({ msg: e })
        } else if (anothererr) {
            return res.status(401).json({ msg: anothererr })
        }
        console.log('ERR', err);
        console.log('USER', user);
        req.session.isLoggedIn = true;
        return res.json({ msg: "Successfully logged in" })
    });
});
module.exports = router
