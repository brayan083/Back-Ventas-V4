const { response } = require("express");
const axios = require("axios");
require("dotenv").config();


const competencia = async (req, res = response) => {
  const { domain } = req.query;
  const apiKey = process.env.API_SEMRUSH

  try {
    const response = await axios.get("https://api.semrush.com/", {
      params: {
        type: "domain_organic_organic",
        key: apiKey,
        display_limit: 3,
        export_columns: "Dn",
        domain: domain,
        database: "ar",
      },
    });

    // console.log(domain)

    // const response = "Domain\r\ncajadecarton.es\r\nratioform.es\r\nembaleo.es\r\n";

    // Dividir la cadena por saltos de línea y eliminar la primera y última líneas vacías
    const lines = response.data.split('\r\n').filter(Boolean);
    
    // Crear un arreglo de objetos con la estructura esperada, incluyendo la conversión de dominios a URLs
    const domainsJson = lines.slice(1).map(domain => {
      const url = `https://${domain}/`; // Convertir dominio a URL
      return { "domains": domain, "url": url }; // Agregar dominio y URL al objeto
    });

    res.json(domainsJson); // Devuelve los resultados de la API de Semrush
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error al llamar a la API de Semrush" });
  }
};

module.exports = { competencia };
