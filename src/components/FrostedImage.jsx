/* 

  Frosted Image component specifications. 

  Handles creating an overlay over images when hovered over by the mouse.
  The overlay blurs the content of the image and displays the image's
  attribution, or other information important to the image.

*/

/* Styling contained in FrostedImage.css */


/* Imports */
import React from "react";
import "./FrostedImage.css";

const FrostedImage = ({ src, alt, attribution, style }) => (
  <div className="frosted-container" style={style}>
    <img src={src} alt={alt} className="frosted-image" />
    <div className="frosted-overlay">{attribution || alt}</div>
  </div>
);

export default FrostedImage;
