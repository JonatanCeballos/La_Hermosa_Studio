const notesCtrl = {};

//model
const Note = require('../models/Note')

//Ver todas las notas
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
};

//Ver una sola nota
notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

//guardar nota
notesCtrl.createNotes = async (req, res) => {
    const { title, content, author, date } = req.body;
    
    const newNote = new Note({
        title,
        content, 
        author,
        date
    });

    await newNote.save();
    res.json({message: 'Note Saved' });
};

//Actualizar Nota
notesCtrl.updateNotes = async (req, res) => {
    const {title, content, author } = req.body;
    
    /* await Note.findOneAndUpdate(req.params.id,{
        title: title,
        content: content,
        author: author
    }); */
    res.json({message: 'nota actualizada' });
};

//Eliminar Nota
notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'nota eliminada'});
};



module.exports = notesCtrl;