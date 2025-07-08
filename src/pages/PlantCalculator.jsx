/* 

Plant Calculator page - Contains the content displayed on the Plant Calculator page.
Also, interfaces with the ForestProfileSelector and PlantSelector to get
the user's choices.

*/

/* 
Styling:

Some styling is "in-line".

Other basic styling comes from mystyle.module.css file.

Styling for individual components contained in respective component files.

See the import statements for navigation.

*/




/* Imports */
import { useState } from 'react';
import { forestProfiles } from '../data/forestProfiles';
import { plants, forestType, forestProfileMap, plantType } from '../data/plants';
import ForestProfileSelector from '../components/ForestProfileSelector';
import PlantSelector from '../components/PlantSelector';
import Navbar from '../components/Navbar';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import styles from '../mystyle.module.css';
import { jsPDF } from "jspdf";
import BasicButton from "../components/BasicButton";
import GeneratePDFButton from "../components/GeneratePDFButton";
import logoBase64 from '../data/logoBase64';
import ScrollToTop from "../components/ScrollToTop";





/* Content */
export default function PlantCalculator() {


  /* Tracks variables, incl. square footage input by the user,
  selected forest profile, and the plants selected for each category */
  const [squareFootage, setSquareFootage] = useState(0); // Square footage.
  const [selectedProfile, setSelectedProfile] = useState(null); // Selected forest profile.
  const [selectedPlants, setSelectedPlants] = useState({}); // Selected plants.


/* ********************************************************************* */

  /* Ensures the plantTypes are ordered by their height ranges */
  const orderedTypes = Object.entries(plantType)
      .sort((a, b) => a[1] - b[1]) // Sorts the plantTypes by numeric order.
      .map(([type]) => type);      // Extracts the keys.


  /* Ensures the Forest Profiles are displayed in a specific order. */
    /* Defines the order to display. */
    const profileOrder = [
    "Oak Forest",
    "Pollinator Forest",
    "Dry Prairie",
    "Wet Prairie",
    "Challenged Site Forest"
    ];

    /* Sorts the profiles. */
    const sortedProfiles = profileOrder
      .map((name) => forestProfiles.find((p) => p.name === name))
      .filter(Boolean);




/* ********************************************************************* */
  
  /* Tracks the number of plants selected for each plant type and allows
  the user to increment or decrement the number of plants chosen.
  Prevents the user from going below 0 plants selected and from going over
  the recommended amount of plants based on the square footage input */
  const handleChangeQuantity = (type, plantId, delta) => {

    setSelectedPlants((prev) => { // Sets the selected plants based on the chosen plant type.
    const typeSelection = prev[type] || {}; // Sets the plant type.
    const currentQty = typeSelection[plantId] || 0; // Sets the current quantity.
    const newQty = currentQty + delta; // Sets the new quantity based on user control.

    // Calculates the current total selected plants in the plant type excluding the current plant.
    const totalOtherQty = Object.entries(typeSelection)
      .filter(([id]) => id !== plantId)
      .reduce((sum, [, qty]) => sum + qty, 0);

    // Defines the maximum number of plants allowed for each plant type.
    const maxAllowed = plantCounts[type] || 0;

    // Prevents the user from decrementing below 0 or exceeding the maximum.
    if (newQty < 0 || totalOtherQty + newQty > maxAllowed) return prev; 


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




/* ********************************************************************* */


  /* Handles the plant recommendation calculations using the plant density
  for each forest type and the inputted square footage */
  const handleCalculate = () => {
    if (!selectedProfile) return {};
    const density = selectedProfile.densities;
    const plantCounts = {};
    const alwaysInclude = ["SHRUB", "SUBTREE"];

    for (let type in density) {
      const rawCount = (squareFootage / 10) * density[type];

      // Ensures a minimum of at least 1 shrub & sub-tree for small plots, only for specified plant types.
      plantCounts[type] = squareFootage > 0 && density[type] > 0 &&
        rawCount < 1 && alwaysInclude.includes(type) ? 1 : Math.floor(rawCount);
      }

    return plantCounts;
  };


  /* Calls the calculation function for each plant type. */
  const plantCounts = handleCalculate();



  /* ********************************************************************* */

  /* Filters from the plant database the plants selected by the
  forest type. For example, choosing the Dry Prairie type will display
  only Dry Prairie plants. */
  const filteredPlants = selectedProfile
    ? plants.filter((plant) =>
        plant.forestType.includes(forestType[forestProfileMap[selectedProfile.id]])
    )
    : [];


  /* Groups the filtered plants into categories based on their plant types. */
  const categorizedPlants = {};
  if (filteredPlants.length > 0) { // Error handling.
    Object.keys(plantType).forEach((typeKey) => {
      categorizedPlants[typeKey] = filteredPlants.filter((plant) =>
        plant.plantType.includes(plantType[typeKey])
      );
    });
  }




  /* ********************************************************************* */

  /* Generates a PDF using jsPDF and plant selections */
  const generatePDF = () => {

    // Generates the PDF.
    const doc = new jsPDF({
      unit: "in",
      format: [8.5, 11]
    });

    const pageWidth = doc.internal.pageSize.getWidth(); // Gets the width of the page for centering.
    let y = 0.2;

    // Adds the logo to the top of the PDF.
    doc.addImage(logoBase64, "PNG", 0.5, y, 2.5, 1); // (x, y, width, height)

    // Adds the title to the top of the PDF.
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.text("Pocket Forests Project", 3.8, y + 0.6); // Sets the x and y position.

    doc.line(0, 1.3, 8.5, 1.3, "F")
    y += 1.5;


    // Forest Type display.
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24)
    const prof = "Your Forest Type — " + selectedProfile.name;
    const textWidth = doc.getTextWidth(prof);
    const x = (pageWidth - textWidth) / 2; // Centers the text.
    doc.text(prof, x, y);
    y += 0.6;


    // Adds forest type description.
    doc.setFontSize(15) // Font size for the forest description.
    doc.setFont("helvetica", "normal"); // Font type for the forest description.
    const descriptionLines = doc.splitTextToSize(selectedProfile.description, 7.5);
    doc.text(descriptionLines, 0.5, y);
    y += descriptionLines.length * 0.3;


    // Adds a plant selection subtitle.
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24)
    doc.text("Your Plant Selections", 2.8, y); // Centers it.
    y += 0.8;

    let somethingAdded = false; // Ensures no plants are added to begin.
    doc.setFontSize(15) // Font size for each plant entry.
    doc.setFont("helvetica", "normal"); // Font type set for plants list.


    // Allows excess selections to spill onto a new page.
    const lineHeight = 0.5;
    const bottomMargin = 0.5;
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxY = pageHeight - bottomMargin;

    // Lists each plant selected.
    Object.entries(selectedPlants).forEach(([type, plantMap]) => {
    Object.entries(plantMap).forEach(([plantId, qty]) => {
      const plant = plants.find((p) => p.id === plantId);
      if (plant && qty > 0) {
        const line = `${plant.plantName} (${plant.scientificName}) — ${qty}`;

        if (y + lineHeight > maxY) {
          doc.addPage();
          y = 0.8;
        }

        doc.text(line, 0.5, y);
        y += lineHeight;
        somethingAdded = true;  // Updates to true once a plant has been selected.
      }
    });
  });

  // Displays if a user generates a PDF without selecting any plants.
  if (!somethingAdded) {
    doc.text("No plants selected.", 0.5, y);
  }

  doc.save("your_plant_list.pdf");
};




/* ********************************************************************* */

  /* Clears selected plant quantities for a "Clear all" button */
  const clearSelections = () => {
    setSelectedPlants({});
  };




  /* Rendered layout */
  return (
    <div className="Plant Calculator">

      <HeaderComp />
      <Navbar />


      <div className={styles.about_content}>
        <div className={styles.subheader}>Plant Calculator</div>

          <div style={{ marginBottom: "0.8rem", padding: "0.2rem" }}>
            Input the square footage of your Pocket Forest:
            <input className={styles.inputBox}
              type="number"
              min="0"
              placeholder="Enter square footage"
              value={squareFootage}
              onChange={(e) => {
                let usrinp = e.target.value;
                usrinp = Math.abs(usrinp);
                usrinp = Number.parseFloat(usrinp, 10);
                if (!isNaN(usrinp) && usrinp >= 0) {
                setSquareFootage(usrinp.toString());
              }
                let cleanedStr = usrinp.toString().replace(/^0+(?=\d)/, "");

                setSquareFootage(cleanedStr)}}
            />
            {" "}
            square feet.
          </div>

        <p>
          Now, choose the forest type that interests you and best suits your space.
        </p>


        <div style={{padding: "20px"}}>
        <ForestProfileSelector
          profiles={sortedProfiles}
          selected={selectedProfile}
          onSelect={setSelectedProfile}
        />
        </div>


        <div className={styles.result_content}>
              <p>
                Below is the number of each type of plant you will need for your
                Pocket Forest space.
              </p>
              <div className={styles.plantCountRow}>
                {orderedTypes.map((type) => (
                  <div key={type} className={styles.plantCountItem}>
                    <span className={styles.plantCountBubble}>
                      <strong>{type}:</strong> {plantCounts[type] || 0} plants
                    </span>
                  </div>
                ))}
              </div>

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
          Some of the plants listed require special care, or have notes on their edibility
          and potential risk to pets. Please make note of which plants have special 
          features, and do additional research before consuming any of the plants in your forest.
          Additionally, ensure that your plants are thoroughly cleaned before eating.
        </p>


        {/* Shows how many plants are recommended for each forest type once 
        selected based on the inputted square footage. Includes them in the layout. */}
        {selectedProfile && (
          <>

            <PlantSelector categorizedPlants={categorizedPlants}
              selectedPlants={selectedPlants}
              onChangeQuantity={handleChangeQuantity}
              plantCounts={plantCounts}
            />
          </>

        )}

        <div style={{ marginTop: "1rem" }}>
          <GeneratePDFButton onClick={clearSelections}>
            Clear All Selections
          </GeneratePDFButton>
        </div>


        {Object.keys(selectedPlants).length > 0 && (
            <div style={{ marginTop: "2rem" }}>

              <GeneratePDFButton onClick={generatePDF}>
                Download your plant list as a PDF
              </GeneratePDFButton>

            </div>
          )}

        <div style={{ marginTop: "2rem" }}>
          <BasicButton to="/Resources">Resources</BasicButton>
          <ScrollToTop />
        </div>
      </div>


      <FooterComp />
    </div>
  );
}


