import http from '../http-commom';

const usersList = () => http.get('/api');
const oneUser = (id) => http.get(`/api/${id}`);
const userAdd = (userForm) => http.post(`/api`, userForm);
const userDelete = (id) => http.delete(`/api/${id}`);
const userUpdate = (id) => http.patch(`/api/${id}`);

export {
    usersList,
    oneUser,
    userAdd,
    userDelete,
    userUpdate
};