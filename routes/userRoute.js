const userRoute = require('../controller/userController.js')

const routerUser = require('express').Router()

routerUser.get('/addUser',userRoute.addUser)
routerUser.post('/checkUser', userRoute.loginUser)


module.exports = routerUser