import { Link } from 'react-router-dom';
import React from 'react';
import ArrowRightWhite from '../assets/images/Pijl_Rechts_Wit.svg';

const Button = ({ text, width, arrow, href, margin }) => {
  return (
    <button
      className={`w-${width ? width : 'fit'} ${margin ? margin : 'mt-10'} bg-gradient transform rounded-lg p-0 font-bold text-white transition-transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:scale-90`}
    >
      <Link to={href} className="flex w-full items-center justify-center p-3">
        <span className="sr-only">{text}</span>
        {text}
        {arrow && (
          <img
            src={ArrowRightWhite}
            alt="Rebin Arrow"
            className="ml-auto w-8"
          ></img>
        )}
      </Link>
    </button>
  );
};

export default Button;
