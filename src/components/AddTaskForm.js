import React from 'react';
import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  render() {
    const { editIsOpen, openEditBody, closeEditBody, addTask } = this.props;

    if (editIsOpen) {
      return <SingleTask addTask={addTask} closeEditBody={closeEditBody} />;
    }

    return (
      <div className="add-task" onClick={() => openEditBody()}>
        ＋ Add a task
      </div>
    );
  }
}

export default AddTaskForm;
