import loginUser from "../services/loginUser"

export default class LoginController {
    async store(req, res){
        const{email, password} = req.body

        try{
            const userToken = await loginUser({email, password})
            return res.json(userToken)
        }catch (err) {
            return res.status(400).json(err.message)
        }
    }

}

