const express = require('express')

const {
    users, 
    login,
    registration
} = require('../controllers/users')

const { 
    regAuthentication,
    loginAuthentication
} = require('../middlewares/authentication')

const router = express.Router()


router.get('/users', loginAuthentication, users)


router.post('/registration', regAuthentication , registration)

module.exports = router;