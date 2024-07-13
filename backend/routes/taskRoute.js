const express = require('express');
const task = require('../model/taskModel');

const router = express.Router();

//get/Reads all tasks
router.get('/api/task', async (req, res) => {

    try {

        const tasks = await task.find();
        res.status(200).json(tasks)

    } catch (error) {
      res.status(500).json({msg:error.message})
    }

})

//Create Tasks

router.post('/api/task',async (req,res)=>{

    try {
        const Task=await task.create(req.body);
        res.status(200).json(Task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }

})

module.exports=router;