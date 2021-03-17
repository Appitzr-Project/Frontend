import React from 'react';

const ButtonSub = ({ fill, stroke }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" rx="15" fill={fill} fillOpacity="0.8" />
      <path
        d="M20 15H10"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ButtonSub;
