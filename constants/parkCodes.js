// https://www.nps.gov/aboutus/national-park-system.htm

const AMERICAN_SAMOA_CODE = "npsa";
const ANIAKCHAK_CODE = "ania";
const CRATER_OF_THE_MOON = "crmo";
const DENALI_CODE = "dena";
const GATES_OF_THE_ARCTIC_CODE = "gaar";
const GLACIER_BAY_CODE = "glba";
const GREAT_SAND_DUNES_CODE = "grsa";
const KATMAI_CODE = "katm";
const LAKE_CLARK_CODE = "lacl";
const WRANGLER_ELIAS_CODE = "wrst";

const NAT_BATTLEFIELD_CODES = [
  "anti",
  "biho",
  "cowp",
  "fodo",
  "fone",
  "mono",
  "mocr",
  "pete",
  "stri",
  "tupe",
  "wicr",
];

const NAT_BATTLEFIELD_PARK_CODES = ["kemo", "mana", "rich", "rira"];

const NAT_BATTLEFIELD_SITE_CODES = ["brcr"];

const NAT_MILITARY_PARK_CODES = [
  "chch",
  "frsp",
  "gett",
  "guco",
  "hobe",
  "kimo",
  "peri",
  "shil",
  "vick",
];

const NAT_PARK_CODES = [
  "acad",
  "arch",
  "badl",
  "bibe",
  "bisc",
  "blca",
  "brca",
  "cany",
  "care",
  "cave",
  "chis",
  "cong",
  "crla",
  "cuva",
  DENALI_CODE,
  "deva",
  "drto",
  "ever",
  "jeff",
  GATES_OF_THE_ARCTIC_CODE,
  "glac",
  GLACIER_BAY_CODE,
  "grca",
  "grte",
  "grba",
  GREAT_SAND_DUNES_CODE,
  "grsm",
  "gumo",
  "hale",
  "havo",
  "hosp",
  "indu",
  "isro",
  "jotr",
  KATMAI_CODE,
  "kefj",
  "kova",
  LAKE_CLARK_CODE,
  "lavo",
  "maca",
  "meve",
  "mora",
  AMERICAN_SAMOA_CODE,
  "neri",
  "noca",
  "olym",
  "pefo",
  "pinn",
  "redw",
  "romo",
  "sagu",
  "shen",
  "thro",
  "viis",
  "voya",
  "whsa",
  "wica",
  WRANGLER_ELIAS_CODE,
  "yell",
  "yose",
  "zion",
];

const NAT_HISTORICAL_PARK_CODES = [
  "abli",
  "adam",
  "apco",
  "blrv",
  "brvb",
  "bost",
  "cari",
  "cebe",
  "chcu",
  "choh",
  "colo",
  "cuga",
  "daav",
  "frst",
  "fosu",
  "gero",
  "gosp",
  "hafe",
  "hart",
  "hatu",
  "home",
  "hocu",
  "inde",
  "jela",
  "jica",
  "kala",
  "kaho",
  "kewe",
  "klgo",
  "lewi",
  "lowe",
  "lyjo",
  "mapr",
  "mabi",
  "malu",
  "mima",
  "morr",
  "natc",
  "nebe",
  "jazz",
  "nepe",
  "ocmu",
  "paal",
  "pagr",
  "peco",
  "puho",
  "pull",
  "reer",
  "rori",
  "saga",
  "saan",
  "safr",
  "sajh",
  "sara",
  "sari",
  "sitk",
  "stge",
  "edis",
  "tuma",
  "vafo",
  "wapa",
  "wefa",
  "wori",
];

const NAT_HISTORIC_SITE_CODES = [
  "alpo",
  "amch",
  "ande",
  "anjo",
  "beol",
  "boaf",
  "carl",
  "cawo",
  "chpi",
  "chri",
  "clba",
  "edal",
  "eise",
  "elro",
  "euon",
  "fila",
  "fobo",
  "foda",
  "fola",
  "fols",
  "foth",
  "fopo",
  "fora",
  "fosc",
  "fosm",
  "fous",
  "fova",
  "frdo",
  "frla",
  "frhi",
  "grko",
  "hamp",
  "hstr",
  "heho",
  "hofr",
  "hono",
  "hofu",
  "hutr",
  "jaga",
  "jofi",
  "jomu",
  "knri",
  "liho",
  "chsc",
  "long",
  "mawa",
  "manz",
  "mava",
  "mamc",
  "miin",
  "mimi",
  "neph",
  "nico",
  "nisi",
  "wicl",
  "paav",
  "puhe",
  "sahi",
  "sapa",
  "sama",
  "saju",
  "sand",
  "sair",
  "spar",
  "stea",
  "thrb",
  "thri",
  "thst",
  "tuai",
  "tuin",
  "ulsg",
  "vama",
  "waba",
  "whmi",
  "wiho",
];

const NAT_MEMORIAL_CODES = [
  "arho",
  "arpo",
  "cham",
  "coro",
  "ddem",
  "deso",
  "feha",
  "flni",
  "frde",
  "gegr",
  "hagr",
  "jofl",
  "kowa",
  "linc",
  "libo",
  "lyba",
  "mlkm",
  "moru",
  "pevi",
  "poch",
  "this",
  "thje",
  "rowi",
  "valr",
  "thko",
  "vive",
  "wrbr",
  "wwii",
  "wwim",
  "wamo",
];

const NAT_MONUMENT_CODES = [
  "afbg",
  "agfo",
  "alfl",
  ANIAKCHAK_CODE,
  "azru",
  "band",
  "bepa",
  "bicr",
  "bowa",
  "buis",
  "cabr",
  "cane",
  "cach",
  "cakr",
  "cavo",
  "cagr",
  "casa",
  "cacl",
  "camo",
  "cebr",
  "chyo",
  "chir",
  "colm",
  "cech",
  CRATER_OF_THE_MOON,
  "depo",
  "deto",
  "dino",
  "efmo",
  "elma",
  "elmo",
  "flfo",
  "fofr",
  "foma",
  "fomr",
  "fopu",
  "fost",
  "foun",
  "fobu",
  "frri",
  "fomc",
  "orca",
  "gewa",
  "gwca",
  "gicl",
  "gois",
  "grpo",
  "hafo",
  "hove",
  "jeca",
  "joda",
  "kaww",
  "labe",
  "libi",
  "memy",
  "misp",
  "moca",
  "muwo",
  "nabr",
  "nava",
  "orpi",
  "petr",
  "pisp",
  "pipe",
  "popo",
  "rabr",
  "ruca",
  "sapu",
  "scbl",
  "stli",
  "ston",
  "sucr",
  "tica",
  "till",
  "tont",
  "tule",
  "tusk",
  "tuzi",
  "vicr",
  "waco",
  "waca",
  "wupa",
  "yuho",
];

const NAT_SEASHORE_CODES = [
  "asis",
  "cana",
  "caco",
  "caha",
  "calo",
  "cuis",
  "fiis",
  "guis",
  "pais",
  "pore",
];

const NAT_SCENIC_TRAIL_CODES = ["appa", "iatr", "natt", "neen", "noco", "pohe"];

const NAT_RIVER_CODES = ["biso", "buff", "miss", "ozar"];

const NAT_LAKESHORE_CODES = ["apis", "piro", "slbe"];

const NAT_REC_AREAS_CODES = [
  "amis",
  "bica",
  "boha",
  "chat",
  "chic",
  "cure",
  "dewa",
  "gate",
  "gari",
  "glca",
  "goga",
  "lake",
  "lamr",
  "laro",
  "samo",
  "whis",
];

const NAT_RESERVES_CODES = ["ciro", "ebla"];

const NAT_PARKWAY_CODES = ["blri", "gwmp", "natr"];

const NAT_PRESERVES_CODES = [
  ANIAKCHAK_CODE,
  "bela",
  "bicy",
  "bith",
  CRATER_OF_THE_MOON,
  DENALI_CODE,
  GATES_OF_THE_ARCTIC_CODE,
  "glac",
  GREAT_SAND_DUNES_CODE,
  KATMAI_CODE,
  LAKE_CLARK_CODE,
  "liri",
  "moja",
  "noat",
  "tapr",
  "timu",
  "vall",
  WRANGLER_ELIAS_CODE,
  "yuch",
];

const NAT_WILD_SCENIC_RIVER_CODES = [
  "alag",
  "blue",
  "greg",
  "lode",
  "mnrr",
  "niob",
  "obed",
  "rigr",
  "sacn",
  "upde",
];

const OTHER_DESIGNATION_CODES = [
  "cato",
  "coga",
  "fowa",
  "gree",
  "nace",
  "nama",
  "pisc",
  "prwi",
  "rocr",
  "whho",
  "wotr",
];

const INTERNATIONAL_HISTORIC_SITE = ["sacr"];

module.exports = {
  AMERICAN_SAMOA_CODE,
  ANIAKCHAK_CODE,
  CRATER_OF_THE_MOON,
  DENALI_CODE,
  GATES_OF_THE_ARCTIC_CODE,
  GLACIER_BAY_CODE,
  GREAT_SAND_DUNES_CODE,
  KATMAI_CODE,
  LAKE_CLARK_CODE,
  WRANGLER_ELIAS_CODE,
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
};
