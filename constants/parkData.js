const {
  NAT_BATTLEFIELD_CODES,
  NAT_BATTLEFIELD_PARK_CODES,
  NAT_BATTLEFIELD_SITE_CODES,
  NAT_MILITARY_PARK_CODES,
  NAT_PARK_CODES,
  NAT_HISTORICAL_PARK_CODES,
  NAT_HISTORIC_SITE_CODES,
  NAT_MEMORIAL_CODES,
  NAT_MONUMENT_CODES,
  NAT_SEASHORE_CODES,
  NAT_SCENIC_TRAIL_CODES,
  NAT_RIVER_CODES,
  NAT_LAKESHORE_CODES,
  NAT_REC_AREAS_CODES,
  NAT_RESERVES_CODES,
  NAT_PARKWAY_CODES,
  NAT_PRESERVES_CODES,
  NAT_WILD_SCENIC_RIVER_CODES,
  OTHER_DESIGNATION_CODES,
  INTERNATIONAL_HISTORIC_SITE,
} = require("./parks");
const {
  FORT_CAROLINE_NAT_MEMORIAL,
  KINGS_CANYON_NAT_PARK,
  SEQUOIA_NAT_PARK,
  LAKE_CHELAN_NRA,
  LAKE_ROSS_NRA,
  JDR_MEMORIAL_PARKWAY,
  HOHOKAM_NAT_MONUMENT,
} = require("./formattedParks");

const PARK_INFO = {
  nationalPark: {
    codes: NAT_PARK_CODES,
    formattedParks: [KINGS_CANYON_NAT_PARK, SEQUOIA_NAT_PARK],
    parkOverrides: [
      {
        parkCodes: [
          "dena",
          "gaar",
          "glac",
          "glba",
          "grsa",
          "katm",
          "lacl",
          "redw",
          "wrst",
        ],
        designation: "National Park",
      },
    ],
  },
  nationalBattlefield: {
    codes: NAT_BATTLEFIELD_CODES,
  },
  nationalBattlefieldPark: {
    codes: NAT_BATTLEFIELD_PARK_CODES,
  },
  nationalBattlefieldSite: {
    codes: NAT_BATTLEFIELD_SITE_CODES,
  },
  nationalMilitaryPark: {
    codes: NAT_MILITARY_PARK_CODES,
  },
  nationalHistoricalPark: {
    codes: NAT_HISTORICAL_PARK_CODES,
  },
  nationalHistoricSite: {
    codes: NAT_HISTORIC_SITE_CODES,
    parkOverrides: [
      { parkCodes: ["foth", "paav"], designation: "National Historic Site" },
    ],
  },
  nationalLakeshore: {
    codes: NAT_LAKESHORE_CODES,
  },
  nationalMemorial: {
    codes: NAT_MEMORIAL_CODES,
    formattedParks: [FORT_CAROLINE_NAT_MEMORIAL],
  },
  nationalMonument: {
    codes: NAT_MONUMENT_CODES,
    formattedParks: [HOHOKAM_NAT_MONUMENT],
    parkOverrides: [
      { parkCodes: ["ania", "crmo"], designation: "National Monument" },
    ],
  },
  nationalRecreationArea: {
    codes: NAT_REC_AREAS_CODES,
    formattedParks: [LAKE_CHELAN_NRA, LAKE_ROSS_NRA],
  },
  nationalRiver: {
    codes: NAT_RIVER_CODES,
  },
  nationalParkway: {
    codes: NAT_PARKWAY_CODES,
    formattedParks: [JDR_MEMORIAL_PARKWAY],
  },
  nationalReserve: {
    codes: NAT_RESERVES_CODES,
  },
  nationalSeashore: {
    codes: NAT_SEASHORE_CODES,
  },
  nationalScenicTrail: {
    codes: NAT_SCENIC_TRAIL_CODES,
  },
  nationalPreserve: {
    codes: NAT_PRESERVES_CODES,
    parkOverrides: [
      {
        parkCodes: [
          "ania",
          "crmo",
          "dena",
          "gaar",
          "glba",
          "grsa",
          "katm",
          "lacl",
          "wrst",
        ],
        designation: "National Preserve",
        needsId: true,
      },
    ],
  },
  nationalWildAndScenicRiver: {
    codes: NAT_WILD_SCENIC_RIVER_CODES,
  },
  otherDesignation: {
    codes: OTHER_DESIGNATION_CODES,
  },
  internationalHistoricSite: {
    codes: INTERNATIONAL_HISTORIC_SITE,
  },
};

const ALL_CODES = [
  ...Object.entries(PARK_INFO).map((obj) => obj[1].codes),
].flat(1);

const FORMATTED_PARKS = [
  ...Object.entries(PARK_INFO).map((obj) => obj[1].formattedParks || []),
].flat(1);

const PARK_OVERRIDES = [
  ...Object.entries(PARK_INFO).map((obj) => obj[1].parkOverrides || []),
].flat(1);

module.exports = {
  ALL_CODES,
  FORMATTED_PARKS,
  PARK_OVERRIDES,
  PARK_INFO,
};
