import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

class LoginController{

    showUser = async(req: Request, res:Response): Promise<Response> => {

        let allowLogin = false

        const userRepository = getRepository(User);
        const user = await userRepository.find({ where: { name: `${req.body.name}` } });

        // Login validation
        if (req.body.password == user[0].password){
            allowLogin = true
        }else{
            allowLogin = false
        }

        return res.send(allowLogin);
    };

};

export default new LoginController();