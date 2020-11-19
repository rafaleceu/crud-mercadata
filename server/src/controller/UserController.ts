import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../model/User';

class UserController{

    showAllUser = async(req: Request, res: Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository.find({
            select: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt']
        });
        return res.send(users);
    };

    showUser = async(req: Request, res:Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository.findByIds([req.params.id], {
            select: ['id', 'name', 'lastName', 'email', 'createdAt', 'updatedAt']
        });
        return res.send(users);
    };

    createUser = async(req: Request, res:Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository.save(req.body)
        console.log(req.body)
        return res.send(users);
    };

    deleteUser = async(req: Request, res:Response): Promise<Response> => {
        console.log(req.params)
        const userRepository = getRepository(User);
        const users = await userRepository.delete(req.params.id);
        return res.send(users);
    };

    updateUser = async(req: Request, res:Response): Promise<Response> => {
        const userRepository = getRepository(User);
        const users = await userRepository;////
        return res.send(users);
    };  

};

export default new UserController();