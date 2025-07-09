/* 

ImageGrid component specifications.
Creates a grid of 8 images, 4x4 wide, for
displaying selections of plants with short captions.

*/

/* Styling contained in ImageGrid.module.css */



/* Imports */
import React from 'react';
import styles from '../components/ImageGrid.module.css';



/* Image paths */
const images = [
  { src: "imagegrid_photos/allium-cernuum_nodding-wild-onion.jpg", caption: "Nodding Wild Onion - Allium cernuum" },
  { src: "imagegrid_photos/amelanchier-arborea_juneberry.jpg", caption: "Juneberry - Amelanchier arborea" },
  { src: "imagegrid_photos/carex-lupulina_common-hop-sedge.jpg", caption: "Common Hop Sedge - Carex lupulina" },
  { src: "imagegrid_photos/fragaria-virginiana_wild-strawberry.jpg", caption: "Wild Strawberry - Fragaria virginiana" },
  { src: "imagegrid_photos/gleditsia-triacanthos_honey-locust.jpg", caption: "Honey Locust - Gleditsia triacanthos" },
  { src: "imagegrid_photos/platanus-occidentalis_sycamore.jpg", caption: "Sycamore - Platanus occidentalis" },
  { src: "imagegrid_photos/quercus-alba_white-oak.jpg", caption: "White Oak - Quercus alba" },
  { src: "imagegrid_photos/quercus-rubra_red-oak.jpg", caption: "Red Oak - Quercus rubra" },
];



/* Image display */
function ImageGrid() {
  return (
    <div className={styles.gridContainer}>
      {images.map((img, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={img.src} alt={img.caption} className={styles.imageCircle} />
          <div className={styles.caption}>{img.caption}</div>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
