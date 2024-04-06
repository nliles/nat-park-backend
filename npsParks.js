const axios = require("axios");
const camelCase = require("lodash.camelcase");
const { NPS_URL } = require("./constants/api");
const { ALL_CODES } = require("./constants/parkData");
const { formatParks } = require("./utils/formatParks");
const { sortParks } = require("./utils/sortParks");

exports.getNPSParks = async (req, res, next) => {
  const API_KEY = process.env.NPS_API_KEY;
  const URL = `${NPS_URL}?parkCode=${ALL_CODES}}&limit=496&sort=fullName&api_key=${API_KEY}`;
  const response = await axios.get(URL);
  const parks = sortParks(formatParks(response.data.data));
  const formattedParks = parks.reduce((acc, curr) => {
    const formattedDesignation = camelCase(curr.designation)
    if (acc[formattedDesignation]) {
      acc[formattedDesignation].push(curr)
    } else {
      acc[formattedDesignation] = [curr]
    }
    return acc;
  }, {})
  res.json({ parks: formattedParks, total: parks.length });
};
