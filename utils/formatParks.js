const kebabCase = require('lodash.kebabcase');
const { FORMATTED_PARKS } = require("../constants/formattedParks");
const { PARK_OVERRIDES } = require("../constants/parkInfo");

const formatParks = (parks) => {
  let parksArr = parks.slice();
  parksArr = parksArr
    .map((park) => {
      const found = PARK_OVERRIDES.filter((po) =>
        po.parkCodes.includes(park.parkCode)
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
    .reduce((acc, val) => acc.concat(val), []);
  return [...parksArr, ...FORMATTED_PARKS];
};

module.exports = {
    formatParks,
  };