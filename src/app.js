const express = require('express')
const ignoredTestRouter = require('./routes/ignoredTestRoutes')
const bodyParser = require('body-parser')

class App {
    constructor() {
        this.app = express();
        this.routes();
        this.bodyParser();
    }

    routes() {
        this.app.use(ignoredTestRouter);
    }
    bodyParser(){
        this.app.use(bodyParser.text({type:"*/*"}));
    }
}

module.exports = new App().app;