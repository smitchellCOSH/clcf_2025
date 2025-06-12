import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import Navbar from "../components/Navbar";

// src/pages/Guide.jsx
const Guide = () => {
  return (
    <div>
      <HeaderComp />
      <Navbar />

      <h2>Guide</h2>
      <p>This is the Guide page content.</p>

      <FooterComp />

    </div>
  );
};

export default Guide;
