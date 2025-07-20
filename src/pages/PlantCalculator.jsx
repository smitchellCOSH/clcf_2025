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
import QuantityTracker from '../components/QuantityTracker';
import FrostedImage from '../components/FrostedImage';





/* Content */
export default function PlantCalculator() {



  /* Tracks variables, incl. square footage input by the user,
  selected forest profile, and the plants selected for each category */
  const [squareFootage, setSquareFootage] = useState(""); // Square footage.
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
  const [plantCounts, setPlantCounts] = useState({});


  useEffect(() => {
  const newCounts = handleCalculate();
  setPlantCounts(newCounts);
  }, [squareFootage, selectedProfile]);

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
  const plantColors = useMemo(() => {
    if (!Array.isArray(selectedPlants)) return {};

      const colors = generateDistinctColors(selectedPlants.length);
      const map = {};
      selectedPlants.forEach((plant, i) => {
        map[plant.plantName] = colors[i];
    });
    return map;
  }, [selectedPlants]);


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

    // Adds the title to the top of the PDF.
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.text("Pocket Forests Project", 2.1, y + 0.6); // Sets the x and y position.

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

// Helper: convert HSL to RGB (all in 0-1 range)
function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// Helper: convert RGB array to hex string
function rgbToHex([r, g, b]) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

// Generate n distinct hex colors evenly spaced around the H (hue) circle
function generateDistinctColors(n) {
  const colors = [];
  const saturation = 0.7;  // 70% saturation
  const lightness = 0.5;   // 50% lightness

  for (let i = 0; i < n; i++) {
    const hue = (i * 360 / n) % 360;
    const rgb = hslToRgb(hue, saturation, lightness);
    colors.push(rgbToHex(rgb));
  }
  return colors;
}

function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');
  if (hex.length !== 6) return [0, 0, 0]; // fallback to black

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}




const exportLayoutToPDF = async () => {
  // Make sure you have your svgRef and stage if you want to add image
  const stage = svgRef.current;
  if (!stage) return;

  const dataURL = stage.toDataURL({ pixelRatio: 2 });

  // Create PDF with enough height to fit the layout + legend (adjust as needed)
  const pdf = new jsPDF('portrait', 'pt', [stage.width(), stage.height() + 400]);

  // Add layout image to first page
  pdf.addImage(dataURL, 'PNG', 0, 0, stage.width(), stage.height());

  // Start legend on new page
  pdf.addPage();

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);

  const xStart = 50;
  let y = 40;
  const lineHeight = 24;

  pdf.text("Legend", xStart, y);
  y += 30;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);

  // Generate unique colors for all plants
  const colors = generateDistinctColors(uniquePlants.length);

  uniquePlants.forEach(({ plantName, quantity }, index) => {
    const hexColor = colors[index] || "#000000";
    const [r, g, b] = hexToRgb(hexColor); // <-- convert to [r, g, b]

    if (y + lineHeight > pdf.internal.pageSize.getHeight() - 40) {
      pdf.addPage();
      y = 40;
    }

    //const hexColor = colors[index];

    // Draw circle
    const circleX = xStart;
    const circleY = y - 6;
    const radius = 6;

    pdf.setDrawColor(56, 56, 56);
    console.log("Color for", plantName, "is", hexColor, "=>", [r, g, b]);
    pdf.setFillColor(r, g, b);
    pdf.circle(circleX, circleY, radius, 'FD');

    // Draw number centered inside circle
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    const numberText = String(index + 1);
    const textX = circleX - (pdf.getTextWidth(numberText) / 2);
    pdf.text(numberText, textX + 0.5, circleY + 2);

    // Draw label
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12);
    pdf.text(`${plantName} (${quantity})`, xStart + 20, y);

    y += lineHeight;
  });

  pdf.save("plant-layout.pdf");
};


function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex([r, g, b]) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function generateDistinctColors(n) {
  const colors = [];
  const saturation = 0.7;
  const lightness = 0.5;

  for (let i = 0; i < n; i++) {
    const hue = (i * 360 / n) % 360;
    const rgb = hslToRgb(hue, saturation, lightness);
    colors.push(rgbToHex(rgb));
  }
  return colors;
}


/* ********************************************************************* */

  /* Clears selected plant quantities for a "Clear all" button */
  const clearSelections = () => {
    setSelectedPlants({});
  };


/* ********************************************************************* */

  /* Defines canvas size dimensions for each shape. */
  const shapeDimensions = {
    square: { width: 600, height: 600 },
    rectangle: { width: 800, height: 400 },
    circle: { width: 600, height: 600 }
  };

  const { width, height } = shapeDimensions[plotShape];

  /* Generates the plant layout and saves the render. */
  const plantLayoutPoints = useMemo(() => {
  const layout = generatePlantLayout({
    width,
    height,
    plotShape,
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
  return layout.map(point => ({
    ...point,
    color: plantColors[point.plantName] || "#000000"
  }));
}, [selectedPlants, squareFootage, plotShape, plantColors]); 

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
useEffect(() => {
  const shapes = ["square", "rectangle", "circle"];
  const newCache = {};

  for (const shape of shapes) {
    const { width, height } = shapeDimensions[shape];
    const points = generatePlantLayout({
      width,
      height,
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
const [showHelp, setShowHelp] = useState(false);



/* ********************************************************************* */


  /* Rendered layout */
  return (
    <div className="Plant Calculator">

      <HeaderComp />
      <Navbar />

      <QuantityTracker plantCounts={plantCounts} orderedTypes={orderedTypes} selectedPlants={selectedPlants} />

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
                const val = e.target.value;
                // Empty input for user to type.
                if (val === "" || /^[0-9]*$/.test(val)) {
                  setSquareFootage(val);
                }
              }}
              onBlur={() => {
                let num = Number(squareFootage);
                if (isNaN(num) || num < 30) num = 30;
                else if (num > 1000) num = 1000;
                setSquareFootage(num.toString());
              }}
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

          {/* Dropdown Help Section */}
          <div className={styles.dropdownHelp}>
            <button onClick={() => setShowHelp(!showHelp)} className={styles.dropdownHelp}>
              {showHelp ? 'Hide' : 'Having trouble choosing plants?'}
            </button>
            {showHelp && (
              <div className={styles.dropdownContent}>
                <p>
                  Supporting biodiversity is important in your Pocket Forest. Choosing a variety of plants will 
                  help protect your plants from disease and will make for a more natural forest. If you are unsure how
                  many plants of each type you should choose, take a look at this diagram for more information.
                </p>
                <FrostedImage
                  src="photos/how-many-plants.jpg"
                  alt="Plant Help Diagram"
                  attribution="How many different plants should I choose?"
                  style={{ width: "1100px" }}
                  className="xlarge"
                  />
              </div>
            )}
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


        {/* Note. */}
        <p style={{ width: "80%", display: "inline-block", backgroundColor: "#fdfff6", borderRadius: "10px", outline: "solid 2px", outlineColor: "#0057b8" }}>
          <img src="icons/information-box-outline.svg" style={{width: "40px", marginTop: "15px" }}></img>
          <li style={{paddingLeft: "3%", paddingRight: "3%", paddingBottom: "3%", listStyle: "none"}}>
          Some of the plants listed require special care, or have notes on their edibility
          and potential risk to pets. Please make note of which plants have special 
          features, and do additional research before consuming any of the plants in your forest.
          Additionally, ensure that your plants are thoroughly cleaned before eating.
          </li>
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
            <div style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem"
              }}>

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

              <div style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.5rem"
              }}> 
                <label>Choose plot shape: </label>
                {["square", "rectangle", "circle"].map((s) => (
                  <GeneratePDFButton key={s} onClick={() => setPlotShape(s)}>
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </GeneratePDFButton>
                ))}
              </div>

              <div style={{ overflow: 'auto', width: '100%' }}>
              <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
              <div
                  style={{
                    border: "1px solid #383838",
                    background: plotShape === "circle" ? "transparent" : "#fdfff6",
                    borderRadius: plotShape === "circle" ? "50%" : "0",
                    width: width,
                    height: height,
                  }}
                >
          
              <PlantLayout
                ref={svgRef}
                width={width}
                height={height}
                plotShape={plotShape}
                plantPoints={layoutCache[plotShape] || []}
              />

              </div>
              </div>
            </div>


            {/* Legend */}
            <div style={{ textAlign: "center" }}>
              <div ref={legendRef} style={{ textAlign: "center" }}>

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
                      <span>{plantName} ({quantity})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

            <div style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem"
            }}>

              <GeneratePDFButton onClick={exportLayoutToPDF}>
                Download layout
              </GeneratePDFButton>

              <ScrollToTop />

            </div>

            </>

          )}
      </div>
      <FooterComp id="footer"/>
    </div>
  );
}
