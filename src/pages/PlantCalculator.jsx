import { useState } from "react";
import { forestProfiles } from "../data/forestProfiles";
import { plants, forestType, forestProfileMap } from "../data/plants";
import ForestProfileSelector from "../components/ForestProfileSelector";
import PlantSelector from "../components/PlantSelector";
import Navbar from '../components/Navbar';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import styles from '../mystyle.module.css';



export default function PlantCalculator() {
  const [squareFootage, setSquareFootage] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleCalculate = () => {
    if (!selectedProfile) return {};
    const density = selectedProfile.densities;
    const plantCounts = {};

    for (let type in density) {
      plantCounts[type] = Math.floor((squareFootage / 10) * density[type]);
    }

    return plantCounts;
  };

  const plantCounts = handleCalculate();

  const filteredPlants = selectedProfile
    ? plants.filter((plant) =>
        plant.forestType.includes(forestType[forestProfileMap[selectedProfile.id]])
    )
    : [];


  return (


    
    <div className="p-4">
      <HeaderComp />
      <Navbar />

      <h1 className={styles.subheader}>Plant Calculator</h1>


      <div className={styles.about_content}>
        <p> Input the square footage of your Pocket Forest below.</p>

        <div style={{ marginBottom: "1rem", padding: "0.5rem" }}>
            <input
            type="number"
            placeholder="Enter square footage"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
        />
        </div>
      
        <p>Now, choose the forest type that interests you and best suits your space.</p>

        <ForestProfileSelector
            profiles={forestProfiles}
            selected={selectedProfile}
            onSelect={setSelectedProfile}
        />

        {selectedProfile && (
            <>
            <h2 className="text-xl mt-6">Recommended Plants</h2>
            <ul>
                {Object.entries(plantCounts).map(([type, count]) => (
                <li key={type}>{type}: {count} plants</li>
                ))}
            </ul>

            <PlantSelector plants={filteredPlants} />
            </>
        )}
        </div>
    </div>
  );
}
