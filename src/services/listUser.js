import database from '../database';

const listUser = async () => {
    try{
        const usersBase = await database.query("SELECT * FROM users",)
        // tirar o password antes da exibição
        usersBase.rows.forEach((user) => delete user.hash_pass)
        
        return usersBase.rows;
        
    }catch (err) {
        throw new Error(err)
    }

}
 
export default listUser