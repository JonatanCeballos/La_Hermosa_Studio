const { Router } = require('express');
const { createUsers, getUsers, deleteUsers } = require('../controllers/users.controllers');

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUsers)

router.route('/:id')
        .delete(deleteUsers)

module.exports = router;
