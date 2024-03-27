const PARK_OVERRIDES = [
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
      { parkCodes: ["foth", "paav"], designation: "National Historic Site" },
      { parkCodes: ["ania", "crmo"], designation: "National Monument" },
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
];

module.exports = {
    PARK_OVERRIDES
};
 