import React, { useEffect, useState } from 'react';
import {createUsers} from '../services/user.service';
import {useHistory} from 'react-router-dom';

class NameForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            password: '',
            email: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

      }
  
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

    }

    render() {
        return(
            <div>
                <form className="my-2 mx-5 col-md-5" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" aria-describedby="formName" placeholder="Digite seu nome" name="name" onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Sobrenome</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Digite seu sobrenome" name="lastName" onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password" className="form-control" aria-describedby="formPassword" placeholder="Digite sua senha" name="password" onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" aria-describedby="formEmail" placeholder="Digite seu e-mail" name="email" onChange={this.handleInputChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary" value="Enviar">Adicionar</button>
                    <button type="button" className="btn btn-danger mx-2">Limpar</button>
                </form>
            </div>
        );
    };
};

export default NameForm;