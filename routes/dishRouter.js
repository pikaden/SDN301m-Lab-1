const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

const factorX = 'dish';

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send all the ${factorX}es to you!`);
    })
    .post((req, res, next) => {
        res.end(`Will add the ${factorX}: ` + req.body.name + ' with details: '
            + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /${factorX}es`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting all ${factorX}es`);
    })

dishRouter.route(`/:${factorX}Id`)
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end(`Get the ${factorX} ` + req.params.dishId + '!')
    })
    .post((req, res, next) => {
        res.end('POST method not supported');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end(`Will update the ${factorX}: ` + req.params.dishId
            + ' with name ' + req.body.name 
            + ', with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end(`Deleted ${factorX} ` + req.params.dishId + '!');
    })

module.exports = dishRouter;