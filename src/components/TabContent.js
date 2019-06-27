import React from 'react';
import AddTaskForm from './AddTaskForm';
import SingleTask from './SingleTask';

class TabContent extends React.Component {
  formRef = React.createRef();

  state = {
    tasks: [],
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
    const tasks = [...this.state.tasks, task];

    this.setState({
      tasks,
      newTaskIsOpen: false,
      isEditing: false,
    });
  };

  cancelTask = () => {
    this.formRef.current.reset();
    this.setState({
      newTaskIsOpen: false,
      isEditing: false,
    });
  };

  render() {
    const { newTaskIsOpen, isEditing } = this.state;

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

        {/* {console.log(this.props.match.path)} */}

        {/* <ul className="tasks-wrapper">
          {tasks.map(task => (
            <SingleTask key={task.id} data={task} />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default TabContent;
