import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const TabMenuList = () => (
  <div className="tab-menu">
    <ul className="tab-menu__list wrapper-s">
      <li className="tab-menu__item">
        <NavLink exact to="/" className="tab-menu__link" activeClassName="is-active">
          My Tasks
        </NavLink>
      </li>
      <li className="tab-menu__item">
        <NavLink to="/progress" className="tab-menu__link" activeClassName="is-active">
          In Progress
        </NavLink>
      </li>
      <li className="tab-menu__item">
        <NavLink to="/completed" className="tab-menu__link" activeClassName="is-active">
          Completed
        </NavLink>
      </li>
    </ul>
  </div>
);

export default TabMenuList;
