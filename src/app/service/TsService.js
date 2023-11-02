const exercises = require('../models/exercises')

class TsService {
    findExerciseById(id) {
        const exercise = exercises.allExercises.find(e => e.id == id);
        return exercise.text;
    }
    findExerciseRefactoredById(id) {
        const exercise = exercises.allExercises.find(e => e.id == id);
        return exercise.textRefactored
    }
    
}

module.exports =  TsService 