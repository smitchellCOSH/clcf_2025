/* 

Javascript database of Forest Type profiles.

Used as part of the Plant Calculator.

Attributes:
- ID.
- Forest Type name.
- Description.
- Image name.
- Plant Type densities.
- Included Plant Types.


*/




export const forestProfiles = [
  {
    id: "dry_prairie",
    name: "Dry Prairie",
    description: "Prairies were once abundant in Michigan, spanning most of the state. Today, 99% of all prairie land in the state has been destroyed or repurposed, with no historically significant prairie lands remaining. While not a typical forest, choosing the Dry Prairie type will help to restore one of Michigan’s most prominent natural ecosystems, providing habitat for birds and pollinators alike. A dry prairie consists of soils with faster water drainage and generally drier soils.",
    image: "photos/dry_prairie.jpg",
    densities: {
      CANOPY: 0.33, SHRUB: 2, SUBTREE: 0.33, TREE: 0.33,
    },
    plantTypes: ["CANOPY", "SHRUB", "SUBTREE", "TREE"]
  },

  {
    id: "wet_prairie",
    name: "Wet Prairie",
    description: "Prairies were once abundant in Michigan, spanning most of the state. Today, 99% of all prairie land in the state has been destroyed or repurposed, with no historically significant prairie lands remaining. While not a typical forest, choosing the Wet Prairie type will help to restore one of Michigan’s most prominent natural ecosystems, providing habitat for birds and pollinators alike. A wet prairie consists of soils with slower water drainage and generally wetter soils.",
    image: "photos/wet_prairie.jpg",
    densities: {
      CANOPY: 0.33, SHRUB: 2, SUBTREE: 0.33, TREE: 0.33,
    },
    plantTypes: ["CANOPY", "SHRUB", "SUBTREE", "TREE"]
  },

  {
    id: "challenged_site",
    name: "Challenged Site Forest",
    description: "Got stubborn soil or demanding dirt? Consider building a Challenged Site Forest, best for areas that are suitable for only the most resilient of plants. This forest type is ideal for previously polluted soil, soils that are highly acidic or alkaline, and soils that are primarily clay or rocky. This forest type may be best for more experienced gardeners.",
    image: "photos/challenged_site.jpg",
    densities: {
      CANOPY: 0.75, SHRUB: 0.75, SUBTREE: 1, TREE: 1,
    },
    plantTypes: ["CANOPY", "SHRUB", "SUBTREE", "TREE"]
  },

  {
    id: "pollinator",
    name: "Pollinator Forest",
    description: "Pollinator forests are not just great for the environment – they’re also a fun way to interact with insects, small mammals, and birds. Pollinator forests support animals, and, in turn, the animals support your forest. This forest also serves two purposes: reforestation and pollinator support.",
    image: "photos/pollinator_forest.jpg",
    densities: {
      CANOPY: 0.75, SHRUB: 0.75, SUBTREE: 1, TREE: 1,
    },
    plantTypes: ["CANOPY", "SHRUB", "SUBTREE", "TREE"]
  },

  {
    id: "oak_forest",
    name: "Oak Forest",
    description: "The Oak Forest is Michigan’s most common ecological system. Oak Forests are strong, beautiful, and support a variety of wildlife. As maples become more common in Michigan, Oak Forests are especially important to improve biodiversity and ecological resilience. Consider an Oak Forest to help Michigan get back to its roots!",
    image: "photos/oak_forest.jpg",
    densities: {
      CANOPY: 0.75, SHRUB: 0.75, SUBTREE: 1, TREE: 1,
    },
    plantTypes: ["CANOPY", "SHRUB", "SUBTREE", "TREE"]
  },


];
