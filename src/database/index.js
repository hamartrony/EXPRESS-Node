import {Client} from "pg";

const database = new Client({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

export const startDatabase = async () => {
    await database.connect();
};

export default database;

// configuracao do banco de dados, atraves do "pg".