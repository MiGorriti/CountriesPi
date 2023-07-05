const { Router } = require("express");
const axios = require("axios");
const router = Router();


router.get("/Paises", (req, res)=> {
    res.status(200).send("crear pais")
});

router.get('/paises', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:5000');
      const paises = response.data.map((pais) => ({
        nombre: pais.name.common,
        capital: pais.capital[0]
      }));
      res.json(paises);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los países' });
    }
  });
module.exports = router;
