/* Freqintly Asked Questions page - Contains the content displayed on the FAQ page. */

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




const FAQ = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <h2>Frequently Asked Questions</h2>
      <p>This is the FAQ page content.</p>


      <FooterComp />

    </div>
  );
};

export default FAQ;
