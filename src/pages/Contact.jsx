import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";
import styles from "../mystyle.module.css"



const Contact = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <div className={styles.subheader}>
        <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", color: "#0057b8" }}>Contact</span> Sterling Heights
      </div>

      <div className={styles.about_content}>
      <p>This is the Contact page content.</p>
      </div>



      <FooterComp />

    </div>
  );
};

export default Contact;
