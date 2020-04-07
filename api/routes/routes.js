const express = require('express')
const router = express.Router();
const pessoaController = require('../controllers/pessoaController')
router.get('/',(req, res) => {
	res.send("Bem vindo a API CRUD_IRANCHO");
});
/** Create */
router.post('/pessoas', async (req, res) => {
	await pessoaController.store(req, res);
})
/** List */
router.get('/pessoas', async (req, res) => {
	await pessoaController.get(req, res);
})
/** get by id */
router.get('/pessoas/:id', async (req, res) => {
	await pessoaController.get(req, res);
})
/** update */
router.put('/pessoas/:id', async (req, res) => {
	await pessoaController.update(req, res);
})
/** delete */
router.delete('/pessoas/:id', async (req, res) => {
	await pessoaController.delete(req, res);
})

module.exports = router;