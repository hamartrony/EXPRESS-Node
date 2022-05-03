import { request } from "express";
import jwt from "jsonwebtoken";

const checkToken = (req, res, next) => {
    let token = req.headers.authorization

    if(!token){
        return res.status(401).json("Missin authorization token")
    }
    // pega indice 1 do array token, desestruturando array
    const [, authToken] = token.split(' ')

    //verifica token e chave SECRET
    jwt.verify(authToken, process.env.SECRET, (error, decoded) => {
        if(error){
            return res.status(401).json('invalid token')
        }

        //EXTRAI id de dentro do token
        const {sub} = decoded

        //INSERE id dentro de req, para ser utilizado em qualquer lugar
        req.user ={
            id: sub
        }
        next()
    })


}

export default checkToken