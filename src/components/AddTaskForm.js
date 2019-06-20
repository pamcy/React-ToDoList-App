import React from 'react';
import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  render() {
    const { displayEditBody, details } = this.props;
    const { isOpen } = details;

    if (isOpen) {
      return <SingleTask addTask={this.props.addTask} />;
    }

    return (
      <div className="add-task" onClick={() => displayEditBody()}>
        ＋ Add a task
      </div>
    );
  }
}

export default AddTaskForm;
