const axios = require("axios");
const {Country} = require('./src/db.js');

const loadDB = async () => {
    const dbCountries = Country.findAll();
    if(!dbCountries.length) {
        const urlApi = await axios.get("http://localhost:5000/countries");
        const infApi = await urlApi.data.map((pais)=> {
            return {
                id: pais.cca3,
                name: pais.name.common,
                image: pais.flag.svg,
                continent: pais.continents[0],
                capital: pais.capital ? pais.capital[0]: "Capital",
                subregion: pais.subregion ? pais.subregion[0]: "Subregion",
                area: pais.area,
                population: pais.population
            };
        }); 
    }
    for (let i = 0; i < infApi.length; i++) {
        await Country.findOrCreate({
            where: {name: infApi[i].name},
            defaults: infApi[i]
        });
    }
};

module.exports = loadDB;