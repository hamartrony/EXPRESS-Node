import database from '../database';
import * as bcrypt from "bcryptjs";

const createUser = async ({nome, idade}) => {
    // const hashPass = await bcrypt.hash(password, 8)

    try{
        const res = await database.query(
            "INSERT INTO clientes(nome, idade) VALUES ($1, $2) RETURNING *",
            [nome, idade]
        )
        const [user] = res.rows;
        return user;
    }catch (err) {
        throw new Error(err)
    }

}

export default createUser