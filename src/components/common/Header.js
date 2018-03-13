import React from 'react';
import { Link , IndexLink, Redirect } from "react-router";
import PropTypes  from "prop-types";
import FaAlignJustify from 'react-icons/lib/fa/align-justify';


const Header = ({logout}) => {
  return (
    <div className="header">
      <div id="toggle">
        <FaAlignJustify />

      </div>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
  );
};

Header.propTypes={
  logout: PropTypes.func.isRequired
};

export default Header;
