const mongoose = require('mongoose');

const Paciente = mongoose.model('Paciente', {
    nome: String,
    planoSaude: String,
    idade: Number
});

module.exports = Paciente;
