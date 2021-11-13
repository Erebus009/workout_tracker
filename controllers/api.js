const express = require("express");
const router = express.Router();
const db = require("../models");

// GET for all workouts.
router.get("/workouts", (req, res) => {
  db.Workout.find()
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST create a new workout.
router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Update workout by it's ID and push in new body to database object.
router.put("/workouts/:id", ({ body, params }, res) => {
  const filter = { _id: params.id };
  const update = { $push: { exercises: body } };

  db.Workout.findOneAndUpdate(filter, update)
    .then((updatedWorkoutData) => {
      res.json(updatedWorkoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET for range of all workouts
router.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
