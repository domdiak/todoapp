const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log("API Request: POST /api/tasks");
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send('Error in "POST /"', error);
    }
});
router.get("/", async (req, res) => {
    try {
        console.log("API Request: GET /api/tasks");
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send('Error in "GET /"', error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
