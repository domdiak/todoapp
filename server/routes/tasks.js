const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
router.get("/", async (req, res) => {
    const { completed } = req.query;
    try {
        if (req.query?.completed) {
            const filteredTasks = await Task.find({ completed });
            res.send(filteredTasks);
        } else {
            const tasks = await Task.find();
            res.send(tasks);
        }
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
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
        res.send(error);
    }
});

module.exports = router;
