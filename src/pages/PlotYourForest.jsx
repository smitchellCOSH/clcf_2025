/* Plot your forest page - Contains the content displayed on the plotting page. */

/* 
Styling:

Some styling is "in-line".

Other basic styling comes from mystyle.module.css file.

Styling for individual components contained in respective component files.

See the import statements for navigation.

*/


/* Imports */
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from '../mystyle.module.css';


/* Content */
const PlotYourForest = () => {
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

      </div>


      <FooterComp />

    </div>
  );
};

export default PlotYourForest;
