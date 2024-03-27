const kebabCase = require("lodash.kebabcase");
const camelCase = require("lodash.camelcase");
const startCase = require("lodash.startcase");
const { PARK_INFO } = require("../constants/parkData");

const formatParkDesignation = (park) => {
  const designations = Object.keys(PARK_INFO);
  const formattedDesignation = camelCase(park.designation);
  if (designations.includes(formattedDesignation)) {
    park.designation;
  }
  const found = designations.find((parkKey) => {
    if (PARK_INFO[parkKey].codes.includes(park.parkCode)) {
      return startCase(parkKey);
    } else {
      return undefined;
    }
  });
  return found || "Other Designation";
};

module.exports = {
  formatParkDesignation,
};
