const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true
    },
    titulo: {
        type: String,
        required: [true, "Título é obrigatório"]
    },
    preco: {
        type: Number,
        required: [true, "Preço é obrigatório"]
    },
    duracao: {
        type: Number,
        default: 30,
        required: true
    },
    comissao: {
        type: String,
        required: [true, "Comissão é obrigatório"]
    },
    recorrencia: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
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

module.exports = mongoose.model('Servico', servico)