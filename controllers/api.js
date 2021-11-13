const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.update({});
});

module.exports = router;
