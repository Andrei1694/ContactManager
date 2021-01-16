const { create, findAll, findById, update, deleteById } = require('../controllers/contact.controller');

const router = require('express').Router();

router.post('/', create)
router.get('/findAll', findAll)
router.get('/findById/:id', findById)
router.put('/:id', update)
router.delete('/:id', deleteById)
module.exports = router