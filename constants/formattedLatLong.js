const {
  AMERICAN_SAMOA_CODE,
  ANIAKCHAK_CODE,
  CRATER_OF_THE_MOON,
  DENALI_CODE,
  GATES_OF_THE_ARCTIC_CODE,
  GLACIER_BAY_CODE,
  GREAT_SAND_DUNES_CODE,
  KATMAI_CODE,
  LAKE_CLARK_CODE,
  WRANGLER_ELIAS_CODE,
} = require("./parkCodes");

// Latitude/Longitude returned from NPS API is slightly off for American Samoa Nat Park.
const NPSA_LAT_LONG = ["-14.2579", "-170.6860"];
// Override latitude/longitude for national preserves that share a designation but are counted as one unit since NPS returns same lat/long as shared designation
const ANIA_PRESERVE_LAT_LONG = ["56.903496386", "-158.205332512"];
const CRMO_PRESERVE_LAT_LONG = ["43.20940", "-113.51037"];
const DENA_PRESERVE_LAT_LONG = ["63.129887", "-151.197418"];
const GRSA_PRESERVE_LAT_LONG = ["37.8561", "-105.4614"];
const GAAR_PRESERVE_LAT_LONG = ["67.6855", "-153.3241"];
const GLBA_PRESERVE_LAT_LONG = ["58.665806", "-136.900208"];
const KATM_PRESERVE_LAT_LONG = ["58.5862", "-154.9698"];
const LACL_PRESERVE_LAT_LONG = ["60.6014955", "-154.1297516"];
const WRST_PRESERVE_LAT_LONG = ["61.710445", "-142.985687"];

const setLatLong = (latLong) => ({
  latitude: latLong[0],
  longitude: latLong[1],
  latLong: `lat:${latLong[0]}, long:${latLong[1]}`,
});

const LAT_LONG_OVERRIDES = {
  nationalPreserve: {
    [ANIAKCHAK_CODE]: setLatLong(ANIA_PRESERVE_LAT_LONG),
    [CRATER_OF_THE_MOON]: setLatLong(CRMO_PRESERVE_LAT_LONG),
    [DENALI_CODE]: setLatLong(DENA_PRESERVE_LAT_LONG),
    [GATES_OF_THE_ARCTIC_CODE]: setLatLong(GAAR_PRESERVE_LAT_LONG),
    [GLACIER_BAY_CODE]: setLatLong(GLBA_PRESERVE_LAT_LONG),
    [GREAT_SAND_DUNES_CODE]: setLatLong(GRSA_PRESERVE_LAT_LONG),
    [KATMAI_CODE]: setLatLong(KATM_PRESERVE_LAT_LONG),
    [LAKE_CLARK_CODE]: setLatLong(LACL_PRESERVE_LAT_LONG),
    [WRANGLER_ELIAS_CODE]: setLatLong(WRST_PRESERVE_LAT_LONG),
  },
  nationalPark: {
    [AMERICAN_SAMOA_CODE]: setLatLong(NPSA_LAT_LONG),
  },
};

module.exports = {
  LAT_LONG_OVERRIDES,
};
