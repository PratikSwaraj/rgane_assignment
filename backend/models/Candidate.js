const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    linkedInId: String,
    displayName: String,
    email: String,
    skills: [String],
    experience: Number,
    location: String,
    jobPreferences: String,
});

module.exports = mongoose.model('Candidate', CandidateSchema);
