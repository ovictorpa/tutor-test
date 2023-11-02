const IgnoredTestService = require('../service/IgnoredTestService')
const compareString = require('../utils/stringCompare')
const bodyParser = require('body-parser')
bodyParser.text({type:"*/*"})

class IgnoredTestController {
    
    getExerciseById(req, res) {
        const { id } = req.params;
        const service = new IgnoredTestService();
        const exercise = service.findExerciseById(id);

        return res.status(200).set({'Content-Type':'text/plaint'}).send(exercise);
       
    }

    refactorExercise(req, res) {
        const { id } = req.params;
        const  userCode  = req.body;

        const service = new IgnoredTestService();
        const exerciseRefactores = service.findExerciseRefactoredById(id);

        const isEquals = exerciseRefactores.localeCompare(userCode)
        if(isEquals == 0) {
            res.set({'Content-Type':'text/plaint'}).send("SMELL REMOVIDO");
        }
        else res.send("SMELL NÃO REMOVIDO")
    }
}

module.exports = new IgnoredTestController();