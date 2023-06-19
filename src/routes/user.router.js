const { getAll, create, getOne, remove, update, verifyCode, login, logeed, resetPassword, updatePassword } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/login')
    .post(login);

routerUser.route('/me')
    .get(verifyJWT, logeed);

routerUser.route('/reset_password')
    .post(resetPassword)

routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

routerUser.route('/verify/:code')
    .get(verifyCode)

routerUser.route('/reset_password/:code')
    .post(updatePassword)


module.exports = routerUser;