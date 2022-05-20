const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },

    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    status: {
        type: String,
        required: [true, "Ativo/Inativo obrigatório"],
        enum: ["A", "I", "E"],
        default: "A"
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('SalaoCliente', salaoCliente)