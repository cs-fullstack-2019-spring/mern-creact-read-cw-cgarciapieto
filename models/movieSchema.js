const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MovieSchema = new Schema(
    {
        movieName: String,
        genre: String,
        mainActor:String,
        mainActress:String,
        supportingActor:String,
        supportingActress:String,

    }
);

module.exports = mongoose.model('movie',MovieSchema);
