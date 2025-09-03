const express = require("express")
const app = express();
const port = 3000;
app.use(express.json())

const rotas = require("./routes/routes")

app.use('/', rotas);

app.get('/', (req, res) => {
    res.send(`API is Running port: ${port}`)
})

app.listen(port, () => {
    console.log(`Servidor Ligado na Porta ${port}`);
})