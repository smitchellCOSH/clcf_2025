/* 

ForestProfileSelector.jsx. This component allows the user to select a forest
profile from the list and stores the selection and data for use in the plant calculator.

*/

/* Styling contained in ForestProfileSelector.module.css */



import styles from './ForestProfileSelector.module.css';


export default function ForestProfileSelector({ profiles, selected, onSelect }) { /* Accepts array of profiles, currently selected forest, callback function */
  return (
    <div className={styles.responsiveGrid}>

      {profiles.map(profile => ( /* Iterates over forest profiles array */
        <div
          key={profile.id} /* Each item is a div with the key determined by the profile ID */
          className={`${styles.gridItem} ${selected?.id === profile.id ? styles.selected : ""}`}
          onClick={() => onSelect?.(profile)} /* Calls the function when clicked */
        >
          <img src={profile.image} alt={profile.name} /> {/* Displays the image. */}

          <p className={styles.gridItemTitle}> {profile.name} </p> {/* Displays the profile's name.*/}

          <p className={styles.gridItemDesc} >{profile.description} </p> {/* Display's the profile's description. */}
        </div>

      ))}
    </div>
  );
}