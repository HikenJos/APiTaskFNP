const Tasks = require('../model/task')

async function createTask (req, res) {
  const task = new Tasks()
  const parameters = req.body

  task.name = parameters.name
  task.description = parameters.description

  try {
    const taskStore = await task.save()

    if (!taskStore) {
      res.status(400).send({ msg: 'No se ha podido guardar la tarea' })
    } else {
      res.status(200).send({ task: taskStore })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

async function getTask (req, res) {
  try {
    const task = await Tasks.find().sort({ date: 'desc' })

    if (!task) {
      res.status(400).send({ msg: "Cann't post petition" })
    } else {
      res.status(200).send({ task })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

async function getTaskByName (req, res) {
  const name = req.query.name
  try {
    const taskByName = await Tasks.find({ name })

    if (!taskByName) {
      res.status(400).send({ msg: "Cann't get petition" })
    } else {
      res.status(200).send({ taskByName })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

async function updateTaskTime (req, res) {
  const idTask = req.body.id

  try {
    const updateTask = await Tasks.findByIdAndUpdate(idTask, req.body)

    if (!updateTask) {
      res.status(400).send({ msg: "Cann't update petition" })
    } else {
      res.status(200).send({ task: updateTask })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

async function deleteTask (req, res) {
  const TaskID = req.body.id
  const deleteTask = await Tasks.findByIdAndDelete(TaskID)

  try {
    if (!deleteTask) {
      res.status(400).send({ msg: "Cann't delete petition" })
    } else {
      res.status(200).send({ msg: 'Task Deleted' })
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = {
  createTask,
  getTask,
  getTaskByName,
  updateTaskTime,
  deleteTask
}
