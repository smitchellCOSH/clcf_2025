/* 

InlineImageText.jsx formats images to appear side by side with
text in pages. Images are smaller and have more of an "embedded" style.

*/

/* Styling contained in InlineImageText.css */


/* Imports */
import React from "react";
import FrostedImage from "./FrostedImage";
import "./InlineImageText.css";


/* Content */
const InlineImageText = ({ imageSrc, imageAlt, attribution, children, reverse }) => {
  return (
    <div className={`inline-image-text ${reverse ? 'reverse' : ''}`}>
      <FrostedImage src={imageSrc} alt={imageAlt} attribution={attribution} />
      <div className="text-content">
        {children}
      </div>
    </div>
  );
};



export default InlineImageText;
