const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        name: {
            type: String,
            trim: true,
            required: "Enter your exercise"
        },

        type: {
            type: String,
            trim: true,
            required: "Enter your type of exercise"
        },

        weight: {
            type: String,
            trim: true,
            required: "Enter your exercise"
        },

        sets: {
            type: Number

        },

        reps: {
            type: Number

        },

        duration: {
            type: Number,
            required: "Enter the duration of your exercise"
        },


        distance: {
            type: Number,
            required: "Enter your distance traveled"

        }
    }]
});




const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;