const express = require('express');
const router = express.Router();

const { getAllParts, addPart, deletePart, updatePart } = require('../controllers/partController');
router.get('/', getAllParts);
router.post('/', addPart);
router.delete('/:id', deletePart);
router.put('/:id', updatePart);

module.exports = router;