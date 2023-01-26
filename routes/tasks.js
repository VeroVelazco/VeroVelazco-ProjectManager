const express = require('express');
const router = express.Router();
const { list, store, changeState, detail, update, remove, } = require('../controllers/tasksController')
// api/taks
router
    .route('/')
        .get(list)
        .post(store)
router
    .route('/:id')
        .get(detail)
        .put(update)
        .delete(remove)
router
    .post('/change-state/:id', changeState)

module.exports = router;