const kebabCase = require("lodash.kebabcase");
const { FORMATTED_PARKS, PARK_OVERRIDES } = require("../constants/parkData");
const { formatParkDesignation } = require("./formatParkDesignation");

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
    }));
  return [...parksArr, ...FORMATTED_PARKS];
};

module.exports = {
  formatParks,
};
