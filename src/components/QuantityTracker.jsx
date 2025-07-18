/* 

QuantityTracker.jsx. This component displays a global floating
quantity tracker for the plant calculator, allowing the user to more easily
view the quantity of plants they have selected.

*/

/* Styling contained in QuantityTracker.module.css */


/* Imports */
import React, { useState, useEffect } from 'react';
import styles from '../components/QuantityTracker.module.css';


/* Content */
export default function QuantityTracker({ plantCounts = {}, selectedPlants = {}, orderedTypes = [] }) {
  const [hideTracker, setHideTracker] = useState(false);

  /* Hides the tracker when the footer is in view. */
  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideTracker(entry.isIntersecting); // Hide tracker if footer is visible
        console.log("Footer intersecting:", entry.isIntersecting);

      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);



  return (

    <div className={`${styles.tracker} ${hideTracker ? styles.hide : ""}`}>

      {/* Renders the floating selection box. */}
        <h4>Your Selections</h4>

        {/* Displays "no plants recommended" if the user has not selected a forest type or 
        submitted their input values. */}
        {Object.keys(plantCounts).length === 0 ? (
          <p>No plants recommended yet.</p>
        ) : (

          /* Calculates recommended maximum values and displays quantity counts for each
          plant type category. */
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
