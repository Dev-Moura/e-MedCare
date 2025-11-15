import React from "react";

const MedCareLogo = ({ className="w-24 h-auto text-blue-500"}) => {
    return (
            <svg
                viewBox="0 0 300 80"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className={className}
            >

            <g transform="translate(10,10)" fill="currentColor">
                <rect x="22" y="0" width="8" height="20" rx="2" />
                <rect x="22" y="0" width="8" height="20" rx="2" />
                <path
                    d="M26 18 c26 28, 14 28, 14 18 C14 12, 26 12, 26 18 Z"
                    opacity="0.15"
                />
            </g>

            <text
                x="60"
                y="45"
                fontFamily="Poppins, Arial, sans-serif"
                fontWeight="600"
                fontSize="58"
                fill="currentColor"

            >
        
            Med<tspan fontWeight="400">Care</tspan>
            </text>
        </svg>
    );
}

export default MedCareLogo;