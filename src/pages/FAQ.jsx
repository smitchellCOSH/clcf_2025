import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";

// src/pages/FAQ.jsx
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
