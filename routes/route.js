const path = require("path");
const db = require("../models");
const Workout = require("../models/workout_tracker");
const router = require("express").Router();


// routes
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


// this collects/retrieves all workouts from the dattabase
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })

        .catch(err => {
            res.status(400).json(err);

        });
});

// this collects/retrieves all workouts within a range from the dattabase.
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })

        .catch(err => {
            res.status(400).json(err);

        });
});

// post route: adds all workouts to the database.   
router.post("/api/workouts/", (req, res) => {
    db.Workout.create({
            exercises: [req.body]
        })
        .then(dbWorkout => {
            res.json(dbWorkout);

        })

        .catch(err => {
            res.status(400).json(err);

        });
});

router.put("/api/workouts/:id", (req, res) => {

})





module.exports = router;