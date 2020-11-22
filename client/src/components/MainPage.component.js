import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import UserCreateComponent from'./UserCreate.component';
import UsersListComponent from './UsersList.component';
import UserUpdateComponent from './UserUpdate.component';

const MainPage = () => {
    
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/" className="navbar-brand">CRUD</a>
                    <div className="navbar-nav mr-auto">

                        <li className="nav-item">
                        <Link to={"/create"} className="nav-link">Registro</Link>
                        </li>

                        <li className="nav-item">
                        <Link to={"/read"} className="nav-link">Usuários</Link>
                        </li>

                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path = { ["/create"] } component={UserCreateComponent} />
                        <Route exact path = { ["/read"]   } component={UsersListComponent} />
                        <Route exact path = { ["/update/:id([0-9]+)"] } component={UserUpdateComponent} />
                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    );

}

export default MainPage