const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: [true, "Nome é obrigatório"]
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "E-mail é obrigatório"]
    },
    senha: {
        type: String,
        required: [true, "Senha é obrigatório"]
    },
    foto: {
        type: String,
        required: true
    },
    sexo: {
        String,
        enum: ["M", "F"],
        required: true
    },
    status: {
        type: String,
        required: [true, "Ativo/Inativo obrigatório"],
        enum: ["A", "I"],
        default: "A"
    },


    documento: {
        tipo: {
            type: String,
            enum: ["individual", "corporation"],
            required: true
        },
        numero: {
            type: String,
            required: true
        }
    },
    endereco: {
        cidade: String,
        pais: String,
        numero: Number,
        cep: String,
        uf: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cliente', cliente)