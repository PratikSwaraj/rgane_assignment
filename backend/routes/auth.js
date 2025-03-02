const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/linkedin', passport.authenticate('linkedin'));

router.get('/linkedin/callback', passport.authenticate('linkedin', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;
