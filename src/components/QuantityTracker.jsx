import React from "react";
import styles from '../components/QuantityTracker.module.css';


export default function QuantityTracker({ plantCounts = {}, selectedPlants = {}, orderedTypes = [] }) {

  return (
    <div className={styles.tracker}>
      <h4>Your Selections</h4>
      {Object.keys(plantCounts).length === 0 ? (
        <p>No plants recommended yet.</p>
      ) : (
        <ul>
          {orderedTypes.map((type) => {
            const maxAllowed = plantCounts[type] || 0;
            const totalSelected = selectedPlants[type]
                ? Object.values(selectedPlants[type]).reduce((a, b) => a + b, 0)
                : 0;

            return (
                <li key={type}>
                {type}: {totalSelected} / {maxAllowed}
                </li>
            );
            })}

        </ul>
      )}
    </div>
  );
}
