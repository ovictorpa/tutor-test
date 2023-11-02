const { readFileSync } = require('fs');

const path = {
    "exercise1" : "./src/app/models/exercises/ignoredTest/it-exercise-1.txt",
    "exercise1refactored" : "./src/app/models/exercises/ignoredTest/it-exercise-1-refactored.txt",
    "exercise2" : "./src/app/models/exercises/ignoredTest/it-exercise-2.txt",
    "exercise2refactored" : "./src/app/models/exercises/ignoredTest/it-exercise-2-refactored.txt"
}

const ignoredTestExercises = [
    {
        "id" : 1,
        "text" : readFileSync(path.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(path.exercise1refactored, 'utf-8')
    },
    {
        "id" : 2,
        "text" : readFileSync(path.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(path.exercise2refactored, 'utf-8')
    }
]

module.exports = { ignoredTestExercises}