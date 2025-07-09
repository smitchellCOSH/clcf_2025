/* Plot your forest page - Contains the content displayed on the plotting page. */

/* 
Styling:

Some styling is "in-line".

Other basic styling comes from mystyle.module.css file.

Styling for individual components contained in respective component files.

See the import statements for navigation.

*/


/* Imports */
import { useState } from "react";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from '../mystyle.module.css';
import PlantLayout from "../components/PlantLayout";
import GeneratePDFButton from "../components/GeneratePDFButton";



const mockSelectedPlants = {
  CANOPY: { 'oak': 2 },
  TREE: { 'maple': 3 },
  SUBTREE: { 'dogwood': 2 },
  SHRUB: { 'azalea': 4 }
};

const mockPlantCounts = {
  CANOPY: 2,
  TREE: 3,
  SUBTREE: 2,
  SHRUB: 4
};

const mockSquareFootage = 300;



/* Content */
const PlotYourForest = () => {
  const [plotShape, setPlotShape] = useState("square");
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <div className={styles.subheader}>
      Plot Your Forest
      </div>

      <div className={styles.about_content}>

      <p>Use the tool below to simulate how your Pocket Forest will look based on your square footage, 
        forest shape, and selected plants. </p>

        <div>
          <label>Choose plot shape: </label>
          {["square", "rectangle", "circle"].map((s) => (
            <GeneratePDFButton key={s} onClick={() => setPlotShape(s)}>
              {s}
            </GeneratePDFButton>
          ))}
        </div>

        {Object.keys(mockSelectedPlants).length > 0 && (
          <>
            <h3 style={{ marginTop: '2rem' }}>Your Forest Layout</h3>

            <PlantLayout
              selectedPlants={mockSelectedPlants}
              plantCounts={mockPlantCounts}
              squareFootage={mockSquareFootage}
              shape="square"
            />
          </>
        )}



      </div>
      <FooterComp />
    </div>
  );
};

export default PlotYourForest;
