import React from 'react';
import PropTypes from 'prop-types';
import EditTaskForm from './EditTaskForm';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  state = {
    editIsOpen: false,
  };

  displayEditBody = () => {
    this.setState({ editIsOpen: true });
  };

  render() {
    const { editIsOpen } = this.state;

    if (editIsOpen) {
      return (
        <div className="edit-item">
          <EditTaskForm addTask={this.props.addTask} />
        </div>
      );
    }

    return (
      <div className="add-task" onClick={this.displayEditBody}>
        ＋ Add a task
      </div>
    );
  }
}

export default AddTaskForm;
