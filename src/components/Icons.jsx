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

export const humanLoggedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="white" />

    <circle cx="50" cy="30" r="15" fill="blue" />
    <rect x="45" y="45" width="10" height="30" fill="blue" />
    <circle cx="50" cy="70" r="10" fill="blue" />
  </svg>
);

export const CircularProgressBar = ({ percentage }) => {
  const radius = 32;
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
