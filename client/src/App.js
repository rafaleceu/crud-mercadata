import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import userAddComponent from'./components/userAdd.component';
import UserListComponent from './components/userList.component';
import UserUpdate from './components/userUpdate.component';
import UserDelete from './components/userDelete.component';

class App extends Component {
    render() {
        return (
            <Router>
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
                            <Route exact path = { ["/create"] } component={userAddComponent}    />
                            <Route exact path = { ["/read"]   } component={UserListComponent}   />
                            <Route exact path = { ["/update"] } component={UserUpdate} />
                            <Route exact path = { ["/delete"] } component={UserDelete} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
