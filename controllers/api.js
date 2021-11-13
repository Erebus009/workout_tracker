const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

//==============================
// GET for all workouts. With added field of total duration taking
// sums of all durations nested objects
//==============================
router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});
//=================================
// GET for range of all workouts
//=================================
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});
//==========================
// POST create a new workout.
//==========================
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});
//==================================================================
// Update workout by it's ID and push in new body to database object.
//===================================================================
router.put("/workouts/:id", ({ body, params }, res) => {
  const filter = { _id: params.id };
  const update = { $push: { exercises: body } };

  Workout.findOneAndUpdate(filter, update)
    .then((updatedWorkoutData) => {
      res.json(updatedWorkoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

module.exports = router;
