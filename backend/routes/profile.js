const express = require('express');
const router = express.Router();

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
};

router.get('/', ensureAuthenticated, (req, res) => {
    res.json(req.user);
});

module.exports = router;
