import createUser from "../services/createUser"
import listUser from "../services/listUser"

export default class UserController {
    async store(req, res){
        const{nome, email, password} = req.body
        try{
            const user = await createUser({nome, email, password})
            return res.status(201).json(user)
        }catch (err) {
            return res.status(400).json(err.message)
        }
    }

    async index(req, res){
        try{
            const user = await listUser()
            return res.status(200).json(user)
        }catch (err) {
            return res.status(500).json(err)
        }
    }

}