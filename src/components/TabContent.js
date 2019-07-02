import React from 'react';
import AddTaskForm from './AddTaskForm';
import SingleTask from './SingleTask';
import sampleTodos from '../sample-todos';

class TabContent extends React.Component {
  baseState = '';

  state = {
    tasks: [...sampleTodos],
    newTaskIsOpen: false,
  };

  componentDidMount() {
    const localStorageValue = localStorage.getItem('todoItem');

    if (localStorageValue) {
      this.setState({ tasks: JSON.parse(localStorageValue) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todoItem', JSON.stringify(this.state.tasks));
  }

  openNewTask = () => {
    this.setState({ newTaskIsOpen: true });
  };

  addTask = task => {
    const tasks = [
      ...this.state.tasks,
      {
        id: Date.now(),
        ...task,
        isEditMode: false,
      },
    ];

    this.setState({
      tasks,
      newTaskIsOpen: false,
    });
  };

  cancelAddTask = () => {
    this.setState({ newTaskIsOpen: false });
  };

  openEditMode = uid => {
    const tasks = [...this.state.tasks];
    const updatedTask = tasks.map(task => {
      task.isEditMode = false; // Close all opened task
      this.baseState = this.state; // Save a copy of this.state

      if (task.id === uid) {
        return {
          ...task,
          isEditMode: true,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTask });
  };

  saveTask = (e, uid) => {
    e.preventDefault();

    const tasks = [...this.state.tasks];
    const updatedTask = tasks.map(task => {
      if (task.id === uid) {
        return {
          ...task,
          isEditMode: false,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTask });
  };

  updateTask = (uid, updatedContent) => {
    const tasks = [...this.state.tasks];
    const updatedTask = tasks.map(task => {
      if (task.id === uid) {
        return {
          ...task,
          ...updatedContent,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTask });
  };

  resetTask = () => {
    this.setState(this.baseState);
  };

  render() {
    const { tasks, newTaskIsOpen } = this.state;

    return (
      <div className="tab-content wrapper-s">
        {newTaskIsOpen ? (
          <AddTaskForm addTask={this.addTask} cancelAddTask={this.cancelAddTask} />
        ) : (
          <div className="add-task" onClick={this.openNewTask}>
            ＋ Add a task
          </div>
        )}

        <ul className="tasks-wrapper">
          {tasks.map(task => (
            <SingleTask
              key={task.id}
              uid={task.id}
              data={task}
              openEditMode={this.openEditMode}
              updateTask={this.updateTask}
              saveTask={this.saveTask}
              resetTask={this.resetTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TabContent;
