const situationRoute = require('../controller/situationController.js')

const routerSituation = require('express').Router()

routerSituation.post('/addSituation',situationRoute.addSituation)

routerSituation.get('/getAllSituations', situationRoute.getAllSituations)


module.exports = routerSituation