import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from '../mystyle.module.css';



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
