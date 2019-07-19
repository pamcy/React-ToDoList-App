import React from 'react';
import PropTypes from 'prop-types';
import EditTaskHead from './EditTaskHead';
import EditTaskBody from './EditTaskBody';

class SingleTask extends React.Component {
  static propTypes = {
    uid: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      comment: PropTypes.string,
      important: PropTypes.bool,
      completed: PropTypes.bool,
      isEditMode: PropTypes.bool,
    }).isRequired,
    updateTask: PropTypes.func.isRequired,
    saveTask: PropTypes.func.isRequired,
    resetTask: PropTypes.func.isRequired,
    openEditMode: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired,
  };

  handleInputChange = e => {
    const { name, value, type, checked } = e.currentTarget;
    const inputValue = type === 'checkbox' ? checked : value;
    const { uid, data, updateTask } = this.props;
    let resetStar = {};

    // If the task marks completed, uncheck the star automatically.
    if ((name === 'completed' && checked) || data.completed) {
      resetStar = {
        important: false,
      };
    }

    updateTask(uid, {
      [name]: inputValue,
      ...resetStar,
    });
  };

  render() {
    const { uid, index, data, openEditMode, saveTask, resetTask, currentPath } = this.props;

    return (
      <li className="single-task">
        <form className="single-task__edit">
          <EditTaskHead
            uid={uid}
            index={index}
            data={data}
            handleInputChange={this.handleInputChange}
            openEditMode={openEditMode}
            currentPath={currentPath}
          />
          <EditTaskBody
            uid={uid}
            data={data}
            handleInputChange={this.handleInputChange}
            saveTask={saveTask}
            resetTask={resetTask}
          />
        </form>
      </li>
    );
  }
}

export default SingleTask;
