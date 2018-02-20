import React from 'react';
import { Link , IndexLink } from "react-router";
import PropTypes  from "prop-types";
import FaAlignJustify from 'react-icons/lib/fa/align-justify';


const Header = () => {
  return (
    <div className="header">
      <div id="toggle">
        <FaAlignJustify />
      </div>
    </div>
  );
};

export default Header;
