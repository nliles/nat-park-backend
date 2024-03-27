const kebabCase = require("lodash.kebabcase");
const { PARK_INFO } = require("../constants/parkData");

const formatParkDesignation = (park) => {
  const designations = Object.keys(PARK_INFO);
  const formattedDesignation = camelCase(park.designation);
  if (designations.includes(formattedDesignation)) {
    return park.designation;
  }
  const found = Object.values(ParkDesignation).find((parkKey) => {
    if (PARK_INFO[parkKey].codes.includes(parkCode)) {
      return parkKey;
    } else {
      return undefined;
    }
  });
  return found || "otherDesignation";
};

module.exports = {
  formatParkDesignation,
};
