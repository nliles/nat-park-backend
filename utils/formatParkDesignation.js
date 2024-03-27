const kebabCase = require("lodash.kebabcase");
const camelCase = require("lodash.camelcase");
const { PARK_INFO } = require("../constants/parkData");

const formatParkDesignation = (park) => {
  const designations = Object.keys(PARK_INFO);
  const formattedDesignation = camelCase(park.designation);
  if (designations.includes(formattedDesignation)) {
    return park.designation;
  }
  const found = designations.find((parkKey) => {
    if (PARK_INFO[parkKey].codes.includes(park.parkCode)) {
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
