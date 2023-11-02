const { readFileSync } = require('fs');
const paths = require('./path')

const allExercises = [
    {
        "id" : 1,
        "text" : readFileSync(paths.ignoreTestPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 2,
        "text" : readFileSync(paths.ignoreTestPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise2refactored, 'utf-8')
    }
]




module.exports = {allExercises}