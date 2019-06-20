import React from 'react';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskBody';

class TabContent extends React.Component {
  state = {
    tasks: [],
    isOpen: false,
  };

  displayEditBody = () => {
    this.setState({
      isOpen: true,
    });
  };

  addTask = task => {
    const tasks = [...this.state.tasks, task];

    this.setState({ tasks });
  };

  render() {
    return (
      <div className="tab-content wrapper-s">
        <AddTaskForm
          addTask={this.addTask}
          displayEditBody={this.displayEditBody}
          details={this.state}
        />
        {/* {editing && (
          <AddTaskForm
            addTask={this.addTask}
            displayEditBody={this.displayEditBody}
            details={this.state}
          />
        )} */}
        <ul className="tasks-wrapper">
          <li className="task-list" />
        </ul>
      </div>
    );
  }
}

export default TabContent;
