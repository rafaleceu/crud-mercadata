import React, {useState } from 'react';
import {userAdd} from '../services/user.service';
import {useHistory} from 'react-router-dom';

const UserAddComponent = () => {

    const history = useHistory();
    const [isSubmited, setisSubmited] = useState(false);
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        password: '',
        email: ''
    });

    const submitForm = async(event) =>{

        event.preventDefault()

        try {

            setisSubmited(true);
            await userAdd(form);
            setisSubmited(false);
            history.push('/read');

        } catch (error) {
            console.log(error);
        };

    };

    const handlerChange = (event) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        return;

    };

    return(
        <div>
            <form className="my-2 mx-5 col-md-5">

                <div className="form-group">
                <label>Nome</label>
                <input type="text" className="form-control" aria-describedby="formName" placeholder="Digite seu nome" name="name" value={form.name} disabled={isSubmited} onChange={ handlerChange } />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Digite seu sobrenome" name="lastName" value={form.lastName} disabled={isSubmited} onChange={ handlerChange }  />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" aria-describedby="formPassword" placeholder="Digite sua senha" name="password" value={form.password} disabled={isSubmited} onChange={ handlerChange }  />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email"className="form-control" aria-describedby="formEmail" placeholder="Digite seu e-mail" name="email" value={form.email} disabled={isSubmited} onChange={ handlerChange }  />
                </div>

                <button type="submit" className="btn btn-primary" onClick={ submitForm }>Adicionar</button>
                <button type="button" className="btn btn-danger mx-2">Limpar</button>
                
            </form>
        </div>
    );

};
 
export default UserAddComponent;