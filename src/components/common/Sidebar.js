import React from 'react';
import PropTypes from 'prop-types';

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
            const active = (typeof eachBar.active != 'undefined' && eachBar.active) ? 'active' : '';
            const li = <li key={eachBar.id} className={active}> <a href={eachBar.route}>{eachBar.name}</a></li>;
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
