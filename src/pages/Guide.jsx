import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from "../mystyle.module.css"
import { Link } from 'react-router-dom';
import BasicButton from '../components/BasicButton';
import FrostedImage from '../components/FrosterImage';




// src/pages/Guide.jsx
const Guide = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <div className={styles.subheader}>
        Guide: Build your own <span style={{ fontWeight: "bold", color: "#0057b8" }}>Pocket Forest</span>

      </div>


      <div className={styles.about_content}>
        Before you begin, check out the{" "}

            <Link to="/" className={styles["other_links"]}>About
            </Link>

            {" "} and {" "}

            <Link to="/Resources" className={styles["other_links"]}>
            Resources</Link> 

            {" "} pages for more information about Pocket Forests. In this section, we’ll outline step-by-step
            instructions for building a Pocket Forest from scratch. You’ll learn about which plants qualify, planting methods, and guidelines for following
            the Miyawaki Method specific to Southeast Michigan’s ecology.


        <p>
          <BasicButton to="/Step1">Step 1: Before Planting</BasicButton>
        </p>

        <p>
          <BasicButton to="/Step2">Step 2: Planting Day</BasicButton>
        </p>

        <p>
          <BasicButton to="/Step3">Step 3: After Planting & Maintenance</BasicButton>
        </p>


        <FrostedImage
          src="/photos/guide_image_001.jpg"
          alt="Pocket forest"
          attribution="Carpinus caroliniana - Blue beech tree"
          />


      </div>


      <FooterComp />

    </div>
  );
};

export default Guide;
