

/* Imports */
import { Stage, Layer, Circle, Text, Rect } from 'react-konva'; // Konva components.
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




const PlantLayout = forwardRef(({ width, height, plotShape, plantPoints }, ref) => {
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
});

export default PlantLayout;

