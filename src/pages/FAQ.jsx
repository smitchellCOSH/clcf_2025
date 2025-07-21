/* Frequently Asked Questions page - Contains the content displayed on the FAQ page. */

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




const FAQ = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <div className={styles.about_content}>

      <div className={styles.subheader}>Frequently Asked Questions</div>

      <p style={{fontSize: "2rem"}}>Got questions? We have answers!</p>

    {/* *************************************************************** */}

      <div className={styles.result_content}>
      <strong>If I let the plants in my yard grow naturally, does that count as a Pocket Forest?</strong>
      <p>No. A Pocket Forest, while natural, requires intentional planting, care, and maintenance. A Pocket Forest 
        also requires specific types of plants grown at particular densities. Letting the plants in your 
        yard grow without maintenance could introduce invasive plant species and pests, and will make it more
        difficult to start your Pocket Forest later.
      </p>
      </div>

      <div className={styles.result_content}>
      <strong>Why doesn't the Plant Calculator include maple trees?</strong>
      <p>While beautiful, maple trees have been overplanted in Southeast Michigan. Pocket Forests are meant to increase
        biodiversity, which protects species from plant disease and pests. Though some maples are native to the region,
        we do not recommend including maple trees in your Pocket Forest.
      </p>
      </div>

      <div className={styles.result_content}>
      <strong>Are any species harmful to include in my forest?</strong>
      <p>All of the plants in the Plant Calculator have been determined to benefit a Pocket Forest. If you choose to use
        different plants in your forest, make sure to do your research. All plants in a Pocket Forest must be native species.
        Some plants, though they are native, may be harmful to your forest as a whole. Invasive species may affect your forests,
        as well as plants that are not considered invasive but can still be harmful. Walnut trees are one example: they produce
        a compound that can limit the growth of surrounding plants. We recommend limiting the plants you choose to 
        those in the Plant Calculator.
      </p>
      </div>

      <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', whiteSpace: "normal"}}>If you have further questions, please reach out to sustainability@sterlingheights.gov.</p>
    
      </div>


      <FooterComp />

    </div>
  );
};

export default FAQ;
