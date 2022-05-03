import database from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUser = async ({email, password}) => {
    try{
        const checkEmailBase = await database.query("SELECT * FROM users WHERE email = $1",
        [email])

        //verifica se existe o email na base
        if (!checkEmailBase.rows.length) {
            throw new Error("Invalid e-mail or password")
        }

        //se existe, armazena em user
        const [user] = checkEmailBase.rows

        //compara senha digitada, com a senha cripto da base
        const passCheck = await bcrypt.compare(password, user.hash_pass)

        //caso senha nao bate
        if (!passCheck){
            throw new Error("Invalid e-mail or password")
        }

        //caso senha confere, gera token com palavra secreta salva em .env
        const token = jwt.sign({}, process.env.SECRET, {
            expiresIn:"1d",
            subject:user.id
        })

        delete user.hash_pass
        delete user.created_at
        
        return {token, user}
    }catch (err){ throw new Error(err)}

}

export default loginUser