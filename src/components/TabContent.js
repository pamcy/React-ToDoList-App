import React from 'react';
import AddTaskForm from './AddTaskForm';
import EditTaskForm from './EditTaskForm';

class TabContent extends React.Component {
  state = {
    tasks: [],
  };

  addTask = task => {
    const tasks = [...this.state.tasks, task];

    this.setState({ tasks });
  };

  render() {
    return (
      <div className="tab-content wrapper-s">
        <AddTaskForm addTask={this.addTask} />
        <ul className="tasks-wrapper">
          <li className="task-list" />
        </ul>
      </div>
    );
  }
}

export default TabContent;
