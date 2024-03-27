// Sequoia and Kings Canyon Nat parks are managed together. Only one unit is returned by the NPS API
const SEQUOIA_KINGS_BASE = {
    parkCode: "seki",
    states: "CA",
    url: "https://www.nps.gov/seki/index.htm",
    designation: "National Park",
  };
  
  const SEQUOIA_NAT_PARK = {
    ...SEQUOIA_KINGS_BASE,
    id: "7E5A693C-2F63-44FD-B791-31FC8B8B6285",
    images: [
      {
        altText:
          "A guardrail encircles people along a narrow walkway with wide views",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7A2E1B-1DD8-B71B-0B4D563CB47FA60F.jpg",
      },
    ],
    name: "Sequoia",
    fullName: "Sequoia National Park",
    latitude: "36.485625",
    longitude: "-118.466728",
  };
  
  const KINGS_CANYON_NAT_PARK = {
    ...SEQUOIA_KINGS_BASE,
    id: "kings-canyon-national-park",
    images: [
      {
        altText: "A deep canyon with a forested floor and steep granite cliffs",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7A250B-1DD8-B71B-0BCF61A89A8B2970.jpg",
      },
    ],
    name: "Kings Canyon",
    fullName: "Kings Canyon National Park",
    latitude: "36.739991",
    longitude: "-118.963389",
  };
  
  // The following parks are not returned by the NPS API
  const JDR_MEMORIAL_PARKWAY = {
    id: "jdr-memorial-parkway",
    images: [
      {
        altText: "Winter sunrise on snow-covered Teton Range",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7FA7B7-1DD8-B71B-0B7B45B73D1C90C3.jpg",
      },
    ],
    parkCode: "",
    name: "John D. Rockefeller, Jr. Memorial Parkway",
    fullName: "John D. Rockefeller, Jr. Memorial Parkway",
    states: "WY",
    latitude: "43.81853565",
    longitude: "-110.7054666",
    designation: "National Parkway",
    url: "https://www.nps.gov/grte/planyourvisit/jodr.htm",
  };
  
  const LAKE_ROSS_NRA = {
    id: "lake-ross-nra",
    images: [
      {
        altText: "Tents set up in a wooded area.",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7A5B0D-1DD8-B71B-0B1104A95B7A2026.jpg",
      },
    ],
    parkCode: "",
    name: "Ross Lake",
    fullName: "Ross Lake National Recreation Area",
    states: "WA",
    latitude: "48.868113",
    longitude: "-121.06395",
    designation: "National Recreation Area",
    url: "https://www.nps.gov/noca/planyourvisit/visitorcenters.htm",
  };
  
  const LAKE_CHELAN_NRA = {
    id: "lake-chelan-nra",
    images: [
      {
        altText: "boats on the water with mountains and trees surrounding",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg",
      },
    ],
    parkCode: "",
    name: "Lake Chelan",
    fullName: "Lake Chelan National Recreation Area",
    states: "WA",
    latitude: "48.026974",
    longitude: "-120.337732",
    designation: "National Recreation Area",
    url: "https://www.nps.gov/noca/planyourvisit/visitorcenters.htm",
  };
  
  const FORT_CAROLINE_NAT_MEMORIAL = {
    id: "fort-caroline-nat-memorial",
    images: [
      {
        altText: "Fort gate",
        url: "https://www.nps.gov/common/uploads/structured_data/3C7B5019-1DD8-B71B-0B8694BFD33E8B3C.jpg",
      },
    ],
    parkCode: "",
    name: "Fort Caroline National Memorial",
    fullName: "Fort Caroline National Memorial",
    states: "FL",
    latitude: "30.47251894",
    longitude: "-81.49950104",
    designation: "National Memorial",
    url: "https://www.nps.gov/timu/learn/historyculture/foca.htm",
  };
  
  const HOHOKAM_NAT_MONUMENT = {
    id: "hohokam-nat-monument",
    images: [],
    parkCode: "",
    name: "Hohokam Pima National Monument",
    fullName: "Hohokam Pima National Monument",
    states: "AZ",
    latitude: "32.192890",
    longitude: "-112.925960",
    designation: "National Monument",
    url: "https://www.nationalparks.org/explore/parks/hohokam-pima-national-monument",
  };

  const FORMATTED_PARKS = [
    SEQUOIA_NAT_PARK,
    KINGS_CANYON_NAT_PARK,
    JDR_MEMORIAL_PARKWAY,
    LAKE_ROSS_NRA,
    LAKE_CHELAN_NRA,
    FORT_CAROLINE_NAT_MEMORIAL,
    HOHOKAM_NAT_MONUMENT,
  ];

  module.exports = {
    FORMATTED_PARKS
  };