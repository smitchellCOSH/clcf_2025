import React from 'react';
import styles from '../components/PlantSelector.module.css';

export default function PlantSelector({ categorizedPlants, selectedPlants, onChangeQuantity, plantCounts }) {
  return (
    <div>
      {Object.entries(categorizedPlants).map(([type, plants]) => {
        const totalSelected = selectedPlants[type]
          ? Object.values(selectedPlants[type]).reduce((a, b) => a + b, 0)
          : 0;

        const maxAllowed = plantCounts[type] || 0;

        return (
          <div key={type}>

            <div className={styles.catTitle}>
              <p>{type} </p>
              <p> ({totalSelected} / {maxAllowed} selected) </p>
              </div>


            <div className={styles.gridContainer}>
              {plants.map((plant) => {
                const qty = (selectedPlants[type] && selectedPlants[type][plant.id]) || 0;

                return (
                  <div key={plant.id} className={styles.plantCard}>
                    <img src={plant.image} alt={plant.plantName} className={styles.plantImage} />
                    <div className={styles.plantName}>{plant.plantName}</div>
                    <p className={styles.plantNotes}>{plant.notes}</p>
                    <p className={styles.plantNotes}>{plant.imgAttribution}</p>

                    <div className={styles.qtyControls}>
                      <button
                        onClick={() => onChangeQuantity(type, plant.id, -1)}
                        disabled={qty === 0}
                      >-</button>

                      <span>{qty}</span>

                      <button
                        onClick={() => onChangeQuantity(type, plant.id, 1)}
                        disabled={totalSelected >= maxAllowed}
                      >+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
