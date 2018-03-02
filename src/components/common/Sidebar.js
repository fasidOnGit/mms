import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const Sidebar = ({sidebar}) => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>MMS</h3>
        </div>
        <ul className="list-unstyled components">
          {sidebar.map(eachBar => {
            const li = <li key={eachBar.id}> 
                          <NavLink to={eachBar.route} activeClassName="active">{eachBar.name}</NavLink>
                       </li>;
            return li;
          })}
        </ul>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: PropTypes.array.isRequired
};

export default Sidebar;
