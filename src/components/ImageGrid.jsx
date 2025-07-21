/* 

ImageGrid component specifications.
Creates a grid of 8 images, 4x4 wide, for
displaying selections of plants with short captions.

*/

/* Styling contained in ImageGrid.module.css */



/* Imports */
import React from 'react';
import styles from '../components/ImageGrid.module.css';



/* Image paths. */
const images = [
  { src: "imagegrid_photos/allium-cernuum_nodding-wild-onion.jpg", 
    common: "Nodding Wild Onion", 
    scientific: "Allium cernuum",
    link: "https://www.michiganflora.net/record/39" },
  { src: "imagegrid_photos/amelanchier-arborea_juneberry.jpg", 
    common: "Juneberry", 
    scientific: "Amelanchier arborea",
    link: "https://www.michiganflora.net/record/2421" },
  { src: "imagegrid_photos/carex-lupulina_common-hop-sedge.jpg", 
    common: "Common Hop Sedge", 
    scientific: "Carex lupulina",
    link: "https://www.michiganflora.net/record/1002" },
  { src: "imagegrid_photos/fragaria-virginiana_wild-strawberry.jpg", 
    common: "Wild Strawberry", 
    scientific: "Fragaria virginiana",
    link: "https://www.michiganflora.net/record/2483" },
  { src: "imagegrid_photos/gleditsia-triacanthos_honey-locust.jpg", 
    common: "Honey Locust", 
    scientific: "Gleditsia triacanthos",
    link: "https://www.michiganflora.net/record/1302" },
  { src: "imagegrid_photos/platanus-occidentalis_sycamore.jpg", 
    common: "Sycamore", 
    scientific: "Platanus occidentalis",
    link: "https://www.michiganflora.net/record/1988" },
  { src: "imagegrid_photos/quercus-alba_white-oak.jpg", 
    common: "White Oak", 
    scientific: "Quercus alba",
    link: "https://www.michiganflora.net/record/1373" },
  { src: "imagegrid_photos/quercus-rubra_red-oak.jpg", 
    common: "Red Oak", 
    scientific: "Quercus rubra",
    link: "https://www.michiganflora.net/record/1383" },
];




/* Image display. */
function ImageGrid() {
  return (
    <div className={styles.gridContainer}>
      {images.map((img, index) => (
        <a 
          key={index}
          href={img.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gridItem}
        >
        <img src={img.src} alt={`${img.common} - ${img.scientific}`} className={styles.imageCircle} />
        <div className={styles.caption}>
          {img.common} - <em>{img.scientific}</em> {/* Italicizes the Scientific name. */}
        </div>
        </a>
      ))}
    </div>
  );
}

export default ImageGrid;
