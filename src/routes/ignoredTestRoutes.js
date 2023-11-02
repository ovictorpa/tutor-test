const { Router } = require("express");
const IgnoredTestController = require("../app/controllers/IgnoredTestController");
const bodyParser = require('body-parser')
const typeBody =  bodyParser.text({type:"*/*"})

const ignoredTestRouter = Router();

ignoredTestRouter.get('/exercises/:id', IgnoredTestController.getExerciseById)
ignoredTestRouter.put('/exercises/:id', typeBody, IgnoredTestController.refactorExercise)

module.exports = ignoredTestRouter;