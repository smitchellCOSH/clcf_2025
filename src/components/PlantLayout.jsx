

/* Imports */
import { Stage, Layer, Circle, Text, Rect, Line } from 'react-konva'; // Konva components.
import { useEffect, useState, useMemo } from 'react';
import { plants } from '../data/plants';
import GeneratePDFButton from './GeneratePDFButton';
import React, { forwardRef } from 'react';




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
  // Use golden angle to ensure spread
  const goldenAngle = 137.508;
  let hash = 0;
  for (let i = 0; i < plantId.length; i++) {
    hash = plantId.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = (hash * goldenAngle) % 360;
  return `hsl(${hue}, 70%, 50%)`; // Higher contrast than 60/60
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
  const baseSize = getRadiusForType(type);

  // Assume 30–1000 sq ft range
  const minSize = 2.5;
  const maxSize = 8;

  const clamped = Math.min(1000, Math.max(30, squareFootage));
  const factor = 1 - (clamped - 30) / (1000 - 30); // from 1 to 0
  const scaledSize = minSize + (maxSize - minSize) * factor;

  return Math.max(1, baseSize * (scaledSize / maxSize));
}





const PlantLayout = forwardRef(({ width, height, plotShape, plantPoints }, ref) => {
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
  <React.Fragment key={i}>
    <Circle
      x={plant.x}
      y={plant.y}
      radius={plant.radius}
      fill={plant.color}
      stroke="#383838" // dark border for contrast
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

    <Text
      text={`${plantIdToNumber[plant.plantId]}`}
      x={plant.x + 5}
      y={plant.y + 5}
      fontSize={Math.max(plant.radius * 2, 15)} // ensures legibility
      fontStyle="bold"
      fill="#383838"
      stroke="#3838383"
      strokeWidth={0.5}
      align="center"
    />
  </React.Fragment>
))}


      </Layer>
    </Stage>
  );
});

export default PlantLayout;

