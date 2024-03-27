const axios = require("axios");
const { NPS_URL } = require("./constants/api");
const { ALL_CODES } = require("./constants/parks");
const { formatParks } = require("./utils/formatParks");
const { sortParks } = require("./utils/sortParks");

exports.getNPSParks = async (req, res, next) => {
  const API_KEY = process.env.NPS_API_KEY;
  const URL = `${NPS_URL}?parkCode=${ALL_CODES}}&limit=496&sort=fullName&api_key=${API_KEY}`;
  const response = await axios.get(URL);
  const data = sortParks(formatParks(response.data.data));
  res.json(data);
};
