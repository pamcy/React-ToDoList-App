import React from 'react';
import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  render() {
    const { openEditBody, closeEditBody, editIsOpen } = this.props;

    if (editIsOpen) {
      return (
        <SingleTask
          addTask={this.props.addTask}
          editIsOpen={editIsOpen}
          closeEditBody={closeEditBody}
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
