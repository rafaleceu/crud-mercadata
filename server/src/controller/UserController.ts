import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

class UserController{

    showAllUser = async(req: Request, res: Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository.find({
            select: ['id', 'name', 'lastName', 'email', 'createdAt', 'updateAt']
        });
        return res.send(users);
    };

    showUser = async(req: Request, res:Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository.findOneOrFail(req.params.id, {
            select: ['id', 'name', 'lastName', 'email', 'createdAt', 'updateAt']
        });
        return res.send(users);
    };

    createUser(){

    };

    updateUser(){

    };

    deleteUser(){

    };
    
};

export default new UserController();