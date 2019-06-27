import React from 'react';
import AddTaskForm from './AddTaskForm';
import SingleTask from './SingleTask';

class TabContent extends React.Component {
  formRef = React.createRef();

  state = {
    tasks: [
      {
        id: 1,
        title: 'Rogers',
        date: '1960-04-30',
        time: '23:30',
        file: '../none.jpg',
        comment: 'no comment',
        completed: false,
        important: true,
      },
      {
        id: 2,
        title: 'Barry',
        date: '1953-11-12',
        time: '09:05',
        file: '',
        comment: 'Hi, i am flash',
        completed: true,
        important: false,
      },
    ],
    newTaskIsOpen: false,
    isEditing: false,
  };

  openNewTask = () => {
    this.setState({
      newTaskIsOpen: true,
      isEditing: true,
    });
  };

  addTask = task => {
    const tasks = [
      ...this.state.tasks,
      {
        id: Date.now(),
        ...task,
      },
    ];

    this.setState({
      tasks,
      newTaskIsOpen: false,
      isEditing: false,
    });
  };

  updateTask = (id, updatedContent) => {
    const { tasks } = this.state;
    const updatedTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          ...updatedContent,
        };
      }

      return task;
    });

    this.setState({ tasks: updatedTask });
  };

  cancelTask = () => {
    this.formRef.current.reset();
    this.setState({
      newTaskIsOpen: false,
      isEditing: false,
    });
  };

  render() {
    const { tasks, newTaskIsOpen, isEditing } = this.state;

    return (
      <div className="tab-content wrapper-s">
        {newTaskIsOpen ? (
          <AddTaskForm
            formRef={this.formRef}
            isEditing={isEditing}
            addTask={this.addTask}
            cancelTask={this.cancelTask}
          />
        ) : (
          <div className="add-task" onClick={this.openNewTask}>
            ＋ Add a task
          </div>
        )}

        <ul className="tasks-wrapper">
          {tasks.map(task => (
            <SingleTask
              key={task.id}
              id={task.id}
              data={task}
              formRef={this.formRef}
              isEditing={isEditing}
              updateTask={this.updateTask}
              cancelTask={this.cancelTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TabContent;
