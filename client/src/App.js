import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import UserCreateComponent from'./components/UserCreate.component';
import UserListComponent from './components/UserList.component';
import UserUpdateComponent from './components/UserUpdate.component';
import UserDeleteComponent from './components/UserDelete.component';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="/" className="navbar-brand">CRUD</a>
                        <div className="navbar-nav mr-auto">

                            <li className="nav-item">
                            <Link to={"/create"} className="nav-link">Create</Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/read"} className="nav-link">Read</Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/update"} className="nav-link">Update</Link>
                            </li>

                            <li className="nav-item">
                            <Link to={"/delete"} className="nav-link">Delete</Link>
                            </li>

                        </div>
                    </nav>

                    <div className="container mt-3">
                        <Switch>
                            <Route exact path = { ["/create"] } component={UserCreateComponent} />
                            <Route exact path = { ["/read"]   } component={UserListComponent} />
                            <Route exact path = { ["/update"] } component={UserUpdateComponent} />
                            <Route exact path = { ["/delete"] } component={UserDeleteComponent} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
