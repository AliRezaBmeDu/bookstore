import React from 'react';
import PropTypes from 'prop-types';

export const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

export const HumanLoggedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="human-icon" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
    <defs />
    <g
      style={{
        stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1,
      }}
      transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)"
    >
      <path
        d="M 45 53.718 c -10.022 0 -18.175 -8.153 -18.175 -18.175 S 34.978 17.368 45 17.368 c 10.021 0 18.175 8.153 18.175 18.175 S 55.021 53.718 45 53.718 z"
        style={{
          stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(96,96,233)', fillRule: 'nonzero', opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
        strokeLinecap="round"
      />
      <path
        d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 74.821 70.096 c -3.543 -5.253 -8.457 -9.568 -14.159 -12.333 c -2.261 -1.096 -4.901 -1.08 -7.247 0.047 c -2.638 1.268 -5.47 1.91 -8.415 1.91 c -2.945 0 -5.776 -0.643 -8.415 -1.91 c -2.343 -1.125 -4.984 -1.143 -7.247 -0.047 c -5.702 2.765 -10.616 7.08 -14.16 12.333 C 9.457 63.308 6 54.552 6 45 C 6 23.495 23.495 6 45 6 s 39 17.495 39 39 C 84 54.552 80.543 63.308 74.821 70.096 z"
        style={{
          stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(96,96,233)', fillRule: 'nonzero', opacity: 1,
        }}
        transform="matrix(1 0 0 1 0 0)"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export const CircularProgressBar = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg className="circle">
        <circle
          className="circle-background"
          r={radius}
          cx={50}
          cy={50}
        />
        <circle
          className="circle-progress"
          r={radius}
          cx={50}
          cy={50}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
        />
      </svg>
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
