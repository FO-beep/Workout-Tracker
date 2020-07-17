const path = require("path");
const Workout = require("../models/workout_tracker");
const router = require("express").Router();

// routes

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// this collects/retrieves all workouts from the dattabase
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// this collects/retrieves all workouts within a range from the dattabase.
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((data) => {
      res.json(data);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

// post route: adds all workouts to the database.
router.post("/api/workouts/", (req, res) => {
  const newWorkout = new Workout(req.body);
  newWorkout.workoutDay();

  Workout.create(newWorkout)

    .then((data) => {
      res.json(data);
    })

    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
