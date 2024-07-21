import React from 'react';

const LimitedText = ({ text, limit }) => {
  if (text?.length <= limit) {
    return <p>{text}</p>;
  }
  
  // Agar text length limit se zyada hai, to substring ka istemal karenge
  const limitedText = `${text?.substring(0, limit)}...`;

  return <p className="text-sm py-1 font-light">{limitedText}</p>;
};

export default LimitedText;
