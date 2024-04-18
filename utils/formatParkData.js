const camelCase = require("lodash.camelcase");

const formatParkData = (parks) =>
  parks.reduce((acc, curr) => {
    const formattedDesignation = camelCase(curr.designation);
    if (acc[formattedDesignation]) {
      acc[formattedDesignation].push(curr);
    } else {
      acc[formattedDesignation] = [curr];
    }
    return acc;
  }, {});

module.exports = {
  formatParkData,
};
