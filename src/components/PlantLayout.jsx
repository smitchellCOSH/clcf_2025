/* 
Controls the logic and Konva graphical integration for the Plant Layout feature.
Produces a layout with accurate spacing for 3 different plot shapes based on the
user's input square footage and plant selections.
*/


/* Styling is in-line or based in other modules. */


/* Imports */
import { Stage, Layer, Circle, Text, Rect, Line } from 'react-konva'; // Konva components.
import { useEffect, useState, useMemo } from 'react';
import React, { forwardRef } from 'react';
import { getColorForPlantId } from './colorUtils';



/* Content */
export function generatePlantLayout({
    width,
    height,
    plotShape,
    squareFootage,
    selectedPlants,
    spacingRules
  }) {

  /* Set constants. */
  const buffer = 5; // 5 square foot buffer around plot.
  const pixelsPerFoot = 5; // Converts feet to pixels for square footage conversions.
  const rectPixelsPerFoot = plotShape === "rectangle" // Calculates pixels per foot for the rectangle plot.
    ? Math.sqrt((width * height) / squareFootage)
    : pixelsPerFoot;
  const plantDots = []; // Initializes plant positions list.

  const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y); // Helper function for Euclidean distance between 2 points.

  /* Loops over the selected plants and assigns a unique color to each unique plant. */
  for (let type in selectedPlants) {
  for (let plantId in selectedPlants[type]) {
    const qty = selectedPlants[type][plantId]; // Gets the quantity of each plant.
    const color = getColorForPlantId(plantId); // Assigns the color.

    /* Counters for placement attempts and successful placements. */
    let attempts = 0;
    let placed = 0;

    /* Loop that attempts to place a plant randomly within the canvas area. */
    while (placed < qty && attempts < 10000) {
      attempts++;
      const x = Math.random() * (width - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;
      const y = Math.random() * (height - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;

      /* Checks that points are within the bounds of the circular plot. */
      const isInPlot = (() => {
        if (plotShape === "circle") {
          return distance({ x, y }, { x: width / 2, y: height / 2 }) <= width / 2 - buffer * pixelsPerFoot;
        } else if (plotShape === "rectangle") {
          return (
            x >= buffer * pixelsPerFoot &&
            x <= width - buffer * pixelsPerFoot &&
            y >= buffer * pixelsPerFoot &&
            y <= height - buffer * pixelsPerFoot
          );
        } else if (plotShape === "square") {
          // Same logic as rectangle, but may help future-proof changes.
          return (
            x >= buffer * pixelsPerFoot &&
            x <= width - buffer * pixelsPerFoot &&
            y >= buffer * pixelsPerFoot &&
            y <= height - buffer * pixelsPerFoot
          );
        }
      })();


      /* Only continues if the dot is within the bounds of the plot. */
      if (!isInPlot) continue;

      /* Checks proximity rules: general spacing, same-type spacing, and tree-to-tree spacing. */
      const tooClose = plantDots.some((p) => {
        const d = distance(p, { x, y });
        return (
          d < spacingRules.minSpacing * pixelsPerFoot ||
          (p.plantId === plantId && d < (spacingRules.sameTypeSpacing?.[type] || 0) * pixelsPerFoot) ||
          (isTreeType(p.type, type) && d < spacingRules.treeToTree * pixelsPerFoot)
        );
      });

      /* Only continues if the dot follows all the proximity rules. */
      if (tooClose) continue;

      /* Adds the dot to the final list if it follows the rules above. */
      plantDots.push({
        x,
        y,
        type,
        plantId,
        color,
        radius: getScaledRadius(type, squareFootage)
      });

      /* Increments the "placed" counter. */
      placed++;
    }

    /* Fallback: forcibly place dot ignoring if the dots cannot be placed in ideal
    number of attempts. */
    if (placed < qty) {
      for (let i = placed; i < qty; i++) {
        let x, y;
        let attempts = 0;

        /* Random placement. */
        do {
          x = Math.random() * (width - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;
          y = Math.random() * (height - 2 * buffer * pixelsPerFoot) + buffer * pixelsPerFoot;
          attempts++;
        } while (
          plotShape === "circle" && // Accounts for placement in the circular plot.
          distance({ x, y }, { x: width / 2, y: height / 2 }) > width / 2 - buffer * pixelsPerFoot &&
          attempts < 1000
        );

        /* Prepares the dots for rendering. */
        plantDots.push({
          x,
          y,
          type,
          plantId,
          color,
          radius: getScaledRadius(type, squareFootage),
          forced: true
        });
      }
    }

  }
}

  /* Returns the final list of plant dots. */
  return plantDots;
}

  // /* Helper function that selects a color to represent a plant on the layout 
  // based on each plant's ID. */
  // export function getColorForPlantId(plantId) {
    
  //   /* Ensures a range of colors. */
  //   const goldenAngle = 137.508;
  //   let hash = 0;
  //   for (let i = 0; i < plantId.length; i++) {
  //     hash = plantId.charCodeAt(i) + ((hash << 5) - hash);
  //   }

  //   const hue = (hash * goldenAngle) % 360;
  //   return `hsl(${hue}, 70%, 50%)`; // Ensures contrast between colors.
  // }


  /* Assigns a radius for each plant type. */
  function getRadiusForType(type) {
    return {
      CANOPY: 8,
      TREE: 6,
      SUBTREE: 4,
      SHRUB: 3
    }[type] || 2;
  }

  /* Helper function returns true if both types are either "canopy" or "tree".
  for tree-to-tree spacing rules. */
  function isTreeType(a, b) {
    const treeTypes = ["CANOPY", "TREE"];
    return treeTypes.includes(a) && treeTypes.includes(b);
  }


  /* Modules plant dot size based on input square footage. */
  function getScaledRadius(type, squareFootage) {
    const baseSize = getRadiusForType(type);

    // 30 - 1000 sq. ft. range.
    const minSize = 2.5;
    const maxSize = 8;

    const clamped = Math.min(1000, Math.max(30, squareFootage));
    const factor = 1 - (clamped - 30) / (1000 - 30);
    const scaledSize = minSize + (maxSize - minSize) * factor;

    return Math.max(1, baseSize * (scaledSize / maxSize));
  }




/* Main rendering block using Konva for graphic support. */
const PlantLayout = forwardRef(({ width, height, plotShape, plantPoints }, ref) => {
  
  /* Maps unique Plant IDs to numbers for annotations on the Layout. */
  const plantIdToNumber = useMemo(() => {
    const map = {};
    let num = 1;
    for (const point of plantPoints) {
      if (!map[point.plantId]) {
        map[point.plantId] = num++;
      }
    }
    return map;
  }, [plantPoints]);




  return (
    <Stage ref={ref} width={width} height={height}>

      <Layer>
        {/* Background Plot Shapes */}
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



      {/* Render plant dots with proper placement. */}
      {plantPoints.map((plant, i) => (

        
      <React.Fragment key={i}>
        <Circle
          x={plant.x}
          y={plant.y}
          radius={plant.radius}
          fill={plant.color}
          stroke="#383838"
          strokeWidth={1}
        />

        {/* Annotation line: from plant center to text */}
        <Line
          points={[plant.x, plant.y, plant.x + 8, plant.y + 8]}
          stroke="#383838"
          strokeWidth={1}
          lineCap="round"
          lineJoin="round"
          dash={[4, 2]}
        />

        {/* Renders the annotation number text. */}
        <Text
          text={`${plantIdToNumber[plant.plantId]}`}
          x={plant.x + 5}
          y={plant.y + 5}
          fontSize={Math.max(plant.radius * 2, 15)} // Ensures legibility.
          fontStyle="bold"
          fill="#383838"
          stroke="#383838"
          strokeWidth={0.5}
          align="center"
          opacity={0.85} // Add a small amount of transparency for legibility when there are many plants.
        />
      </React.Fragment>
      ))}


    </Layer>
  </Stage>
);
});

export default PlantLayout;

