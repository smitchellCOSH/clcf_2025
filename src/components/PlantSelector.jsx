/* 

PlantSelector.jsx. This component allows the user to select plants from the list based
on the selected forest profile and stores the selections and 
data for use in the plant calculator.

*/

/* Styling contained in PlantSelector.module.css */



/* Imports */
import React, { useState } from 'react';
import styles from '../components/PlantSelector.module.css';



/* Content */
export default function PlantSelector({ categorizedPlants, selectedPlants, onChangeQuantity, plantCounts }) {
  const [expandedSections, setExpandedSections] = useState({}); // Track plant type selections expanded/collapsed state.

  /* Toggle the expanded/collapsed section on/off. */
  const toggleSection = (type) => {
    setExpandedSections((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };


  return (
    <div>

      {/* Loops through each plant category. */}
      {Object.entries(categorizedPlants).map(([type, plants]) => {

        {/* Calculates the total selected and the maximum number of plants allowed by category,
          based on the forest type and user square footage input. */}
        const totalSelected = selectedPlants[type]
          ? Object.values(selectedPlants[type]).reduce((a, b) => a + b, 0)
          : 0;

        const maxAllowed = plantCounts[type] || 0;
        const isExpanded = expandedSections[type];

        return (
          <div key={type} style={{marginBottom: "1.5rem" }}>

            {/* Collapsible section header. */}
            <div
              className={styles.catHeaderRow}
              onClick={() => toggleSection(type)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.catTitle}>
                {isExpanded ? "▼" : "▶"} {type}
              </div>
              <div className={styles.catCount}>
                {totalSelected} / {maxAllowed} selected
              </div>
            </div>

            {/* Conditionally renders the plant cards depending on toggle. */}

            {/* Renders each plant card. */}
            {isExpanded && (
              <div className={styles.gridContainer}>

              {/* For each plant, get the quantity selected. If no plants are selected, default to 0. */}
              {plants.map((plant) => {
              const qty = (selectedPlants[type] && selectedPlants[type][plant.id]) || 0;

                return (

                  /* Displays items inside each card: plant name, plant image, plant notes, image attribution. */
                    <div key={plant.id} className={styles.plantCard}>
                    <img src={plant.image} alt={plant.plantName} className={styles.plantImage} />
                    <div className={styles.plantName}>{plant.plantName}</div>
                    <p className={styles.plantNotes}>{plant.notes}</p>
                    <p className={styles.plantNotes}>{plant.imgAttribution}</p>

                    {/* Displays the button for each plant card and controls the quantity selections. */}
                    <div className={styles.qtyControls}>
                      <button
                        /* Decreases the quantity but only if the quantity is greater than 0. */
                        onClick={() => onChangeQuantity(type, plant.id, -1)}
                        disabled={qty === 0}
                      >-</button>

                      <span>{qty}</span>

                      <button
                        /* Increases the quantity but only if the quantity is less than the maximum allowed. */
                        onClick={() => onChangeQuantity(type, plant.id, 1)}
                        disabled={totalSelected >= maxAllowed}
                      >+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          </div>
        );
      })}
    </div>
  );
}
