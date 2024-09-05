import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/DatabaseModel';

//definindo porta do servidor
const port: number = 3333;

//criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas da aplicação
server.get('/', (req, res) => {
    res.json({ mesagem: "Olá mundo, está é minha primeira aplicação web"})
});

server.get('/pessoas', (req, res) => {
    res.json({ mesagem: "Aqui será apresentado o dados das pessoas."})
});

new DatabaseModel() .testeConexao() .then((resdb) => {
    if(resdb) {
        console.log("Conexão com banco de dados realizada com sucesso!");
        //iniciando o servidor
        server.listen(port, () => {
            console.log(`Aervidor iniciando no endereço http://localhost:${port}`);
        });
    }
    else {
        console.log("Erro ao conectar com o bnaco de dados")
    }
})




