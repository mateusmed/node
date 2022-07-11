
import express from 'express';

import jwt from 'jsonwebtoken'

/***
  bcrypt - usado para encodar o password antes de consultar ou salvar no banco
  **/

const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});


const SECRET = "TCHOTCHOMARY";

app.post('/auth/login', (req, res) => {

    const body = req.body;

    // verifica as infos (user, password)
    // busca usuario no banco, fazendo a validação de forma correta, hash com hash

    const secret = "TCHOTCHOMARY";

    const dataEncode = { user: body.user};

    const token = jwt.sign(dataEncode, secret);

    const dataResponse = { msg: "logado com sucesso", token: token};

    res.status(200).send(dataResponse)
});

function checkToken(req, res, next){

    const authHeader = req.headers['authorization'];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json( {msg: "acesso negado"})
    }

    try{
        jwt.verify(token, SECRET);
        next()
    }catch (error) {
        res.status(400).json({msg: "token invalido"})
    }

}

app.get('/private/url', checkToken, (req, res) => {

    const body = req.body;

    const dataResponse = { msg: "ok, passou para a url privada"};

    res.status(200).send(dataResponse)
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
