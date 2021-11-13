const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { 
      type: Date,
      default: Date.now
  },
  exercises: [{
      type: {
        type: String,
        trim:true,
      },
      name: {
        type:String,
        trim: true,
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets : Number,
      totalduration : {
        type: Number,
        default: 0
      }

  }],
});


const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;
