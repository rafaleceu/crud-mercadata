import React, { useEffect, useState } from 'react';
import {usersList, userDelete} from '../services/user.service';
import {useHistory} from 'react-router-dom';

const UserListComponent = () => {

    const history = useHistory();

    const[users, setUsers] = useState([]);

    const editUser = (user) => history.push(`/update/${user.id}`);

    const getUsers = async() => {

        try {
            const users = await usersList();
            setUsers(users.data);
        } catch (error) {
            console.log(error);
        };

    };
 
    const deleteUser = async(user) => {

        try {
            if(window.confirm(`Você deseja excluir o usuario ${user.name}?`)){
                await userDelete(user.id);
                getUsers();
            };
        } catch (error) {
            console.log(error);
        };

    };

    const createTable = () =>{

        const rows = users.map((user, index) => (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td className="table-light">
                    <span className="mx-3" onClick={ () => editUser(user) } >Editar</span>
                    <span onClick={ () => deleteUser(user) } >Excluir</span>
                </td>
            </tr>
        ));

        return (
            <table className="table  table-striped table-bordered table-hover table-dark m-3">
                <caption>Lista de usuários</caption>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Sobrenome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Criado em</th>
                        <th scope="col">Atualizado em</th>
                        <th className="text-center table-light" scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        );
    };

    useEffect( () => {getUsers()}, []);    

    return (
        <React.Fragment>
            {createTable()}
        </React.Fragment>
    );

};

export default UserListComponent;