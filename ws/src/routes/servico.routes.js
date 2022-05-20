const express = require('express');
const router = express.Router();
const Salao = require('../models/salao');
const Servico = require('../models/servicos');


router.post("/", async (req, res) => {
    try {
   

    } catch (err) {
        res.json({ error: true, message: err.message });
    };

});

module.exports = router;