export function getColorForPlantId(plantId) {
  const goldenAngle = 137.508;
  let hash = 0;
  for (let i = 0; i < plantId.length; i++) {
    hash = plantId.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = (hash * goldenAngle) % 360;
  return `hsl(${hue}, 70%, 50%)`;
}