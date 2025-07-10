

/* Imports */
import { Stage, Layer, Circle } from 'react-konva'; // Konva components.
import { useEffect, useState, useMemo } from 'react';
import { plants } from '../data/plants';



/* Constants */

/* Defines plant type specifications. 

Radius: The size of each dot on the canvas for each plant type.
Spacing: The minimum distance between plants of this type.
Color: TODO: Remove?

*/
const typeStyles = {
  CANOPY: { radius: 15, color: '#4a7c59', spacing: 60 }, 
  TREE: { radius: 12, color: '#87a96b', spacing: 45 },
  SUBTREE: { radius: 9, color: '#a2c523', spacing: 30 },
  SHRUB: { radius: 6, color: '#e2eaa3', spacing: 20 },
};



/* Generates a unique but consistent color for each individual
plant ID. Based on the hash of the plant ID. */
const generateColorFromId = (id) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 60%, 60%)`;
};


/* Creates a lookup map from the plant database array. */
const plantMap = plants.reduce((map, plant) => {
  map[plant.id] = plant;
  return map;
}, {});




/* ************************************************************************* */

/* Content */
export default function PlantLayout({ selectedPlants, squareFootage, shape = "square" }) {
  
  // Error handling: If no square footage has been input by the user, show instructions. */
  if (!squareFootage) {
    return <div>Please enter your square footage above.</div>;
  }


  /* Initializes state and size calculations. */
  const [dots, setDots] = useState([]); // Array of positioned plant circles.
  
  /* Initial width/height for the plot shapes. Derived from square footage. Minimum of 300 pixels. */
  const shapeSize = useMemo(() => {
    return Math.max(Math.sqrt(squareFootage || 0) * 5, 300); 
  }, [squareFootage]);

  /* Computes a consistent color for each individual plant species and stores it
  using 'useMemo()'. */
  const plantColors = useMemo(() => {
      const map = {};
      Object.entries(selectedPlants).forEach(([type, plantMap]) => {
        Object.keys(plantMap).forEach((plantId) => {
          map[plantId] = generateColorFromId(plantId);
        });
      });
      return map;
    }, [selectedPlants]);

  /* Handles dot generation. */
  useEffect(() => {

      /* Initializes variables. */
      const newDots = [];
      let maxWidth = shapeSize;
      let maxHeight = shapeSize;

      /* Changes the canvas size if the shape is rectangle. */
      if (shape === "rectangle") {
        maxWidth = shapeSize * 1.6;
        maxHeight = shapeSize * 0.88;
      }

      /* For each plant type and species, place dots. */
      Object.entries(selectedPlants).forEach(([type, plantMap]) => {
        const typeStyle = typeStyles[type] || { radius: 5, color: 'gray', spacing: 25 };

        Object.entries(plantMap).forEach(([plantId, qty]) => {
          for (let i = 0; i < qty; i++) {
            let x, y;
            let tries = 0;


            do {
              /* Placement determined by the plot shape using coordinates. */

              /* Uniform random point within the circle. */
              if (shape === "circle") {
                  const angle = Math.random() * 2 * Math.PI;
                  const radiusLimit = (shapeSize / 2) - typeStyle.radius;
                  const r = Math.sqrt(Math.random()) * radiusLimit; // ensures uniform dot distribution
                  x = shapeSize / 2 + r * Math.cos(angle);
                  y = shapeSize / 2 + r * Math.sin(angle);
                }

              /* Rectangle and square: random x, y within the dimensions. */
              else if (shape === "rectangle") {
                x = Math.random() * (maxWidth - 2 * typeStyle.radius) + typeStyle.radius;
                y = Math.random() * (maxHeight - 2 * typeStyle.radius) + typeStyle.radius;
              } else {
                // Square is the default.
                x = Math.random() * (shapeSize - 2 * typeStyle.radius) + typeStyle.radius;
                y = Math.random() * (shapeSize - 2 * typeStyle.radius) + typeStyle.radius;
                maxWidth = shapeSize;
                maxHeight = shapeSize;
              }

              /* Ensures dots are properly spaced. */
              const tooClose = newDots.some((dot) => {
                const dx = dot.x - x;
                const dy = dot.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < typeStyle.spacing;
              });

              /* Prevents the same species from being next to each other. */
              const isSameNearby = newDots.some((dot) => {
                const dx = dot.x - x;
                const dy = dot.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < typeStyle.spacing && dot.plantId === plantId;
              });

              if (!tooClose && !isSameNearby) break;

              tries++;
            } while (tries < 100); // Avoid infinite loops.

            newDots.push({
              x,
              y,
              radius: typeStyle.radius,
              color: plantColors[plantId],  // Species-based dot color.
              plantId,
              type
            });
          }
        });
      });

      /* Stores the result dots. */
      setDots(newDots);
    }, [selectedPlants, shape]);


  return (
    // <div style={{ border: '4px solid #383838', margin: '1rem 0', backgroundColor: "#fdfff6" }}>
    //   <Stage width={dots.length > 0 ? Math.max(...dots.map(dot => dot.x + dot.radius)) + 20 : shapeSize}
    //    height={dots.length > 0 ? Math.max(...dots.map(dot => dot.y + dot.radius)) + 20 : shapeSize}>
    //     <Layer>
    //       {dots.map((dot, i) => (
    //         <Circle
    //           key={i}
    //           x={dot.x}
    //           y={dot.y}
    //           radius={dot.radius}
    //           fill={dot.color}
    //           stroke="#383838"
    //           strokeWidth={1}
    //         />
    //       ))}
    //     </Layer>
    //   </Stage>

    //   <div style={{margin: "2rem"}}>
    //       <div style={{ marginTop: '1rem' }}>
    //   <h4>Legend</h4>
    //   <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
    //     {Object.entries(plantColors).map(([plantId, color]) => {
    //       // Find plant type (first match in selectedPlants)
    //       const type = Object.entries(selectedPlants).find(([type, plants]) =>
    //         plants.hasOwnProperty(plantId)
    //       )?.[0];

    //       return (
    //         <li key={plantId} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
    //           <div style={{
    //             width: 14, height: 14, borderRadius: '50%',
    //             backgroundColor: color,
    //             marginRight: 8,
    //             border: '2px solid #383838'
    //           }} />
    //           <span>{plantMap[plantId]?.plantName || plantId} ({type})</span>


    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>

    /* Renders the canvas / stage. */
    <div style={{ margin: '1rem 0' }}>
    <div style={{ border: '2px solid #383838', margin: '1rem 0', backgroundColor: "#fdfff6", display: "inline-block" }}>
    
    {/* The stage is the plot itself. */}
    <Stage
      width={shape === "circle" ? shapeSize : (dots.length > 0 ? Math.max(...dots.map(dot => dot.x + dot.radius)) + 20 : shapeSize)}
      height={shape === "circle" ? shapeSize : (dots.length > 0 ? Math.max(...dots.map(dot => dot.y + dot.radius)) + 20 : shapeSize)}
    >

      {/* Clips the layer to a circle shape. */}
      <Layer
        clipFunc={(ctx) => {
          ctx.beginPath();
          ctx.arc(shapeSize / 2, shapeSize / 2, shapeSize / 2, 0, Math.PI * 2, false);
          ctx.closePath();
        }}
      >

        {/* Creates a circle border. */}
        {shape === "circle" && (
          <Circle
            x={shapeSize / 2}
            y={shapeSize / 2}
            radius={shapeSize / 2}
            stroke="#383838"
            strokeWidth={1}
          />
        )}

        {/* Renders the plant circles on the canvas. */}
        {dots.map((dot, i) => (
          <Circle
            key={i}
            x={dot.x}
            y={dot.y}
            radius={dot.radius}
            fill={dot.color}
            stroke="#383838"
            strokeWidth={1}
          />
        ))}
      </Layer>
    </Stage>
  </div>

  {/* Legend - shows each plant species with its color and type. */}
  <div>
    <h4>Legend</h4>
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {Object.entries(plantColors).map(([plantId, color]) => {
        const type = Object.entries(selectedPlants).find(([type, plants]) =>
          plants.hasOwnProperty(plantId)
        )?.[0];

        return (
          <li key={plantId} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              backgroundColor: color,
              marginRight: 8,
              border: '1px solid #333'
            }} />
            <span>{plantMap[plantId]?.plantName || plantId} ({type?.toLowerCase()})</span>
          </li>
        );
      })}
    </ul>
  </div>


  </div>



  );
}
