import React, { useEffect, useState } from 'react';
import {listUsers, deleteUsers} from '../services/user.service';
import {useHistory} from 'react-router-dom';

const UserAdd = () => {

    return (
        <React.Fragment>
        <div>
            <form className="my-2 mx-5 col-md-5" onsubmit="op.add(event)">

                <div className="form-group">
                  <label for="i-product">Nome</label>
                  <input type="text" className="form-control" aria-describedby="formName" placeholder="Digite seu nome"/>
                </div>

                <div className="form-group">
                    <label for="i-quantity">Sobrenome</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Digite seu sobrenome"/>
                </div>

                <div className="form-group">
                    <label for="i-value">Senha</label>
                    <input type="password" className="form-control" aria-describedby="formPassword" placeholder="Digite sua senha"/>
                </div>

                <div className="form-group">
                    <label for="i-date">E-mail</label>
                    <input type="email" className="form-control" aria-describedby="formEmail" placeholder="Digite seu e-mail"/>
                </div>

                <button type="submit" className="btn btn-primary" id="btn-add">Adicionar</button>
                <button type="button" className="btn btn-danger mx-2" id="btn-clear">Limpar</button>
            </form>
        </div>
        </React.Fragment>
    )
};

export default UserAdd;