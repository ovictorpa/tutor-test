const TsService = require('../service/TsService')
const bodyParser = require('body-parser')
bodyParser.text({type:"*/*"})

class TsController {
    
    getExerciseById(req, res) {
        const { id } = req.params;
        const service = new TsService();
        const exercise = service.findExerciseById(id);

        return res.status(200).set({'Content-Type':'text/plaint'}).send(exercise);
       
    }

    refactorExercise(req, res) {
        const { id } = req.params;
        const  userCode  = req.body;

        const service = new TsService();
        const exerciseRefactores = service.findExerciseRefactoredById(id);

        const isEquals = exerciseRefactores.localeCompare(userCode)
        if(isEquals == 0) {
            res.set({'Content-Type':'text/plaint'}).send("SMELL REMOVIDO");
        }
        else res.send("SMELL NÃO REMOVIDO")
    }
}

module.exports = new TsController();