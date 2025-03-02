const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3001',  
    credentials: true  
}));

// Passport configuration
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/linkedin/callback",
    scope: ['r_liteprofile', 'r_emailaddress'],
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

// Middleware
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
