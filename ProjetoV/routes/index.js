const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/temas', async(req, res, next) => {
  
  // Consumindo todos os temas de votações da API da câmara e filtrando por nome
  const { data } = await axios('https://dadosabertos.camara.leg.br/api/v2/referencias/proposicoes/codTema')
    temas = data.dados.map(dados => dados.nome) 
    res.status(200).json({
        temas
        });
});

module.exports = router;