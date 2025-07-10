// InlineImageText.jsx
import React from "react";
import FrostedImage from "./FrostedImage";
import "./InlineImageText.css";

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
