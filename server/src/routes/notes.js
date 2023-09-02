const { Router } = require('express');
const { getNotes, createNotes, getNote, updateNotes, deleteNotes } = require('../controllers/notes.controllers');

const router = Router();

router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getNote)
    .post(updateNotes)
    .delete(deleteNotes)

module.exports = router;