import React from 'react';
import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  state = {
    isNewTask: true,
  };

  render() {
    const { editIsOpen, openEditBody, closeEditBody, addTask } = this.props;
    const isNewTask = this.state;

    if (editIsOpen) {
      return (
        <SingleTask
          addTask={addTask}
          openEditBody={openEditBody}
          closeEditBody={closeEditBody}
          isNewTask={isNewTask}
        />
      );
    }

    return (
      <div className="add-task" onClick={() => openEditBody()}>
        ＋ Add a task
      </div>
    );
  }
}

export default AddTaskForm;
