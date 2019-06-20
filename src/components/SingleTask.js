import React from 'react';
import PropTypes from 'prop-types';
import SingleItemInfo from './SingleItemInfo';

class SingleTask extends React.Component {
  static propTypes = {
    getTaskTitle: PropTypes.func,
  };

  markComplete;

  render() {
    const { details, getTaskTitle, getTaskCompleted, getTaskImportant } = this.props;
    const toggleComplete = details.completed ? 'is-checked' : '';
    const toggleImportant = details.important ? 'is-important' : '';

    return (
      <div className="single-task">
        <div
          className={`single-task__checkbox ${toggleComplete}`}
          onClick={() => getTaskCompleted()}
        >
          <i className="fas fa-square single-task__icon-uncheck" />
          <i className="fas fa-check-square single-task__icon-checked" />
        </div>
        <div className="single-task__content">
          <input
            className="single-task__input-title"
            type="text"
            name="title"
            onChange={e => getTaskTitle(e.currentTarget.value)}
            placeholder="Add a task"
          />
          {/* <SingleItemInfo /> */}
        </div>
        <div
          className={`single-task__priority ${toggleImportant}`}
          onClick={() => getTaskImportant()}
        >
          <i className="far fa-star single-task__icon-white-star" />
          <i className="fas fa-star single-task__icon-colored-star" />
        </div>
        <div className="single-task__edit">
          <i className="fas fa-pen single-task__icon-edit" />
        </div>
      </div>
    );
  }
}

export default SingleTask;
