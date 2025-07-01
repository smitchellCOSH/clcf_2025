/* 

Javascript database containing the plants used in the Pocket Forest Plant Calculator, as well as
other relevant constants.

Constants that specify plant information, including:
- Plant type: Canopy, Tree, Subtree, and Shrub.
- Sun type: Level of sunlight that a given plant tolerates.
- Soil type: Type(s) of soil that a given plant tolerates.
- Soil drainage: Level of soil drainage that a given plant tolerates.
- Resistance type: Level of resistance that a given plant has for deer.
- Edible: Whether or not a plant has edible components.
- Forest type: Which plant types each forest contains.
- Forest profile map: Mapping specific forest ID names to their respective Forest Type array names.
- Plant density: The planting density for each plant type. 


100 plants are defined with the attributes listed above. Additionally, the name, scientific name,
and notes are listed as attributes.

Objects are frozen to prevent them from being changed or overwritten.

*/


/* Constants */
const plantType = {
    CANOPY: 1,
    TREE: 2,
    SUBTREE: 3,
    SHRUB: 4,
};

const sunType = {
    FULLSUN: 1,
    PARTIALSHADE: 2,
    DAPPLEDSUNLIGHT: 3,
    DEEPSHADE: 4,
    SHADE: 5,
};

const soilType = {
    HIGHORGANICMATTER: 1,
    CLAY: 2,
    LOAM_SILT: 3,
    SAND: 4,
    SHALLOWROCKY: 4,
};

const soilDrainage = {
    GOODDRAINAGE: 1,
    MOIST: 2,
    OCCASIONALLYDRY: 3,
    OCCASIONALLYWET: 4,
    FREQUENTSTANDINGWATER: 5,
    OCCASIONALFLOODING: 6,
    VERYDRY: 7,
};

const resistanceType = {
    NONE: 1,
    SOME: 2,
    MILD: 3,
    MODERATE: 4,
    FULL: 5,
    LOW: 6,
    SUSCEPTIBLE: 7,
};

const edible = {
    NOTEDIBLE: 1,
    PARTSEDIBLE: 2,
    EDIBLE: 3,
};

const soilpH = {
    ACID: 1,
    NEUTRAL: 2,
    ALKALINE: 3,
};

const forestType = {
    DRYPRAIRIE: [plantType.CANOPY, plantType.TREE, plantType.SUBTREE, plantType.SHRUB],
    WETPRAIRIE: [plantType.CANOPY, plantType.TREE, plantType.SUBTREE, plantType.SHRUB],
    OAKFOREST: [plantType.CANOPY, plantType.TREE, plantType.SUBTREE, plantType.SHRUB],
    POLLINATOR: [plantType.CANOPY, plantType.TREE, plantType.SUBTREE, plantType.SHRUB],
    CHALLENGED: [plantType.CANOPY, plantType.TREE, plantType.SUBTREE, plantType.SHRUB]
};


const forestProfileMap = {
  oak_forest: "OAKFOREST",
  challenged_site: "CHALLENGED",
  dry_prairie: "DRYPRAIRIE",
  wet_prairie: "WETPRAIRIE",
  pollinator: "POLLINATOR",
};



/* TODO: Is this needed? */
const plantDensity = {
    [plantType.CANOPY]: 1,
    [plantType.TREE]: 1,
    [plantType.SUBTREE]: 2,
    [plantType.SHRUB]: 4
}


/* Prevent objects from being changed */
Object.freeze(plantType);
Object.freeze(sunType);
Object.freeze(resistanceType);
Object.freeze(edible);
Object.freeze(soilpH);
Object.freeze(forestType);



/* Plants from the compiled SE Michigan Native Plants Database */
let redOak = {
    id: "red_oak",
    plantName: "Red Oak",
    scientificName: "Quercus rubra",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED], 
    image: "/plant_photos/quercus-rubra_red-oak.jpg",
    imgAttribution: "",
};

let burOak = {
    id: "bur_oak",
    plantName: "Bur Oak",
    scientificName: "Quercus macrocarpa",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED, forestType.DRYPRAIRIE, forestType.POLLINATOR],
    image: "/plant_photos/quercus-macrocarpa_bur-oak.jpg",
    imgAttribution: "",
};


let swampWhiteOak = {
    id: "swamp_white_oak",
    plantName: "Swamp White Oak",
    scientificName: "Quercus bicolor",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.MILD],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/quercus-bicolor_swamp-white-oak.jpg",
    imgAttribution: "Image by P. Showers",
};


let whiteOak = {
    id: "white_oak",
    plantName: "White Oak",
    scientificName: "Quercus alba",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.DRYPRAIRIE, forestType.CHALLENGED, forestType.OAKFOREST],
    image: "/plant_photos/quercus-alba_white-oak.jpg",
    imgAttribution: "",
};


let americanElm = {
    id: "american_elm",
    plantName: "American Elm",
    scientificName: "Ulmus americana",
    notes: "",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET, soilDrainage.VERYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.DRYPRAIRIE, forestType.WETPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/ulmus-americana_american-elm.jpg",
    imgAttribution: "Image by L. Wallis",
};


let hackberry = {
    id: "hackberry",
    plantName: "Hackberry",
    scientificName: "Celtis occidentalis",
    notes: "Fleshy parts of the fruit are edible and somewhat sweet. Can be eaten raw or used for making jellies and preserves. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.DEEPSHADE, sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID, soilpH.ALKALINE],
    forestType: [forestType.CHALLENGED, forestType.WETPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/celtis-occidentalis_hackberry.jpg",
    imgAttribution: "Image by L. Wallis",
};


let yellowBirch = {
    id: "yellow_birch",
    plantName: "Yellow Birch",
    scientificName: "Betula alleghaniensis",
    notes: "Sap can be made into syrup or beer. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.DRYPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/betula-alleghaniensis_yellow-birch.jpg",
    imgAttribution: "",
};


let americanBeech = {
    id: "american_beech",
    plantName: "American Beech",
    scientificName: "Fagus grandifolia",
    notes: "Nutmeats, in small quantities, edible raw or cooked. Can cause stomach irritation in some individuals if eaten in quantity. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID, soilpH.ALKALINE],
    forestType: [forestType.CHALLENGED, forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/fagus-grandifolia_american-beech.jpg",
    imgAttribution: "",
};


let shagbarkHickory = {
    id: "shagbark_hickory",
    plantName: "Shagbark Hickory",
    scientificName: "Carya ovata",
    notes: "Nuts are edible and sweet. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/carya-ovata_shagbark-hickory.jpg",
    imgAttribution: "",
};


let tulipTree = {
    id: "tulip_tree",
    plantName: "Tulip Tree",
    scientificName: "Liriodendron tulipifera",
    notes: "",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR],
    image: "/plant_photos/liriodendron-tulipifera_tulip-tree.jpg",
    imgAttribution: "",
};


let sycamore = {
    id: "sycamore",
    plantName: "Sycamore",
    scientificName: "Platanus occidentalis",
    notes: "Sap is sweet and tapped in the spring for use as syrup and sugar. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET, soilDrainage.OCCASIONALFLOODING],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED, forestType.WETPRAIRIE],
    image: "/plant_photos/platanus-occidentalis_sycamore.jpg", 
    imgAttribution: "",
};


let purplestemAngelica = {
    id: "purplestem_angelica",
    plantName: "Purplestem Angelica",
    scientificName: "Angelica atropurpurea",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.WETPRAIRIE],
    image: "/plant_photos/angelica-atropurpurea_purplestem-angelica.jpg",
    imgAttribution: "",
};


let canadaAnemone = {
    id: "canada_anemone",
    plantName: "Canada Anemone",
    scientificName: "Anemone canadensis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.SHADE],
    soilType: [soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.CHALLENGED, forestType.POLLINATOR, forestType.DRYPRAIRIE],
    image: "/plant_photos/anemone-canadensis_canada-anemone.jpg",
    imgAttribution: "Image by A. A. Reznicek",
};


let newEnglandAster = {
    id: "new_england_aster",
    plantName: "New England Aster",
    scientificName: "Symphyotrichum novae-angliae",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE],
    image: "/plant_photos/symphyotrichum-novae-angliae_new-england-aster.jpg",
    imgAttribution: "",
};


let sandCoreopsis = {
    id: "sand_coreopsis",
    plantName: "Sand Coreopsis",
    scientificName: "Coreopsis lanceolata",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "plant_photos/coreopsis-lanceolata_sand-coreopsis.jpg",
    imgAttribution: "",
};


let commonBoneset = {
    id: "common_boneset",
    plantName: "Common Boneset",
    scientificName: "Eupatorium perfoliatum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALFLOODING, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.WETPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/eupatorium-perfoliatum_common-boneset.jpg",
    imgAttribution: "",
};


let paleleafWoodlandSunflower = {
    id: "paleleaf_woodland_sunflower",
    plantName: "Paleleaf Woodland Sunflower",
    scientificName: "Helianthus strumosus",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.SHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.WETPRAIRIE, forestType.DRYPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/helianthus-strumosus_paleleaf-woodland-sunflower.jpg",
    imgAttribution: "",
};



let blueLobelia = {
    id: "blue_lobelia",
    plantName: "Blue Lobelia",
    scientificName: "Lobelia siphilitica",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.LOW],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.WETPRAIRIE],
    image: "/plant_photos/lobelia-siphilitica_blue-lobelia.jpg",
    imgAttribution: "",
};



let horsemint = {
    id: "horsemint",
    plantName: "Horsemint / Spotted Bee Balm",
    scientificName: "Monarda punctata",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/monarda-punctata_horsemint-spotted-beebalm.jpg",
    imgAttribution: "",
};



let shrubbyCinquefoil = {
    id: "shrubby_cinquefoil",
    plantName: "Shrubby Cinquefoil",
    scientificName: "Potentilla fruticosa",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/potentilla-fruticosa_shrubby-cinquefoil.jpg",
    imgAttribution: "",
};



let pinnatePrairieCornflower = {
    id: "pinnate_prairie_cornflower",
    plantName: "Pinnate Prairie Cornflower",
    scientificName: "Ratibida pinnata",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/ratibida-pinnata_yellow-coneflower.jpg",
    imgAttribution: "",
};



let cupPlant = {
    id: "cup_plant",
    plantName: "Cup Plant",
    scientificName: "Silphium perfoliatum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET, soilDrainage.OCCASIONALFLOODING],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE],
    image: "/plant_photos/silphium-perfoliatum_cup-plant.jpg",
    imgAttribution: "",
};



let riddellsGoldenrod = {
    id: "riddellsGoldenrod",
    plantName: "Riddell's Goldenrod",
    scientificName: "Oligoneuron riddellii",
    notes: "This species can be substituted with most other Goldenrod species; many are native to Southeast Michigan.",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE],
    image: "plant_photos/oligoneuron_riddellii_riddells-goldenrod.jpg",
    imgAttribution: "Image by iNaturalist user @Kevin, chdphoto",
};


let meadowsweet = {
    id: "meadowsweet",
    plantName: "Meadowsweet",
    scientificName: "Spiraea alba",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.WETPRAIRIE],
    image: "/plant_photos/spiraea-alba_meadowsweet.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let goldenAlexanders = {
    id: "golden_alexanders",
    plantName: "Golden Alexanders",
    scientificName: "Zizia aurea",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/zizia-aurea_golden-alexanders.jpg",
    imgAttribution: "",
};



let yellowGiantHyssop = {
    id: "yellow_giant_hyssop",
    plantName: "Yellow Giant Hyssop",
    scientificName: "Agastache nepetoides",
    notes: "Some Agastache species are edible with a mint- or licorice-like flavor (Source: Gardenia.net).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.FULL],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/agastache-nepetoides_yellow-giant-hyssop.jpg",
    imgAttribution: "Image by R. W. Smith",
};


let noddingWildOnion = {
    id: "nodding_wild_onion",
    plantName: "Nodding Wild Onion",
    scientificName: "Allium cernuum",
    notes: "The bulb of the Nodding Wild Onion is edible. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/allium-cernuum_nodding-wild-onion.jpg",
    imgAttribution: "",
};


let swampMilkweed = {
    id: "swamp_milkweed",
    plantName: "Swamp Milkweed",
    scientificName: "Asclepias incarnata",
    notes: "The milky sap can cause skin and eye irritation for humans and pets. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER, soilType.CLAY, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.WETPRAIRIE],
    image: "/plant_photos/asclepias-incarnata_swamp-milkweed.jpg",
    imgAttribution: "",
};



let butterflyWeed = {
    id: "butterfly_weed",
    plantName: "Butterfly Weed",
    scientificName: "Asclepias tuberosa",
    notes: "The milky sap can cause skin and eye irritation for humans and pets. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SHALLOWROCKY, soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYWET, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.WETPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/asclepias-tuberosa_butterfly-weed.jpg",
    imgAttribution: "",
};



let smoothBlueAster = {
    id: "smooth_blue_aster",
    plantName: "Smooth Blue Aster",
    scientificName: "Symphyotrichum laeve",
    notes: "",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.WETPRAIRIE, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/symphyotrichum-laeve_smooth-blue-aster.jpg",
    imgAttribution: "",
};




let paleIndianPlantain = {
    id: "pale_indian_plantain",
    plantName: "Pale Indian Plantain",
    scientificName: "Cacalia atriplicifolium",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SHALLOWROCKY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/cacalia-atriplicifolium_pale-indian-plantain.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let buttonbush = {
    id: "buttonbush",
    plantName: "Buttonbush",
    scientificName: "Cephalanthus occidentalis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SHALLOWROCKY, soilType.LOAM_SILT, soilType.SAND, soilType.HIGHORGANICMATTER, soilType.CLAY],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.FREQUENTSTANDINGWATER, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.CHALLENGED, forestType.WETPRAIRIE],
    image: "/plant_photos/cephalanthus-occidentalis_buttonbush.jpg",
    imgAttribution: "",
};



let wildStrawberry = {
    id: "wild_strawberry",
    plantName: "Wild Strawberry / Virginia Strawberry",
    scientificName: "Fragaria virginiana",
    notes: "Wild strawberry fruits are edible. The plants are also excellent for pollinators.",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER, soilType.CLAY],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.OAKFOREST],
    image: "/plant_photos/fragaria-virginiana_wild-strawberry.jpg",
    imgAttribution: "",
};



let roughBlazingStar = {
    id: "rough_blazing_star",
    plantName: "Rough Blazing Star",
    scientificName: "Liatris aspera",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.CLAY, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.CHALLENGED, forestType.DRYPRAIRIE, forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/liatris-aspera_blazing-star.jpg",
    imgAttribution: "",
};



let eveningPrimrose = {
    id: "evening_primrose",
    plantName: "Evening Primrose",
    scientificName: "Oenothera biennis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.CHALLENGED, forestType.OAKFOREST],
    image: "/plant_photos/oenothera-biennis_evening-primrose.jpg",
    imgAttribution: "",
};



let penstemon = {
    id: "penstemon",
    plantName: "Penstemon / Hairy beardtongue",
    scientificName: "Penstemon hirsutus",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/penstemon-hirsutus_hairy-beardtongue.jpg",
    imgAttribution: "",
};


let michiganRose = {
    id: "michigan_rose",
    plantName: "Michigan Rose / Climbing Rose",
    scientificName: "Penstemon hirsutus",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/rosa-setigera_michigan-rose.jpg",
    imgAttribution: "Image by A. A. Reznicek",
};



let lateFigwort = {
    id: "late_figwort",
    plantName: "Late Figwort / Carpenter's Square",
    scientificName: "Scrophularia marilandica",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.DRYPRAIRIE],
    image: "/plant_photos/scrophularia-marilandica_late-figwort.jpg",
    imgAttribution: "",
};



let showyGoldenrod = {
    id: "showy_goldenrod",
    plantName: "Showy Goldenrod",
    scientificName: "Solidago speciosa",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/solidago-speciosa_showy-goldenrod.jpg",
    imgAttribution: "",
};



let hoaryVervain = {
    id: "hoary_vervain",
    plantName: "Hoary Vervain / Hoary Verbena",
    scientificName: "Verbena stricta",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.CLAY, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.CHALLENGED, forestType.DRYPRAIRIE],
    image: "/plant_photos/verbena-stricta_hoary-vervain.jpg", 
    imgAttribution: "",
};



let ironweed = {
    id: "ironweed",
    plantName: "ironweed",
    scientificName: "Vernonia missurica",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/vernonia-missurica_ironweed.jpg",
    imgAttribution: "Image by B. S. Walters",
};




let culversRoot = {
    id: "culvers_root",
    plantName: "Culver's Root",
    scientificName: "Veronicastrum virginicum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.WETPRAIRIE, forestType.DRYPRAIRIE],
    image: "/plant_photos/veronicastrum-virginicum_culvers-root.jpg",
    imgAttribution: "",
};



let leadplant = {
    id: "leadplant",
    plantName: "Leadplant",
    scientificName: "Amorpha canescens",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/amorpha-canescens_leadplant.jpg",
    imgAttribution: "",
};


let columbine = {
    id: "columbine",
    plantName: "Columbine",
    scientificName: "Aquilegia canadensis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.CHALLENGED, forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "plant_photos/aquilegia-canadensis_columbine.jpg",
    imgAttribution: "",
};



let newJerseyTea = {
    id: "new_jersey_tea",
    plantName: "New Jersey Tea",
    scientificName: "Ceanothus americanus",
    notes: "The dried leaves of this nitrogen-fixing shrub make an excellent tea. (Source: Wildflower.org).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SHALLOWROCKY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/ceanothus-americanus_new-jersey-tea.jpg",
    imgAttribution: "",
};



let showyTickTrefoil = {
    id: "showy_tick_trefoil",
    plantName: "Showy Tick Trefoil",
    scientificName: "Desmodium canadense",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.CHALLENGED, forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.WETPRAIRIE],
    image: "/plant_photos/desmodium-canadense_showy-tick-trefoil.jpg",
    imgAttribution: "",
};



let wildGeranium = {
    id: "wild_geranium",
    plantName: "Wild Geranium",
    scientificName: "Geranium maculatum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.HIGHORGANICMATTER, soilType.SAND],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/geranium-maculatum_wild-geranium.jpg",
    imgAttribution: "",
};



let alumRoot = {
    id: "alum_root",
    plantName: "Alum Root",
    scientificName: "Heuchera americana",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.WETPRAIRIE],
    image: "/plant_photos/heuchera-americana_alum-root.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let virginiaWaterleaf = {
    id: "virginia_waterleaf",
    plantName: "Virginia Waterleaf",
    scientificName: "Hydrophyllum virginianum",
    notes: "Young leaves and shoots are edible and can be added to salads. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/hydrophyllum-virginianum_virginia-waterleaf.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let hairyBushclover = {
    id: "hairy_bushclover",
    plantName: "Hairy Bush-clover",
    scientificName: "Lespedeza hirta",
    notes: "May be harmful to pets.",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE],
    image: "/plant_photos/lespedeza-hirta_hairy-bush-clover.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let redberriedElder = {
    id: "redberried_elder",
    plantName: "Red-berried elder",
    scientificName: "Sambucus racemosa",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/sambucus-racemosa_red-berried-elder.jpg",
    imgAttribution: "",
};



let roundleavedRagwort = {
    id: "roundleaved_ragwort",
    plantName: "Round-leaved Ragwort",
    scientificName: "Packera obovata",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.SHADE],
    soilType: [soilType.LOAM_SILT, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED, forestType.DRYPRAIRIE],
    image: "/plant_photos/packera-obovata_round-leaved-ragwort.jpg",
    imgAttribution: "",
};



let juneberry = {
    id: "juneberry",
    plantName: "Juneberry",
    scientificName: "Amelanchier arborea",
    notes: "Edible fruit used to make jams, jellies, and pies. Can be eaten raw or cooked. Rich in iron and copper. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.LOW],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.WETPRAIRIE, forestType.DRYPRAIRIE],
    image: "/plant_photos/amelanchier-arborea_juneberry.jpg",
    imgAttribution: "",
};



let smoothShadbush = {
    id: "smooth_shadbush",
    plantName: "Smooth Shadbush",
    scientificName: "Amelanchier laevis",
    notes: "The berries of this plant are edible and typically mature in June.",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.LOW],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/amelanchier-laevis_smooth-shadbush.jpg",
    imgAttribution: "",
};



let pawpaw = {
    id: "pawpaw",
    plantName: "Pawpaw",
    scientificName: "Asimina triloba",
    notes: "In late summer to early fall, pawpaw produces an edible, sweet, custard-like fruit. It is recommended to wear gloves when harvesting as contact dermatitis has been known to occur. Stomach and intestinal pain from eating the fruit skin or seeds. Skin irritation from handling fruit. Do not consume leaves or stems. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.DEEPSHADE, sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/asimina-triloba_pawpaw.jpg",
    imgAttribution: "",
};



let grayBirch = {
    id: "gray_birch",
    plantName: "Gray Birch",
    scientificName: "Betula populifolia",
    notes: "",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/betula-populifolia_gray-birch.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let hornbeam = {
    id: "hornbeam",
    plantName: "Hornbeam / Blue-beech",
    scientificName: "Carpinus caroliniana",
    notes: "The nuts of this tree are edible but rarely eaten by humans.",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.DEEPSHADE, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALFLOODING, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/carpinus-caroliniana_hornbeam.jpg",
    imgAttribution: "",
};



let hawthorn = {
    id: "hawthorn",
    plantName: "Hawthorn",
    scientificName: "Crataegus magniflora",
    notes: "",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED, forestType.POLLINATOR],
    image: "plant_photos/crataegus-magnifolia_hawthorn.jpg",
    imgAttribution: "Image by iNaturalist user @theo_witsell",
};



let floweringDogwood = {
    id: "flowering_dogwood",
    plantName: "Flowering Dogwood",
    scientificName: "Cornus florida",
    notes: "",
    plantType: [plantType.TREE, plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.LOW],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST],
    image: "/plant_photos/cornus-florida_flowering-dogwood.jpg",
    imgAttribution: "",
};


let clusteredHawthorn = {
    id: "clustered_hawthorn",
    plantName: "Hawthorn / Clustered Hawthorn",
    scientificName: "Crataegus compacta",
    notes: "",
    plantType: [plantType.TREE, plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.DRYPRAIRIE, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/crataegus-compacta_hawthorn.jpg",
    imgAttribution: "",
};


let downyHawthorn = {
    id: "downy_hawthorn",
    plantName: "Hawthorn / Downy Hawthorn",
    scientificName: "Crataegus mollis",
    notes: "The fruit is edible, raw or cooked, although sub-acid, dry and mealy. The fairly large fruit is used for making jellies and preserves. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.POLLINATOR, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/crataegus-mollis_downy-hawthorn.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let riverBirch = {
    id: "river_birch",
    plantName: "River Birch",
    scientificName: "Betula nigra",
    notes: "",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.DRYPRAIRIE, forestType.WETPRAIRIE],
    image: "/plant_photos/betula-nigra_river-birch.jpg",
    imgAttribution: "",
};



let bitternutHickory = {
    id: "bitternut_hickory",
    plantName: "Bitternut Hickory",
    scientificName: "Carya cordiformis",
    notes: "",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND, soilType.HIGHORGANICMATTER, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE],
    image: "/plant_photos/carya-cordiformis_bitternut-hickory.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let pignutHickory = {
    id: "pignut_hickory",
    plantName: "Pignut Hickory",
    scientificName: "Carya glabra",
    notes: "The nuts contain edible meat, though it is bitter. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/carya-glabra_pignut-hickory.jpg",
    imgAttribution: "Image by R. Schipper",
};



let butternut = {
    id: "butternut",
    plantName: "Butternut",
    scientificName: "Juglans cinerea",
    notes: "The edible fruits are tan and oval. The nut's shells can be hard to crack, but the nuts are sweet and oily and prized by humans and wildlife. (Source: North Carolina Extension Gardener Plant Toolbox",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/juglans-cinerea_butternut.jpg",
    imgAttribution: "",
};



let whiteMulberry = {
    id: "white_mulberry",
    plantName: "White Mulberry",
    scientificName: "Morus alba",
    notes: "Fertilized flowers on female trees produce sweet, edible blackberry-like fruits (cylindrical drupes to 1inch long) that mature in June. Fruits ripen to white or pink, but sometimes to darker reds or purple-blacks. Edible only when ripe; avoid touching or ingesting the latex-like white sap. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE, plantType.PARTIALSHADE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/morus-alba_white-mulberry.jpg",
    imgAttribution: "",
};



let honeyLocust = {
    id: "honey_locust",
    plantName: "Honey Locust",
    scientificName: "Gleditsia triacanthos",
    notes: "Only the fruits of honey locust are considered edible. The sweet and fleshy pulp of the bean pods can be eaten raw or extracted and used in a variety of ways. From smoothies, to beer. It has a sweet honey like taste, hence its name. (Source: eattheplanet.org).",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/gleditsia-triacanthos_honey-locust.jpg",
    imgAttribution: "",
};



let larch = {
    id: "larch",
    plantName: "Larch",
    scientificName: "Larix laricina",
    notes: "",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/larix-laricina_larch.jpg",
    imgAttribution: "",
};



let ohioBuckeye = {
    id: "ohio_buckeye",
    plantName: "Ohio Buckeye",
    scientificName: "Aesculus glabra",
    notes: "Humans and pets should not ingest.",
    plantType: [plantType.TREE, plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/aesculus-glabra_ohio-buckeye.jpg",
    imgAttribution: "",
};



let paperBirch = {
    id: "paper_birch",
    plantName: "Paper Birch",
    scientificName: "Betula papyrifera",
    notes: "",
    plantType: [plantType.TREE, plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.WETPRAIRIE],
    image: "/plant_photos/betula-papyrifera_paper-birch.jpg",
    imgAttribution: "",
};



let alternateleavedDogwood = {
    id: "alternateleaved_dogwood",
    plantName: "Alternate-leaved Dogwood",
    scientificName: "Cornus alternifolia",
    notes: "",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.CHALLENGED],
    image: "/plant_photos/cornus-alternifolia_alternate-leaved-dogwood.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let cockspurThorn = {
    id: "cockspur_thorn",
    plantName: "Cockspur Thorn",
    scientificName: "Crataegus crus-galli",
    notes: "Fruit can be eaten raw or cooked and used in jellies, but most people leave it for the birds. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.CHALLENGED],
    image: "/plant_photos/crataegus-crus-galli_cockspur-thorn.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let fleshyHawthorn = {
    id: "fleshy_hawthorn",
    plantName: "Fleshy Hawthorn",
    scientificName: "Crataegus succulenta",
    notes: "The fruit is red and has a sweet, pulpy flesh; it is edible and sometimes used for making jellies. (Source: northamericantrees.com).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR, forestType.CHALLENGED],
    image: "/plant_photos/crataegus-succulenta_hawthorn.jpg",
    imgAttribution: "Image by P. G. O'Hara",
};



let pinOak = {
    id: "pin_oak",
    plantName: "Pin Oak",
    scientificName: "Quercus palustris",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.LOW],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.WETPRAIRIE, forestType.DRYPRAIRIE],
    image: "/plant_photos/quercus-palustris_pin-oak.jpg",
    imgAttribution: "",
};



let shumardOak = {
    id: "shumard_oak",
    plantName: "Shumard Oak",
    scientificName: "Quercus shumardii",
    notes: "Acorns (nuts) are edible after tannins are leached or boiled out. Do not consume without proper preparation. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/quercus-shumardii_shumard-oak.jpg",
    imgAttribution: "",
};



let sassafras = {
    id: "sassafras",
    plantName: "Sassafras",
    scientificName: "Sassafras albidum",
    notes: "Teas and drinks are made from the roots. Root beer used to be flavored from the bark of the roots of the sassafras. The leaves are dried and ground to make filé powder, a common thickening ingredient in gumbo. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.SAND, soilType.LOAM_SILT, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/sassifras-albidum_sassafras.jpg",
    imgAttribution: "",
};



let whiteCedar = {
    id: "white_cedar",
    plantName: "Arbor Vitae / White Cedar",
    scientificName: "Thuja occidentalis",
    notes: "",
    plantType: [plantType.TREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.CHALLENGED, forestType.DRYPRAIRIE],
    image: "/plant_photos/thuja-occidentalis_arbor-vitae.jpg",
    imgAttribution: "",
};



let basswood = {
    id: "basswood",
    plantName: "Basswood / Linden",
    scientificName: "Tilia americana",
    notes: "Dried flowers are used to make teas but over-use can cause heart damage. Syrup can be made from the sweet tree sap. Honey from this tree is prized for flavor. Leaves can be used in salads. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.CANOPY],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SUSCEPTIBLE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR],
    image: "/plant_photos/tilia-americana_linden.jpg",
    imgAttribution: "",
};



let hemlock = {
    id: "hemlock",
    plantName: "Hemlock",
    scientificName: "Tsuga canadensis",
    notes: "The cambium is used by Native Americans for breads and soups as well as with dried fruit and animal fat for pemmican. The leaves, which are high in vitamin C, are also used for tea. The bark was once used for tannin for leather production. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE, sunType.DEEPSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.MODERATE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/tsuga-canadensis_canada-hemlock.jpg",
    imgAttribution: "",
};



let balsamFir = {
    id: "balsam_fir",
    plantName: "Balsam Fir",
    scientificName: "Abies balsamea",
    notes: "Needles are edible and can be used to make tea. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.TREE, plantType.CANOPY],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "plant_photos/abies-balsamea_balsam-fir.png",
    imgAttribution: "",
};


let threeSeededMercury = {
    id: "three_seeded_mercury",
    plantName: "Three-Seeded Mercury",
    scientificName: "Acalypha rhomboidea",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/acalypha-rhomboidea_three-seeded-mercury.jpg",
    imgAttribution: "Image by B. S. Walters",
};



let fieldThistle = {
    id: "field_thistle",
    plantName: "Field Thistle",
    scientificName: "Cirsium discolor",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL, soilpH.ALKALINE],
    forestType: [forestType.OAKFOREST, forestType.DRYPRAIRIE, forestType.POLLINATOR],
    image: "/plant_photos/cirsium-discolor_field-thistle.jpg",
    imgAttribution: "",
};



let cuckooFlower = {
    id: "cuckoo_flower",
    plantName: "Cuckoo Flower",
    scientificName: "Cardamine pratensis",
    notes: "The foliage of Cardamine pratensis are edible. Most Cardamine species have edible roots. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.DRYPRAIRIE],
    image: "/plant_photos/cardamine-pratensis_cuckoo-flower.jpg",
    imgAttribution: "",
};



let beechDrops = {
    id: "beech_drops",
    plantName: "Beach Drops / Beech Drops",
    scientificName: "Epifagus virginiana",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/epifagus-virginiana_beach-drops.jpg",
    imgAttribution: "",
};



let joePyeWeed = {
    id: "joe_pye_weed",
    plantName: "Joe-Pye Weed",
    scientificName: "Eutrochium maculatum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.FULLSUN],
    soilType: [soilType.HIGHORGANICMATTER, soilType.CLAY, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ALKALINE],
    forestType: [forestType.WETPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/eutrochium-maculatum_joe-pye-weed.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let maidenhairFern = {
    id: "maidenhair_fern",
    plantName: "Maidenhair Fern",
    scientificName: "Adiantum pedatum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.PARTIALSHADE, sunType.DEEPSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ALKALINE, soilpH.NEUTRAL, soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/adiantum-pedatum_maidenhair-fern.jpg",
    imgAttribution: "",
};



let interruptedFern = {
    id: "interrupted_fern",
    plantName: "Interrupted Fern",
    scientificName: "Claytosmunda claytoniana",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.DEEPSHADE, sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.FREQUENTSTANDINGWATER, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/claytosmunda-claytoniana_interrupted-fern.jpg",
    imgAttribution: "",
};



let newYorkFern = {
    id: "new_york_fern",
    plantName: "New York Fern",
    scientificName: "Thelypteris noveboracensis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.DEEPSHADE, sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.FULL],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/thelypteris-novaboracensis_new-york-fern.jpg",
    imgAttribution: "",
};



let cottongrass = {
    id: "cottongrass",
    plantName: "Cottongrass",
    scientificName: "Eriophorum virginicum",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER, soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE],
    image: "/plant_photos/eriophorum-virginicum_cottongrass.jpg",
    imgAttribution: "",
};




let bromelikeSedge = {
    id: "bromelike_sedge",
    plantName: "Brome-like Sedge",
    scientificName: "Carex bromoides",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.DAPPLEDSUNLIGHT, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER, soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALFLOODING],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE],
    image: "/plant_photos/carex-bromoides_brome-like-sedge.jpg",
    imgAttribution: "Image by R. Schipper",
};



let purpleLovegrass = {
    id: "purple_lovegrass",
    plantName: "Purple Lovegrass",
    scientificName: "Eragrostis spectabilis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.LOAM_SILT, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/eragrostis-spectabilis_purple-lovegrass.jpg",
    imgAttribution: "",
};




let commonReed = {
    id: "common_reed",
    plantName: "Common Reed",
    scientificName: "Phragmites australis",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN],
    soilType: [soilType.HIGHORGANICMATTER, soilType.CLAY, soilType.SAND],
    soilDrainage: [soilDrainage.FREQUENTSTANDINGWATER, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/phragmites-australis_common-reed.jpg",
    imgAttribution: "",
};



let gardenersGarters = {
    id: "gardeners_garters",
    plantName: "Gardener's Garters",
    scientificName: "Phalaris arundinacea",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.HIGHORGANICMATTER, soilType.CLAY, soilType.SAND, soilType.LOAM_SILT, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.OCCASIONALLYDRY, soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE, soilpH.ACID],
    forestType: [forestType.DRYPRAIRIE],
    image: "/plant_photos/phalaris-arundinacea_gardeners-garters.jpg",
    imgAttribution: "",
};


let commonHops = {
    id: "common_hops",
    plantName: "Common Hops / Hops",
    scientificName: "Humulus lupulus",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.LOAM_SILT],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST, soilDrainage.GOODDRAINAGE],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL, soilpH.ALKALINE, soilpH.ACID],
    forestType: [forestType.WETPRAIRIE],
    image: "/plant_photos/humulus-lupulus_common-hops.jpg",
    imgAttribution: "",
};



let glaucousHoneysuckle = {
    id: "glaucous_honeysuckle",
    plantName: "Glaucous Honeysuckle / Red Honeysuckle",
    scientificName: "Lonicera dioica",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE, sunType.DAPPLEDSUNLIGHT],
    soilType: [soilType.LOAM_SILT, soilType.SAND, soilType.SHALLOWROCKY],
    soilDrainage: [soilDrainage.OCCASIONALLYWET, soilDrainage.MOIST, soilDrainage.GOODDRAINAGE, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST],
    image: "plant_photos/lonicera-dioica_glacous-honeysuckle.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let blueFlagIris = {
    id: "blue_flag_iris",
    plantName: "Blue Flag Iris",
    scientificName: "Iris virginica",
    notes: "Do not consume. Toxic to humans and pets.",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.SAND, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.FREQUENTSTANDINGWATER, soilDrainage.MOIST, soilDrainage.OCCASIONALFLOODING, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.SOME],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.WETPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/iris-virginica_blue-iris.jpg",
    imgAttribution: "",
};




let witchHazel = {
    id: "witch_hazel",
    plantName: "Witch Hazel",
    scientificName: "Hamamelis virginiana",
    notes: "The seeds are edible, and this plant is commonly used for other medicinal purposes. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALFLOODING],
    resistanceType: [resistanceType.SOME],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID],
    forestType: [forestType.OAKFOREST],
    image: "/plant_photos/hamamelis-virginiana_witch-hazel.jpg",
    imgAttribution: "",
};


let redbud = {
    id: "redbud",
    plantName: "Redbud",
    scientificName: "Cercis canadensis",
    notes: "The flowers are edible and taste similar to peas. Contain high amounts of vitamin C. (Source: North Carolina Extension Gardener Plant Toolbox).",
    plantType: [plantType.SUBTREE],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.GOODDRAINAGE, soilDrainage.MOIST, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.FULL],
    edible: [edible.PARTSEDIBLE],
    soilpH: [soilpH.ACID, soilpH.ALKALINE, soilpH.NEUTRAL],
    forestType: [forestType.OAKFOREST, forestType.POLLINATOR],
    image: "/plant_photos/cercis-canadensis_redbud.jpg",
    imgAttribution: "",
};



let commonHopSedge = {
    id: "common_hop_sedge",
    plantName: "Common Hop Sedge",
    scientificName: "Carex lupulina",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.HIGHORGANICMATTER, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE, forestType.OAKFOREST, forestType.CHALLENGED],
    image: "/plant_photos/carex-lupulina_common-hop-sedge.jpg",
    imgAttribution: "Image by R. W. Smith",
};



let woolGrass = {
    id: "wool_grass",
    plantName: "Wool Grass",
    scientificName: "Scirpus cyperinus",
    notes: "",
    plantType: [plantType.SHRUB],
    sunType: [sunType.FULLSUN, sunType.PARTIALSHADE],
    soilType: [soilType.CLAY, soilType.LOAM_SILT, soilType.SAND],
    soilDrainage: [soilDrainage.MOIST, soilDrainage.OCCASIONALLYWET, soilDrainage.OCCASIONALLYDRY],
    resistanceType: [resistanceType.NONE],
    edible: [edible.NOTEDIBLE],
    soilpH: [soilpH.ACID, soilpH.NEUTRAL],
    forestType: [forestType.WETPRAIRIE, forestType.DRYPRAIRIE, forestType.CHALLENGED],
    image: "/plant_photos/scirpus-cyperinus_cottongrass-bulrush.jpg",
    imgAttribution: "",
};


/* TODO: REMOVE IF NO LONGER NEEDED


console.log(floweringDogwood.plantType.includes(plantType.TREE))


*/




/* Exports */
export {
  plantType,
  sunType,
  soilType,
  soilDrainage,
  resistanceType,
  edible,
  soilpH,
  forestType,
  plantDensity,
  forestProfileMap,
};

export const plants = [redOak, burOak, swampWhiteOak, whiteOak, americanElm, hackberry, yellowBirch, americanBeech,
    shagbarkHickory, tulipTree, sycamore, purplestemAngelica, canadaAnemone, newEnglandAster, sandCoreopsis, commonBoneset,
    paleleafWoodlandSunflower, blueLobelia, horsemint, shrubbyCinquefoil, pinnatePrairieCornflower, cupPlant, riddellsGoldenrod,
    meadowsweet, goldenAlexanders, yellowGiantHyssop, noddingWildOnion, swampMilkweed, butterflyWeed, smoothBlueAster, paleIndianPlantain,
    buttonbush, wildStrawberry, roughBlazingStar, eveningPrimrose, penstemon, michiganRose, lateFigwort, showyGoldenrod,
    hoaryVervain, ironweed, culversRoot, leadplant, columbine, newJerseyTea, showyTickTrefoil, wildGeranium, alumRoot, 
    virginiaWaterleaf, hairyBushclover, redberriedElder, roundleavedRagwort, juneberry, smoothShadbush, pawpaw, grayBirch, hornbeam,
    hawthorn, floweringDogwood, clusteredHawthorn, downyHawthorn, riverBirch, bitternutHickory, pignutHickory, butternut,
    whiteMulberry, honeyLocust, larch, ohioBuckeye, paperBirch, alternateleavedDogwood, cockspurThorn, fleshyHawthorn, 
    pinOak, shumardOak, sassafras, whiteCedar, basswood, hemlock, balsamFir, threeSeededMercury, fieldThistle, cuckooFlower, 
    beechDrops, joePyeWeed, maidenhairFern, interruptedFern, newYorkFern, cottongrass, bromelikeSedge, purpleLovegrass, 
    commonReed, gardenersGarters, commonHops, glaucousHoneysuckle, blueFlagIris, witchHazel, redbud, commonHopSedge, woolGrass
];
