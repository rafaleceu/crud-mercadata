import React, {useState, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

import './App.css';
import {userLogin} from './services/user.service';
import MainPage from './components/MainPage.component.js'
import UserCreate from './components/UserCreate.component.js'

const App = () => {

    const history = useHistory();

    const [isSubmited, setIsSubmited] = useState(false);

    //const [isLogged, setIsLogged] = useState(false)

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const handlerChange = (event) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        return;

    };

    const submitForm = async(event) => {
        
        event.preventDefault()

        try {

            setIsSubmited(true);
            let allowLogin = await userLogin(form);
            setIsSubmited(false);
            
            if (allowLogin.data === true){
 
                window.location.assign('/main');
            }else{
                alert('Login ou senha incorretos!!!')
                clearForm()
            }

        } catch (error) {
            console.log(error);
        };

    };

    const registerUser = () => {
        window.location.assign('/create');
    }
    const clearForm = (event) => {

        event.preventDefault();

        setForm({        
            name: '',
            password: ''
        });

    }
    

    return (
        <BrowserRouter>
            <div id='loginpage'>

                <div className="d-flex justify-content-center my-5 mx-5">

                    <form className="my-5 mx-5 col-md-4">

                    <div className="form-group">
                    <label>Usuário</label>
                    <input type="text" className="form-control" aria-describedby="formName" placeholder="Digite seu nome" name="name" value={form.name} disabled={isSubmited} onChange={ handlerChange } />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" aria-describedby="formPassword" placeholder="Digite sua senha" name="password" value={form.password} disabled={isSubmited} onChange={ handlerChange } />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={ submitForm } >Entrar</button>
                    <button type="button" className="btn btn-success mx-2"  onClick={ registerUser } >Registrar-se</button>

                    </form>

                </div>

                <div>
                    <Switch>
                        <Route exact path = { ["/main"] } component={ MainPage } />
                        <Route exact path = { ["/create"] } component={ UserCreate } />
                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    );

}

export default App;