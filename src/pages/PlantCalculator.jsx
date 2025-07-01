/* TODO: Add description */






/* Imports */
import { useState } from "react";
import { forestProfiles } from "../data/forestProfiles";
import { plants, forestType, forestProfileMap, plantType } from "../data/plants";
import ForestProfileSelector from "../components/ForestProfileSelector";
import PlantSelector from "../components/PlantSelector";
import Navbar from '../components/Navbar';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import styles from '../mystyle.module.css';



/* Content */
export default function PlantCalculator() {


  /* Tracks variables, incl. square footage input by the user,
  selected forest profile, and the plants selected for each category */

  const [squareFootage, setSquareFootage] = useState(0); // Square footage
  const [selectedProfile, setSelectedProfile] = useState(null); // Selected forest profile
  const [selectedPlants, setSelectedPlants] = useState({}); // Selected plants
  
  
  
  /* Tracks the number of plants selected for each plant type and allows
  the user to increment or decrement the number of plants chosen.
  Prevents the user from going below 0 plants selected and from going over
  the recommended amount of plants based on the square footage input */

  const handleChangeQuantity = (type, plantId, delta) => {

    setSelectedPlants((prev) => { // Sets the selected plants based on the chosen plant type.
    const typeSelection = prev[type] || {}; // Sets the plant type.
    const currentQty = typeSelection[plantId] || 0; // Sets the current quantity
    const newQty = currentQty + delta; // Sets the new quantity based on user control.

    // Calculates the current total selected plants in the plant type excluding the current plant.
    const totalOtherQty = Object.entries(typeSelection)
      .filter(([id]) => id !== plantId)
      .reduce((sum, [, qty]) => sum + qty, 0);

    // Defines the maximum number of plants allowed for each plant type.
    const maxAllowed = plantCounts[type] || 0;

    if (newQty < 0) return prev; // Prevents the user from decrementing below 0.
    if (totalOtherQty + newQty > maxAllowed) return prev; // Prevents the user from exceeding the maximum.


    // Returns the selections.
    return {
      ...prev,
      [type]: {
        ...typeSelection,
        [plantId]: newQty,
      }
    };
  });
};



  /* Handles the plant recommendation calculations using the plant density
  for each forest type and the inputted square footage */
  const handleCalculate = () => {
    if (!selectedProfile) return {};
    const density = selectedProfile.densities;
    const plantCounts = {};

    for (let type in density) {
      plantCounts[type] = Math.floor((squareFootage / 10) * density[type]); // Rounds down.
    }

    return plantCounts;
  };


  /* Calls the calculation function for each plant type. */
  const plantCounts = handleCalculate();


  /* Filters from the plant database the plants selected by the
  forest type. For example, choosing the Dry Prairie type will display
  only Dry Prairie plants */
  const filteredPlants = selectedProfile
    ? plants.filter((plant) =>
        plant.forestType.includes(forestType[forestProfileMap[selectedProfile.id]])
    )
    : [];


  /* Groups the filtered plants into categories based on their plant types */
  const categorizedPlants = {};
  if (filteredPlants.length > 0) { // Error handling.
    Object.keys(plantType).forEach((typeKey) => {
      categorizedPlants[typeKey] = filteredPlants.filter((plant) =>
        plant.plantType.includes(plantType[typeKey])
      );
    });
  }


  /* Rendered layout */
  return (
    <div className="Plant Calculator">

      <HeaderComp />
      <Navbar />


      <div className={styles.about_content}>
        <div className={styles.subheader}>Plant Calculator</div>
        <p>Input the square footage of your Pocket Forest below.</p>

        <div style={{ marginBottom: "1rem", padding: "0.5rem" }}>
          <input className={styles.inputBox}
            type="number"
            placeholder="Enter square footage"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
          />{" "}
          square feet.
        </div>

        <p>Now, choose the forest type that interests you and best suits your space.</p>

        <div style={{padding: "20px"}}>
        <ForestProfileSelector
          profiles={forestProfiles}
          selected={selectedProfile}
          onSelect={setSelectedProfile}
        />
        </div>

        <div className={styles.subheader}>
          Choose your plants
        </div>

        <p>
          Based on your square footage and the forest profile you chose, these
          are the number and types of plants that would best suit your forest.
          Select which plants you would like to include your forest from the list below.
        </p>

        <p>
          While it is acceptable to have preferences, remember that one of the goals of
          Pocket Forestry is promoting biodiversity. Choosing a variety of plants will
          help protect your plants from disease and will make for a more natural forest.
        </p>

        <p className={styles.note_content}>
          Some of the plants below contain notes about special care, edibility, and 
          risk to pets. Please make note of which plants have special features, and do
          additional research before consuming any plants. Additionally, ensure that 
          your plants are thoroughly cleaned before eating.
        </p>


        {/* Shows how many plants are recommended for each forest type once 
        selected based on the inputted square footage. Includes in the layout. */}
        {selectedProfile && (
          <>
            <div>
              {Object.entries(plantCounts).map(([type, count]) => (
                <p key={type}>
                  <strong>{type}</strong>: {count} plants
                </p>
              ))}
            </div>

            <PlantSelector categorizedPlants={categorizedPlants}
              selectedPlants={selectedPlants}
              onChangeQuantity={handleChangeQuantity}
              plantCounts={plantCounts}
            />
          </>
        )}
      </div>
    </div>
  );
}
