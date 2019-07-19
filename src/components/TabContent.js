import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddTaskForm from './AddTaskForm';
import SingleTask from './SingleTask';
import sampleTodos from '../sample-todos';

class TabContent extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string,
    }).isRequired,
  };

  baseState = '';

  state = {
    tasks: [...sampleTodos],
    newTaskIsOpen: false,
  };

  componentDidMount() {
    const stateTasksValue = localStorage.getItem('todoItem');
    const baseStateValue = localStorage.getItem('baseTodos');

    if (stateTasksValue) {
      this.setState({ tasks: JSON.parse(stateTasksValue) });
    }

    if (baseStateValue) {
      this.baseState = JSON.parse(baseStateValue);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('todoItem', JSON.stringify(this.state.tasks));
    localStorage.setItem('baseTodos', JSON.stringify(this.baseState));
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

    this.setState({ tasks });
    this.cancelAddTask();
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

  onDragEnd = result => {
    const { source, destination } = result;
    const { tasks } = this.state;

    if (!destination) {
      return;
    }

    if (source.index === destination.index) {
      return;
    }

    const newTasks = [...tasks];
    const removeData = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removeData[0]);

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    const { tasks, newTaskIsOpen } = this.state;
    const currentPath = this.props.match.path;
    const results = [
      {
        path: '/',
        content: tasks,
      },
      {
        path: '/progress',
        content: tasks.filter(task => !task.completed),
      },
      {
        path: '/completed',
        content: tasks.filter(task => task.completed),
      },
    ];

    return (
      <div className="tab-content wrapper-s">
        {newTaskIsOpen ? (
          <AddTaskForm addTask={this.addTask} cancelAddTask={this.cancelAddTask} />
        ) : (
          <div className="add-task" onClick={this.openNewTask}>
            ＋ Add a task
          </div>
        )}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={currentPath}>
            {provided => (
              <ul className="tasks-wrapper" ref={provided.innerRef} {...provided.droppableProps}>
                {results.map(
                  result =>
                    currentPath === result.path &&
                    result.content
                      .sort((a, b) => b.important - a.important)
                      .map((task, index) => (
                        <SingleTask
                          key={task.id}
                          uid={task.id}
                          index={index}
                          data={task}
                          openEditMode={this.openEditMode}
                          updateTask={this.updateTask}
                          saveTask={this.saveTask}
                          resetTask={this.resetTask}
                          currentPath={currentPath}
                        />
                      ))
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default TabContent;
