import React, {useState, useEffect} from 'react';
import {userUpdate, oneUser} from '../services/user.service';
import {useHistory, useParams} from 'react-router-dom';

const UserUpdateComponent = () => {

    const history = useHistory();

    const { id } = useParams(); //Get URI parms

    const [isSubmited, setisSubmited] = useState(false);

    const[isPreLoaded, setIsPreLoaded] = useState(false);

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        password: '',
        email: ''
    });
  
    const preLoad = async() => {

        if (!isPreLoaded){

            try {
                const user = await oneUser(id);
                setForm(user.data[0])
            } catch (error) {
                console.log(error);
            };

            setIsPreLoaded(true)

        }

    };

    const submitForm = async(event) =>{

        event.preventDefault()

        try {

            setisSubmited(true);
            await userUpdate(id, form);
            setisSubmited(false);
            history.push('/read');

        } catch (error) {
            console.log(error);
        };

    };

    const handlerChange = (event) => {
        event.preventDefault();
        setForm({
             [event.target.name]: event.target.value
        });

        return;

    };

    //***Check which method consume less network and which one is faster***
    useEffect( () => {preLoad()});
    //preLoad();

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

                <button type="submit" className="btn btn-success" onClick={ submitForm }>Atualizar</button>
                
            </form>
        </div>
    );

};
 
export default UserUpdateComponent;