import database from '../database';
import * as bcrypt from "bcryptjs";


const createUser = async ({nome, email, password}) => {
    const hash_pass = await bcrypt.hash(password, 8)

    try{
        const insertBase = await database.query(
            "INSERT INTO users(nome, email, hash_pass) VALUES ($1, $2, $3) RETURNING *",
            [nome, email, hash_pass]
        )
        const [user] = insertBase.rows;
        return user;
    }catch (err) {
        throw new Error(err)
    }

}

export default createUser