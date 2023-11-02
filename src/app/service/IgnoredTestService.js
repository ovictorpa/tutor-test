const ignoredTest = require('../models/IgnoredTest')

class IgnoredTestService {
    findExerciseById(id) {
        const exercise = ignoredTest.ignoredTestExercises.find(e => e.id == id);
        return exercise.text;
    }
    findExerciseRefactoredById(id) {
        const exercise = ignoredTest.ignoredTestExercises.find(e => e.id == id);
        return exercise.textRefactored
    }
    
}

module.exports =  IgnoredTestService 