import React from 'react';
import TaskItemInfo from './TaskItemInfo';

class TaskItem extends React.Component {
  render() {
    return (
      <div className="task-item">
        <div className="task-item__checkbox">
          <i className="fas fa-square task-item__icon-uncheck" />
          <i className="fas fa-check-square task-item__icon-checked" />
        </div>
        <div className="task-item__content">
          <p className="task-item__title">Dinner with Cola</p>
          {/* <TaskItemInfo /> */}
        </div>
        <div className="task-item__priority">
          <i className="far fa-star task-item__icon-white-star" />
          <i className="fas fa-star task-item__icon-colored-star" />
        </div>
        <div className="task-item__edit">
          <i className="fas fa-pen task-item__icon-edit" />
        </div>
      </div>
    );
  }
}

export default TaskItem;
