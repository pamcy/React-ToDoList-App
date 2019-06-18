import React from 'react';

class TaskItemInfo extends React.Component {
  render() {
    return (
      <div className="task-item__infos">
        <span className="task-item__info">
          <i className="far fa-calendar-alt task-item__icon-calendar" />
        </span>
        <span className="task-item__info">
          <i className="far fa-file task-item__icon-file" />
        </span>
        <span className="task-item__info">
          <i className="far fa-comment-dots task-item__icon-comment" />
        </span>
      </div>
    );
  }
}

export default TaskItemInfo;
