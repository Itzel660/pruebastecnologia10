const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
}); 

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;