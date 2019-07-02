import React from 'react';
import AddTaskForm from './AddTaskForm';
import SingleTask from './SingleTask';

class TabContent extends React.Component {
  baseState = '';

  state = {
    tasks: [
      {
        id: 1,
        title: 'Rogers',
        date: '1960-04-30',
        time: '23:30',
        comment: 'no comment',
        completed: false,
        important: true,
        isEditMode: false,
      },
      {
        id: 2,
        title: 'Barry',
        date: '1953-11-12',
        time: '09:05',
        comment: 'Hi, i am flash',
        completed: true,
        important: false,
        isEditMode: false,
      },
    ],
    newTaskIsOpen: false,
  };

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
    let isOpened;
    const tasks = [...this.state.tasks];
    const updatedTask = tasks.map(task => {
      if (task.id === uid) {
        isOpened = task.isEditMode;

        return {
          ...task,
          isEditMode: true,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTask });

    if (!isOpened) {
      this.baseState = this.state;
    }
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
