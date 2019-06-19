import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TabMenuList = () => (
  <div className="tab-menu">
    <ul className="tab-menu__list wrapper-s">
      <li className="tab-menu__item is-active">
        <Link to="./">My Tasks</Link>
      </li>
      <li className="tab-menu__item">
        <Link to="/progress">In Progress</Link>
      </li>
      <li className="tab-menu__item">
        <Link to="/complete">Completed</Link>
      </li>
    </ul>
  </div>
);

export default TabMenuList;
