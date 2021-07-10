const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }