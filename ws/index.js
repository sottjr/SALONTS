const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require("./database")
const cors = require("cors")



//middlewares
app.use(morgan("dev"))

//variables
app.set("port", 8000);
app.use(express.json());
app.use(cors())


//rotas
app.use(require("./src/routes/salao.routes"))


app.listen(app.get("port"), () => {
    console.log(`WS excutando na porta ${app.get("port")}`)
});