import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, ()=>{ })

app.get('/', (request, response) => {
    response.send('Otario');
  });