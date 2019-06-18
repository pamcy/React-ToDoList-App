import React from 'react';

class TabMenuList extends React.Component {
  render() {
    return (
      <div className="tab-menu">
        <ul className="tab-menu__list wrapper-s">
          <li className="tab-menu__item is-active">My Tasks</li>
          <li className="tab-menu__item">In Progress</li>
          <li className="tab-menu__item">Completed</li>
        </ul>
      </div>
    );
  }
}

export default TabMenuList;
