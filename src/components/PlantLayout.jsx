

/* Imports */
import { Stage, Layer, Circle, Text, Rect } from 'react-konva'; // Konva components.
import { useEffect, useState, useMemo } from 'react';
import { plants } from '../data/plants';
import GeneratePDFButton from './GeneratePDFButton';



export function generatePlantLayout({
  width,
  height,
  plotShape,
  squareFootage,
  selectedPlants,
  spacingRules
}) {
  const buffer = 5; // 5 square foot buffer
  const pixelsPerFoot = 5;
  const plantDots = [];

  const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  for (let type in selectedPlants) {
  for (let plantId in selectedPlants[type]) {
    const qty = selectedPlants[type][plantId];
    const color = getColorForPlantId(plantId);

    let attempts = 0;
    let placed = 0;

    while (placed < qty && attempts < 10000) {
      attempts++;
      const x = Math.random() * (width - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;
      const y = Math.random() * (height - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;

      const isInPlot = plotShape === "circle"
        ? distance({ x, y }, { x: width / 2, y: height / 2 }) <= width / 2 - buffer * pixelsPerFoot
        : true;

      if (!isInPlot) continue;

      const tooClose = plantDots.some((p) => {
        const d = distance(p, { x, y });
        return (
          d < spacingRules.minSpacing ||
          (p.plantId === plantId && d < spacingRules.sameTypeSpacing?.[type]) ||
          (isTreeType(p.type, type) && d < spacingRules.treeToTree)
        );
      });

      if (tooClose) continue;

      plantDots.push({
        x,
        y,
        type,
        plantId,
        color,
        radius: getScaledRadius(type, squareFootage)
      });

      placed++;
    }
  }
}


  return plantDots;
}

export function getColorForPlantId(plantId) {
  // Hash-based color generator for consistent color per plant.
  let hash = 0;
  for (let i = 0; i < plantId.length; i++) {
    hash = plantId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 60%, 60%)`;
}



function getColorForType(type) {
  return {
    CANOPY: "#2e8b57",
    TREE: "#3cb371",
    SUBTREE: "#6b8e23",
    SHRUB: "#9acd32"
  }[type] || "#aaa";
}

function getRadiusForType(type) {
  return {
    CANOPY: 8,
    TREE: 6,
    SUBTREE: 4,
    SHRUB: 3
  }[type] || 2;
}


function isTreeType(a, b) {
  const treeTypes = ["CANOPY", "TREE"];
  return treeTypes.includes(a) && treeTypes.includes(b);
}

function getScaledRadius(type, squareFootage) {
  const scaleFactor = Math.max(0.5, 1 - squareFootage / 2000); // Reduce dot size as squareFootage increases
  const baseSize = getRadiusForType(type);
  return Math.max(2, baseSize * scaleFactor);
}




const PlantLayout = ({ width, height, plotShape, plantPoints }) => {
  return (
    <Stage width={width} height={height}>
      <Layer>
        {/* Background Plot Shape */}
        {plotShape === "square" && (
          <Rect x={0} y={0} width={width} height={height} fill="#fdfff6" />
        )}
        {plotShape === "rectangle" && (
          <Rect x={0} y={0} width={width} height={height} fill="#fdfff6" />
        )}
        {plotShape === "circle" && (
          <Circle
          x={width / 2}
          y={height / 2}
          radius={Math.min(width, height) / 2}
          fill="#fdfff6"
          />
        )}



        {/* Plants */}
        {plantPoints.map((plant, i) => (
          <Circle
          key={i}
          x={plant.x}
          y={plant.y}
          radius={plant.radius}
          fill={plant.color}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default PlantLayout;




/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */
/* *********************************************************** */



/* Generates a unique but consistent color for each individual
plant ID. Based on the hash of the plant ID. */
// const generateColorFromId = (id) => {
//   let hash = 0;
//   for (let i = 0; i < id.length; i++) {
//     hash = id.charCodeAt(i) + ((hash << 5) - hash); // Computes a hash from the plant ID string.
//   }
//   const hue = hash % 360;
//   return `hsl(${hue}, 60%, 60%)`;
// };


// /* Creates a lookup map from the plant database array. */
// /* Dictionary style object, where keys are plant IDs.
//    Values are full plant objects. */
// const plantMap = plants.reduce((map, plant) => {
//   map[plant.id] = plant;
//   return map;
// }, {});




// /* ************************************************************************* */

// /* Content */

// /* Main component - Accepts selectedPlants objects (type, plantID, quantity). */
// export default function PlantLayout({ selectedPlants, squareFootage, shape = "square" }) {


//   /* Generate number labels for plants. */
//   const plantIdNumberMap = useMemo(() => { // Numbers are recalculated when selectedPlants changes.
//     let counter = 1; // Starts at 1 and increases until all unique plants are accounted for.
//     const map = {};
//     Object.entries(selectedPlants).forEach(([type, plants]) => {
//       Object.keys(plants).forEach((plantId) => {
//         if (!map[plantId]) {
//           map[plantId] = counter++;
//         }
//       });
//     });
//     return map;
//   }, [selectedPlants]);



//   /* Error handling: If no square footage has been input by the user, show instructions. */
//   if (!squareFootage) {
//     return <div>Please enter your square footage above.</div>;
//   }


//   /* Initializes state and size calculations. */
//   const [dots, setDots] = useState([]); // Array of positioned plant circles.


//   /* Initializes the largest and smallest size that the layout canvas can be. */
//   const MAX_CANVAS_SIZE = 1000; // 1000 pixel maximum size.
//   const MIN_CANVAS_SIZE = 500; // 500 pixel minimum size.



//   /* Defines plant spacing in real-world measurements (feet). */
//   const typeSpecsFeet = {
//     CANOPY: { radiusFeet: 1, spacingFeet: 10 },
//     TREE: { radiusFeet: 1, spacingFeet: 7.5 },
//     SUBTREE: { radiusFeet: 1, spacingFeet: 5 },
//     SHRUB: { radiusFeet: 1, spacingFeet: 3.5 },
//   };


//   /* Converts square footage in feet to a pixel size for the canvas. */
//   const sideFeet = Math.sqrt(squareFootage);
//   const rawPixelsPerFoot = MAX_CANVAS_SIZE / sideFeet;

//   /* Ensures pixel density stays between 5-15px/ft at maximum despite
//      plot size. */
//   const pixelsPerFoot = Math.min(Math.max(rawPixelsPerFoot, 5), 15);
//   let shapeSize = sideFeet * pixelsPerFoot;
//   shapeSize = Math.max(shapeSize, MIN_CANVAS_SIZE);


  
//   /* Initializes the buffer size around the edge of the plot. */
//   const BUFFER_FEET = 5;
//   const BUFFER_PX = BUFFER_FEET * pixelsPerFoot;


// /* For each plant type, translates feet into pixels. */
//   const typeStyles = useMemo(() => {
//   const basePlotSize = 100;
//   const radiusScalingFactor = Math.sqrt(basePlotSize / squareFootage);


//   return Object.fromEntries(
//     Object.entries(typeSpecsFeet).map(([type, { radiusFeet, spacingFeet, color }]) => [
//       type,
//       {
//         radius: radiusFeet * pixelsPerFoot * radiusScalingFactor,
//         spacing: spacingFeet * pixelsPerFoot,
//         color,
//       }
//     ])
//   );
// }, [squareFootage, pixelsPerFoot]);


// const sortedTypes = Object.entries(typeSpecsFeet)
//   .sort(([, a], [, b]) => b.spacingFeet - a.spacingFeet)
//   .map(([type]) => type);





//   /* Computes a consistent color for each individual plant species and stores it
//   using 'useMemo()'. */
//   const plantColors = useMemo(() => {
//       const map = {};
//       Object.entries(selectedPlants).forEach(([type, plantMap]) => {
//         Object.keys(plantMap).forEach((plantId) => {
//           map[plantId] = generateColorFromId(plantId);
//         });
//       });
//       return map;
//     }, [selectedPlants]);

  

//   useEffect(() => {
//   const newDots = [];

//   let maxWidth = shapeSize;
//   let maxHeight = shapeSize;

//   if (shape === "rectangle") {
//     maxWidth = shapeSize * 1.6;
//     maxHeight = shapeSize * 0.88;
//   }

//   const sortedTypes = Object.keys(selectedPlants).sort((a, b) => {
//     const aRadius = typeStyles[a]?.radius || 0;
//     const bRadius = typeStyles[b]?.radius || 0;
//     return bRadius - aRadius; // Larger first
//   });

//   sortedTypes.forEach((type) => {
//     const plantsOfType = selectedPlants[type];
//     if (!plantsOfType) return;

//     const typeStyle = typeStyles[type] || { radius: 5, color: 'gray', spacing: 25 };

//     Object.entries(plantsOfType).forEach(([plantId, qty]) => {
//       for (let i = 0; i < qty; i++) {
//         let x, y;
//         let tries = 0;

//         do {
//           // Placement based on shape
//           if (shape === "circle") {
//             const angle = Math.random() * 2 * Math.PI;
//             const radiusLimit = (shapeSize / 2) - typeStyle.radius - BUFFER_PX;
//             const r = Math.sqrt(Math.random()) * radiusLimit;
//             x = shapeSize / 2 + r * Math.cos(angle);
//             y = shapeSize / 2 + r * Math.sin(angle);
//           } else {
//             x = Math.random() * (maxWidth - 2 * (typeStyle.radius + BUFFER_PX)) + typeStyle.radius + BUFFER_PX;
//             y = Math.random() * (maxHeight - 2 * (typeStyle.radius + BUFFER_PX)) + typeStyle.radius + BUFFER_PX;
//           }

//           // Prevent overlap
//           const tooClose = newDots.some((dot) => {
//             const dx = dot.x - x;
//             const dy = dot.y - y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             const minDistance = Math.max(typeStyle.spacing, typeStyle.radius + dot.radius + 2);
//             return distance < minDistance;
//           });

//           // Prevent same species too close
//           const isSameNearby = newDots.some((dot) => {
//             const dx = dot.x - x;
//             const dy = dot.y - y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             return distance < typeStyle.spacing && dot.plantId === plantId;
//           });

//           // Tree/canopy buffer logic
//           const TREE_CANOPY_BUFFER_FEET = 10;
//           const TREE_CANOPY_BUFFER_PX = TREE_CANOPY_BUFFER_FEET * pixelsPerFoot;
//           const tooCloseToCanopy = (type === 'TREE') && newDots.some((dot) => {
//             return dot.type === 'CANOPY' && Math.hypot(dot.x - x, dot.y - y) < TREE_CANOPY_BUFFER_PX;
//           });

//           if (!tooClose && !isSameNearby && !tooCloseToCanopy) break;
//           tries++;
//         } while (tries < 100);

//         newDots.push({
//           x,
//           y,
//           radius: typeStyle.radius,
//           color: plantColors[plantId],
//           plantId,
//           type
//         });
//       }
//     });
//   });

//   setDots(newDots);
// }, [selectedPlants, shape, shapeSize, typeStyles, plantColors, pixelsPerFoot]);




//   return (


//     /* Renders the canvas / stage. */
//     <div style={{ margin: '1rem 0' }}>
//     <div style={{ border: shape !== "circle" ? "2px solid #383838" : "transparent", 
//       margin: '1rem 0', 
//       backgroundColor: shape !== "circle" ? "#fdfff6" : "transparent", 
//       display: "inline-block",
//       maxWidth: "100%",
//       overflowX: "auto" }}>


//     {/* The stage is the plot itself. */}
//     <Stage
//       width={shape === "circle" ? shapeSize : (dots.length > 0 ? Math.max(...dots.map(dot => dot.x + dot.radius)) + 20 : shapeSize)}
//       height={shape === "circle" ? shapeSize : (dots.length > 0 ? Math.max(...dots.map(dot => dot.y + dot.radius)) + 20 : shapeSize)}
//     >


//       {/* Clips the layer to a circle shape. */}
//       <Layer
//         clipFunc={shape === "circle" ? (ctx) => {
//           ctx.beginPath();
//           ctx.arc(shapeSize / 2, shapeSize / 2, shapeSize / 2, 0, Math.PI * 2, false);
//           ctx.closePath();
//         } : undefined}
//       >


//         {/* Creates a circle border. */}
//         {shape === "circle" && (
//           <Circle
//             x={shapeSize / 2}
//             y={shapeSize / 2}
//             radius={shapeSize / 2}
//             stroke="#383838"
//             strokeWidth={2.5}
//             fill="#fdfff6"
//           />
//         )}







//         {/* Renders the plant circles on the canvas. */}
//         {dots.map((dot, i) => (
//           <>
//           <Circle
//             key={`circle-${i}`}
//             x={dot.x}
//             y={dot.y}
//             radius={dot.radius}
//             fill={dot.color}
//             stroke="#383838"
//             strokeWidth={1}
//           />
//           <Text
//           key={`label-${i}`}
//           x={dot.x - Math.max(dot.radius, 10) / 3.5}
//           y={dot.y - Math.max(dot.radius, 10) / 3.5}
//           text={plantIdNumberMap[dot.plantId]?.toString()}
//           fontSize={Math.max(dot.radius, 10)}
//           fill="black"
//           fontStyle="bold"
//         />
//         </>
//         ))}
//       </Layer>
//     </Stage>
//   </div>

//   {/* Legend - shows each plant species with its color and type. */}
//   <div>
//     <h4>Legend</h4>
//     <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//       {Object.entries(plantColors).map(([plantId, color]) => {
//         const type = Object.entries(selectedPlants).find(([type, plants]) =>
//           plants.hasOwnProperty(plantId)
//         )?.[0];

//         return (
//           <li key={plantId} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
//             <div style={{
//               width: 14, height: 14, borderRadius: '50%',
//               backgroundColor: color,
//               marginRight: 8,
//               border: '1px solid #333'
//             }} />
//             <span>{plantMap[plantId]?.plantName || plantId} ({type?.toLowerCase()})</span>
//           </li>
//         );
//       })}
//     </ul>
//   </div>


//   </div>



//   );
// }
