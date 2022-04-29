import database from '../database';

const listUser = async () => {
    // const hashPass = await bcrypt.hash(password, 8)

    try{
        const res = await database.query(
            "SELECT * FROM clientes",
        )
        const user = res.rows;
        return user;
    }catch (err) {
        throw new Error(err)
    }

}

export default listUser