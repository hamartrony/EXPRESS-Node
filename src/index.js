import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.listen(process.env.PORT || 3000, () => {startDatabase()})


//teste no navegador
app.get('/', (request, response) => {
    response.send('<h1>Interface teste Sever</h1><p>Parabens, voce esta conectado!</p><p>Clique <a href="http://localhost:3000/users">aqui</a> para ver os Usuarios');
  });