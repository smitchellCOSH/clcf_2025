import React from "react";
import "./FrostedImage.css";

const FrostedImage = ({ src, alt, attribution }) => (
  <div className="frosted-container">
    <img src={src} alt={alt} className="frosted-image" />
    <div className="frosted-overlay">{attribution || alt}</div>
  </div>
);

export default FrostedImage;
