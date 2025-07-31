/* Contact page - Contains the content displayed on the Contact page. */

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
import styles from "../mystyle.module.css"



const Contact = () => {
  return (
    <div>
      <HeaderComp />

      <Navbar />

      <div className={styles.about_content}>
        <div className={styles.subheader}>
          Contact us
        </div>

      <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}>Sterling Heights</span>

    
      <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: "normal"}}>Thank you for contributing to local reforestation efforts. If you have any 
        any questions or comments, please reach out to the Sterling Heights Sustainability
        Planning team at sustainability@sterlingheights.gov.

        {" "} If you're interested in learning more about sustainability projects in Sterling Heights,
        take a look at the <a
                    className={styles.other_links}
                    href="https://www.sterlingheights.gov/2330/Pathway-to-Play-and-Preservation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Think Sterling Green</a> {" "}
        sustainability initiatives webpage. With your help, we're one step closer to a sustainable city!
      </p>



      <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}>Acknowledgments</span>


      <p>
        This project builds off of the LA Microforests Project, led by Katherine Pakradouni. Visit {" "}
        <a
          className={styles.other_links}
          href="https://www.lamicroforests.com/"
          target="_blank"
          rel="noopener noreferrer"
        >lamicroforests.com</a> to learn more.
      </p>

      <p>
        This project was developed by Paloma Calvin for the 2025 Catalyst Leadership Circle (CLC) Fellowship. Special thanks
        to the University of Michigan Graham Sustainability Institute and the Michigan Department of Environment, Great Lakes,
        and Energy (EGLE) for facilitating the CLC Fellowship.
      </p>

      <em>This material is based upon work supported by the Department of Energy and the Michigan Department of Environment, 
        Great Lakes, and Energy (EGLE) under Award Number EE0008653. The views expressed herein do not necessarily reflect 
        those of the United States Government or any agency thereof. Find this document and more about the CLC Fellowship that 
        supported this project at graham.umich.edu/clcf. 
      </em>

      <p>
        <span style={{ color: "#0057b8", fontSize: "1.5rem"}}>
          ─
        </span>
      </p>

        <div className={styles.imageContainer}>
          <img src="photos/CC.png" alt="Catalyst Communities"></img>
          <img src="photos/egle_logo.jpg" alt="EGLE"></img>
          <img src="photos/EPCformal.png" alt="EPC"></img>
        </div>

      </div>
      <FooterComp />

    </div>
  );
};

export default Contact;
