import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from '../mystyle.module.css';
import FrostedImage from "../components/FrosterImage";



const Resources = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      {/* Subheader */}
      <div className={styles.subheader}>
        <p>
          Resources
        </p>
      </div>

      <div className={styles.about_content}>
        <p>Learn more about Pocket Forestry through the resources below.</p>

        <div className={styles.resource_content}>
          <p>
            <span style={{ fontWeight: "bold", color: "#383838", fontSize: "2rem"}}>
              Sterling Heights
            </span>
          </p>

          <p>
            <a
              className={styles.other_links}
              href="https://www.sterlingheights.gov/2257/City-Plans"
              target="_blank"
              rel="noopener noreferrer">
            Sterling Heights City Plans
            </a>
          </p>

          <p>  
            <a
              className={styles.other_links}
              href="https://www.sterlingheights.gov/2330/Pathway-to-Play-and-Preservation"
              target="_blank"
              rel="noopener noreferrer">
            Pathway to Play and Preservation Millage
            </a>
          </p>



          <p>
            <span style={{ color: "#0057b8", fontSize: "1.5rem"}}>
              ─
            </span>
          </p>



          <p>
            <span style={{ fontWeight: "bold", color: "#383838", fontSize: "2rem"}}>
              Michigan Native Plants
            </span>
          </p>



          <p>
            <a
              className={styles.other_links}
              href="https://rochesterpollinators.org/pages/resources-1"
              target="_blank"
              rel="noopener noreferrer">
            Native Plant Nurseries and Sellers, Rochester Pollinators
            </a>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://www.michiganflora.net/"
              target="_blank"
              rel="noopener noreferrer">
              Michigan Flora
            </a>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://www.michiganensenatives.com/"
              target="_blank"
              rel="noopener noreferrer">
              Michiganese Natives
            </a>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://www.michiganmastergardener.org/nurseries-featuring-native-plants"
              target="_blank"
              rel="noopener noreferrer">
              Michigan Native Plants Resources, Michigan Master Gardener Association, Inc.
            </a>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://www.wiegandsnursery.com/"
              target="_blank"
              rel="noopener noreferrer">
              Ray Wiegand's Nursery
            </a>
          </p>


          <p>
            <span style={{ color: "#0057b8", fontSize: "1.5rem"}}>
              ─
            </span>
          </p>




          <p>
            <span style={{ fontWeight: "bold", color: "#383838", fontSize: "2rem"}}>
              Equipment & Planting
            </span>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://www.releafmichigan.org/tree-planting-resources.html"
              target="_blank"
              rel="noopener noreferrer">
              Tree Planting Resources, ReLeaf Michigan
            </a>
          </p>

          <p>  
            <a
              className={styles.other_links}
              href="https://www.englishgardens.com/"
              target="_blank"
              rel="noopener noreferrer">
              English Gardens of Metro Detroit
            </a>
          </p>



          <p>
            <span style={{ color: "#0057b8", fontSize: "1.5rem"}}>
              ─
            </span>
          </p>




          <p>
            <span style={{ fontWeight: "bold", color: "#383838", fontSize: "2rem"}}>
              Pocket Forestry & the Miyawaki Method
            </span>
          </p>


          <p>  
            <a
              className={styles.other_links}
              href="https://earth.org/microforests/"
              target="_blank"
              rel="noopener noreferrer">
              The Power of Microforests in Slowing Down Climate Change, Earth.org
            </a>
          </p>

          <p>  
            <a
              className={styles.other_links}
              href="https://www.chelseagreen.com/product/mini-forest-revolution/"
              target="_blank"
              rel="noopener noreferrer">
              Mini-Forest Revolution (book), Chelsea Green Publishing
            </a>
          </p>

          <FrostedImage
          src="/photos/resource_image_001.jpg"
          alt="Tallgrass Prairie"
          attribution="Tallgrass Prairie - Forest Service, Eastern Region"
          />


        </div>


      </div>


      <FooterComp />

    </div>
  );
};

export default Resources;
