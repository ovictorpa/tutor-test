const { readFile } = require('fs');
const door = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compareFiles = require('./stringCompare.js')

app.use(bodyParser.text({type:"*/*"}));

app.get('/exercises', (req, res) => {

    const ignoreTestPath = './src/mocks/texts/ignoreTest.txt'

    readFile(ignoreTestPath, (err, data) => {
        if(err) {
            res.status(500).send(err)
            return;
        }

        res.set({'Content-Type':'text/plaint'}).send(data);
    })
})

app.put('/exercises', (req, res) => {

    const ignoreTestRefactoredPath = './src/mocks/texts/ignoreTestRefactored.txt'
    const userCode = req.body

    const contents = compareFiles.checkIfContainsSync(ignoreTestRefactoredPath, userCode);
    
    if(contents == 0) {
    res.set({'Content-Type':'text/plaint'}).send("SMELL REMOVIDO");
    }
    else res.send("SMELL NAO REMOVIDO" + contents)
})

app.listen(door, () => {
    console.log(`Este servidor está sendo executado na porta ${door}`)
})

