import { Stage, Layer, Circle } from 'react-konva';
import { useEffect, useState } from 'react';


const typeStyles = {
  CANOPY: { radius: 15, color: '#4a7c59' },
  TREE: { radius: 12, color: '#87a96b' },
  SUBTREE: { radius: 9, color: '#a2c523' },
  SHRUB: { radius: 6, color: '#e2eaa3' },
};

const shapeSize = 500; 

export default function PlantLayout({ selectedPlants, plantCounts, squareFootage, shape = "square" }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const newDots = [];

    Object.entries(selectedPlants).forEach(([type, plantMap]) => {
      const typeStyle = typeStyles[type] || { radius: 5, color: 'gray' };

      Object.entries(plantMap).forEach(([plantId, qty]) => {
        for (let i = 0; i < qty; i++) {
  
          let x, y;

          if (shape === "circle") {
            const angle = Math.random() * 2 * Math.PI;
            const r = Math.random() * (shapeSize / 2 - typeStyle.radius);
            x = shapeSize / 2 + r * Math.cos(angle);
            y = shapeSize / 2 + r * Math.sin(angle);
          } else {
            x = Math.random() * (shapeSize - 2 * typeStyle.radius) + typeStyle.radius;
            y = Math.random() * (shapeSize - 2 * typeStyle.radius) + typeStyle.radius;
          }

          newDots.push({
            x,
            y,
            ...typeStyle,
            plantId,
          });
        }
      });
    });

    setDots(newDots);
  }, [selectedPlants, shape]);

  return (
    <div style={{ border: '1px solid gray', margin: '1rem 0' }}>
      <Stage width={shapeSize} height={shapeSize}>
        <Layer>
          {dots.map((dot, i) => (
            <Circle
              key={i}
              x={dot.x}
              y={dot.y}
              radius={dot.radius}
              fill={dot.color}
              stroke="#333"
              strokeWidth={0.5}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
