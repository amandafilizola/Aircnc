const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
mongoose.connect('mongodb+srv://aircnc:omnistack@cluster0-pfp1o.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

// req.query = acessar  query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação edição)

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
