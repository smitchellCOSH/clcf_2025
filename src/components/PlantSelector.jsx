export default function PlantSelector({ plants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {plants.map((plant) => (
        <div key={plant.id} className="border rounded p-4">
          <img
            src={plant.image}
            alt={plant.name}
            className="h-32 w-full object-cover mb-2"
          />
          <h4 className="font-bold">{plant.name}</h4>
          <p className="text-sm text-gray-500">
            {plant.tags?.join(", ") ?? "No tags"}
          </p>
        </div>
      ))}
    </div>
  );
}
