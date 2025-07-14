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
import { useEffect } from 'react';
import PlantLayout from '../components/PlantLayout';
import { generatePlantLayout } from '../components/PlantLayout';
import { getColorForPlantId } from '../components/PlantLayout';
import { useMemo } from 'react';
import { useRef } from 'react';









/* Content */
export default function PlantCalculator() {


  /* Tracks variables, incl. square footage input by the user,
  selected forest profile, and the plants selected for each category */
  const [squareFootage, setSquareFootage] = useState(0); // Square footage.
  const [selectedProfile, setSelectedProfile] = useState(null); // Selected forest profile.
  const [selectedPlants, setSelectedPlants] = useState({}); // Selected plants.
  const [plotShape, setPlotShape] = useState("square"); // Set default plot shape.
  const pixelsPerFoot = 5;  // Conversion for placing a grid on the plot.
  const layoutSize = Math.sqrt(squareFootage) * pixelsPerFoot; // Creates layout size.



  /* Clears selected plants whenever the user changes their selected Forest Type. */
  useEffect(() => {

    setSelectedPlants({});
  }, [selectedProfile]);



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

  /* Converts the layout and legend to PDF format. */
  const exportLayoutToPDF = async () => {
  const stage = svgRef.current;
  const legendElement = legendRef.current;

  if (!stage || !legendElement) return;

  // Get image data from Konva stage
  const dataURL = stage.toDataURL({ pixelRatio: 2 });

  // Create PDF
  const pdf = new jsPDF('portrait', 'pt', [stage.width(), stage.height() + 200]);

  // Add the layout image
  pdf.addImage(dataURL, 'PNG', 0, 0, stage.width(), stage.height());

  // Render the legend into the PDF using html2canvas
  await pdf.html(legendElement, {
    x: 20,
    y: stage.height() + 20,
    html2canvas: { scale: 1 },
    callback: () => {
      pdf.save("plant-layout.pdf");
    }
  });
};






/* ********************************************************************* */

  /* Clears selected plant quantities for a "Clear all" button */
  const clearSelections = () => {
    setSelectedPlants({});
  };


/* ********************************************************************* */

  /* Generates the plant layout and saves the render. */
  const plantLayoutPoints = useMemo(() => {
  return generatePlantLayout({
    width: 600,
    height: 600,
    plotShape, // this MUST be dynamic for shape filtering
    squareFootage,
    selectedPlants,
    spacingRules: {
      minSpacing: 20,
      sameTypeSpacing: {
        CANOPY: 50,
        TREE: 50,
        SUBTREE: 10,
        SHRUB: 5
      },
      treeToTree: 50
    }
  });
}, [selectedPlants, squareFootage, plotShape]); // <--- include it here!



/* ********************************************************************* */

  /* Initializes the layout cache states. */
  const [layoutCache, setLayoutCache] = useState({
    square: [],
    rectangle: [],
    circle: []
  });




/* ********************************************************************* */

/* Caches the layout shape and generated points to prevent changes when switching
plot shapes. Maintains consistency until refreshing the page. */
const [generatedShape, setGeneratedShape] = useState("square");
const [cachedPoints, setCachedPoints] = useState([]);

useEffect(() => {
  const shapes = ["square", "rectangle", "circle"];
  const newCache = {};

  for (const shape of shapes) {
    const points = generatePlantLayout({
      width: 600,
      height: 600,
      plotShape: shape,
      squareFootage,
      selectedPlants,
      spacingRules: {
        minSpacing: 20,
        sameTypeSpacing: {
          CANOPY: 50,
          TREE: 50,
          SUBTREE: 10,
          SHRUB: 5
        },
        treeToTree: 50
      }
    });

    newCache[shape] = points;
  }

  setLayoutCache(newCache);
}, [selectedPlants, squareFootage]);



/* ********************************************************************* */

  /* Defines state for converting the Konva canvases to SVGs for the PDF. */
  const svgRef = useRef(null);
  const legendRef = useRef(null);




/* ********************************************************************* */

  /* Downloads the layout content as an image. */
  const downloadLayoutAsImage = () => {
    const stage = svgRef.current;
    if (!stage) return;

    const dataURL = stage.toDataURL({ pixelRatio: 2 }); // Higher quality export


    const link = document.createElement('a');
    link.download = 'forest-layout.png';
    link.href = dataURL;
    link.click();
  };


/* ********************************************************************* */


  /* Clears the user's selections when the user changes their square footage input. */
  useEffect(() => {
  // Clear plant selections
  setSelectedPlants({});

  // Clear layout cache or points
  setLayoutCache({
    square: [],
    rectangle: [],
    circle: []
  });

  // Optionally reset cachedPoints or generatedShape if you want:
  setCachedPoints([]);
  setGeneratedShape("square");

}, [squareFootage]);


/* Unique number for each plant on legend. */

const uniquePlants = Object.entries(selectedPlants).flatMap(([type, plantMap]) =>
  Object.entries(plantMap).map(([plantId, plantData]) => {
    const plant = plants.find(p => p.id === plantId);
    return {
      plantId,
      plantName: plant?.plantName || 'Unknown',
      quantity: plantData || 0,  // quantity per plant
      color: getColorForPlantId(plantId),
    };
  })
);




/* ********************************************************************* */


  /* Rendered layout */
  return (
    <div className="Plant Calculator">

      <HeaderComp />
      <Navbar />


      <div className={styles.about_content}>
        <div className={styles.subheader}>Plant Calculator</div>

        <p>
          Choose the forest type that interests you and best suits your space.
        </p>


        <div style={{padding: "20px"}}>
        <ForestProfileSelector
          profiles={sortedProfiles}
          selected={selectedProfile}
          onSelect={setSelectedProfile}
        />
        </div>


        <div style={{ marginBottom: "0.8rem", padding: "0.2rem" }}>
            Input the square footage of your Pocket Forest (minimum 30 sq. ft):
            <input className={styles.inputBox}
              type="number"
              min="30"
              max="1000"
              placeholder="Enter square footage"
              value={squareFootage}
              onChange={(e) => {
                let usrinp = e.target.value;
                usrinp = Math.abs(usrinp);
                usrinp = Number.parseFloat(usrinp, 10);
                if (!isNaN(usrinp) && usrinp >= 0) {
                  if (usrinp < 30) usrinp = 30;
                  else if (usrinp > 1000) usrinp = 1000;
                  setSquareFootage(usrinp.toString());
              }
                let cleanedStr = usrinp.toString().replace(/^0+(?=\d)/, "");

                setSquareFootage(cleanedStr)}}
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

        <div style={{ marginTop: "2rem" }}>
          <GeneratePDFButton onClick={clearSelections}>
            Clear Selections
          </GeneratePDFButton>
        </div>

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



        {Object.keys(selectedPlants).length > 0 && (
            <div style={{ marginTop: "2rem" }}>

              <GeneratePDFButton onClick={clearSelections}>
                Clear Selections
              </GeneratePDFButton>

              <GeneratePDFButton onClick={generatePDF}>
                Download your plant list as a PDF
              </GeneratePDFButton>

              <ScrollToTop />


            </div>
          )}


        <div className={styles.subheader}>
          Create your layout
        </div>


          {/* ************************* PLOTTING *************************** */}
          {Object.keys(selectedPlants).length > 0 && (
            <>

              <p>Visualize how your forest will be arranged based on your chosen square footage and plants.</p>

              <div>
                <label>Choose plot shape: </label>
                {["square", "rectangle", "circle"].map((s) => (
                  <GeneratePDFButton key={s} onClick={() => setPlotShape(s)}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </GeneratePDFButton>
                ))}
              </div>


              <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
              <div
                  style={{
                    border: "1px solid #383838",
                    background: plotShape === "circle" ? "transparent" : "#fdfff6",
                    borderRadius: plotShape === "circle" ? "50%" : "0"
                  }}
                >
          

              <PlantLayout
                ref={svgRef}
                width={600}
                height={600}
                plotShape={plotShape}
                plantPoints={layoutCache[plotShape] || []}
              />

            </div>
            </div>

            {/* Legend */}
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <div ref={legendRef} style={{ textAlign: "center", marginTop: "1rem" }}>

              <h4>Legend</h4>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                padding: "20px",
                gap: "1rem",
                pageBreakInside: "avoid"
              }}>
                <div>
                  {uniquePlants.map(({ plantId, plantName, quantity, color }, index) => (
                    <div
                      key={plantId}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        padding: "1rem",
                        pageBreakInside: "avoid",
                      }}
                    >
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          backgroundColor: color,
                          border: "1px solid #383838",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#fdfff6",
                          fontWeight: "bold",
                          fontSize: "12px",
                        }}
                      >
                        {index + 1}
                      </div>
                      <span>{plantName} ( — {quantity})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

            <GeneratePDFButton onClick={exportLayoutToPDF}>
              Download layout
            </GeneratePDFButton>


            </>




          )}



      </div>






      <FooterComp />
    </div>
  );
}


