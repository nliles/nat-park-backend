const kebabCase = require("lodash.kebabcase");
const { FORMATTED_PARKS, PARK_OVERRIDES } = require("../constants/parkData");
const { AMERICAN_SAMOA_LAT_LONG } = require("../constants/formattedParks");
const { formatParkDesignation } = require("./formatParkDesignation");

const AMERICAN_SAMOA = 'National Park of American Samoa'

const formatParks = (parks) => {
  let parksArr = parks.slice();
  parksArr = parksArr
    .map((park) => {
      const found = PARK_OVERRIDES.filter((po) =>
        po.parkCodes.includes(park.parkCode),
      );
      return found.length
        ? found.map((foundItem) => ({
            ...park,
            id: foundItem.needsId
              ? kebabCase(`${park.name} ${foundItem.designation}`)
              : park.id,
            designation: foundItem.designation,
            fullName: `${park.name} ${foundItem.designation}`,
          }))
        : [park];
    })
    .reduce((acc, val) => acc.concat(val), [])
    .map((park) => ({
      ...park,
      designation: formatParkDesignation(park),
       // Latitude/Longitude returned from NPS API is slightly off for American Samoa Nat Park.
      latitude: park.name === AMERICAN_SAMOA ? AMERICAN_SAMOA_LAT_LONG[0] : park.latitude,
      longitude: park.name === AMERICAN_SAMOA ? AMERICAN_SAMOA_LAT_LONG[1] : park.longitude,
      latLong: park.name === AMERICAN_SAMOA ? `lat:${AMERICAN_SAMOA_LAT_LONG[0]}, long:${AMERICAN_SAMOA_LAT_LONG[1]}` : park.latLong,
    }))
  return [...parksArr, ...FORMATTED_PARKS];
};

module.exports = {
  formatParks,
};
