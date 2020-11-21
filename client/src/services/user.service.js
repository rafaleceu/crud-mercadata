import http from '../http-commom';

const userLogin = (userForm) => http.post('/login', userForm);

const usersList = () => http.get('/api');
const oneUser = (id) => http.get(`/api/${id}`);
const userAdd = (userForm) => http.post(`/api`, userForm);
const userDelete = (id) => http.delete(`/api/${id}`);
const userUpdate = (id, userForm) => http.patch(`/api/${id}`, userForm);

export {
    userLogin,

    usersList,
    oneUser,
    userAdd,
    userDelete,
    userUpdate
};