var express = require('express');
var router = express.Router();
var users = require('../controllers/users')

/* GET users listing. */
router.get('/', users.getUsers)

router.post('/', users.createUser)

router.put('/:id', users.updateUser)

router.delete('/:id', users.deleteUser)

router.post('/login', users.login)

router.get('/verify/:token', users.verifyToken)

module.exports = router;
