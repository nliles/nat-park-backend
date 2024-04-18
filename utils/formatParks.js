const kebabCase = require("lodash.kebabcase");
const camelCase = require("lodash.camelcase");
const { FORMATTED_PARKS, PARK_OVERRIDES } = require("../constants/parkData");
const { LAT_LONG_OVERRIDES } = require("../constants/formattedLatLong");
const { formatParkDesignation } = require("./formatParkDesignation");

const getLatLong = (designation, park) => {
  const latLongOverride =
    LAT_LONG_OVERRIDES[camelCase(designation)]?.[park.parkCode];
  return {
    latitude: latLongOverride ? latLongOverride.latitude : park.latitude,
    longitude: latLongOverride ? latLongOverride.longitude : park.longitude,
    latLong: latLongOverride ? latLongOverride.latLong : park.latLong,
  };
};

const formatParks = (parks) => {
  let parksArr = parks.slice();
  parksArr = parksArr
    .map((park) => {
      const found = PARK_OVERRIDES.filter((po) =>
        po.parkCodes.includes(park.parkCode),
      );
      const designation = formatParkDesignation(park);
      return found.length
        ? found.map((foundItem) => ({
            ...park,
            id: foundItem.needsId
              ? kebabCase(`${park.name} ${foundItem.designation}`)
              : park.id,
            designation: foundItem.designation,
            fullName: `${park.name} ${foundItem.designation}`,
            ...getLatLong(foundItem.designation, park),
          }))
        : [
            {
              ...park,
              designation: formatParkDesignation(park),
              ...getLatLong(formatParkDesignation(park), park),
            },
          ];
    })
    .reduce((acc, val) => acc.concat(val), []);
  return [...parksArr, ...FORMATTED_PARKS];
};

module.exports = {
  formatParks,
};
