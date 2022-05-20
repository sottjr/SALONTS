const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaborador = new Schema({
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
    dataNascimento: {
        type: {
            String,
            required: true
        },

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
    contaBancaria: {
        titular: {
            type: String,
            required: [true, "Nome da conta obrigatório"]
        },
        cpfCnpj: {
            type: String,
            required: [true, "CPF ou CNPJ obrigatório"]
        },
        banco: {
            type: String,
            required: [true, "Banco obrigatório"]
        },
        tipo: {
            type: String,
            required: [true, "Tipo da conta obrigatório"]
        },
        agencia: {
            type: String,
            required: [true, "Agência obrigatório"]
        },
        numero: {
            type: String,
            required: [true, "Número da conta obrigatório"]
        },
        dv: {
            type: String,
            required: [true, "DV obrigatório"]
        },
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    },
    recipientId: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Colaborador', colaborador)