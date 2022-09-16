//const mongoose = require('mongoose')
import mongoose from 'mongoose'

const ScoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    turns:{
        type:Number,
        required:true,
    }
})

const ScoreModel = mongoose.model("scores",ScoreSchema)

//module.exports = ScoreModel
export default ScoreModel