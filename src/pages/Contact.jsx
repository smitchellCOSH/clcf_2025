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
          Contact Sterling Heights
        </div>


      <p>Thank you for contributing to local reforestation efforts. If you have any 
        any questions or comments, please reach out to the Sterling Heights Sustainability
        Planning team at <a
                          className={styles.other_links}
                          href="sustainability@sterlingheights.gov"
                          target="_blank"
                          rel="noopener noreferrer"
                        >sustainability@sterlingheights.gov</a>.

        If you're interested in learning more about sustainability projects in Sterling Heights,
        take a look at the <a
                    className={styles.other_links}
                    href="https://www.sterlingheights.gov/2330/Pathway-to-Play-and-Preservation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Think Sterling Green</a> {" "}
        sustainability initiatives webpage. With your help, we're one step closer to a sustainable city!
      </p>
      </div>



      <FooterComp />

    </div>
  );
};

export default Contact;
