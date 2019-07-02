import React from 'react';
import PropTypes from 'prop-types';

class AddTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    cancelAddTask: PropTypes.func.isRequired,
  };

  formRef = React.createRef();

  titleRef = React.createRef();

  dateRef = React.createRef();

  timeRef = React.createRef();

  commentRef = React.createRef();

  completedRef = React.createRef();

  importantRef = React.createRef();

  createTask = e => {
    e.preventDefault();

    const { addTask } = this.props;
    const task = {
      title: this.titleRef.current.value,
      date: this.dateRef.current.value,
      time: this.timeRef.current.value,
      comment: this.commentRef.current.value,
      completed: this.completedRef.current.checked,
      important: this.importantRef.current.checked,
    };

    // If the task marks completed, uncheck the star automatically.
    if (task.completed) {
      task.important = false;
    }

    if (this.titleRef.current.value === '') {
      alert('Task name must be filled in!');
    } else {
      addTask(task);
      e.currentTarget.reset();
    }
  };

  clearInputValue = () => {
    const { cancelAddTask } = this.props;
    this.formRef.current.reset();
    cancelAddTask();
  };

  render() {
    return (
      <form ref={this.formRef} className="single-task__edit new-task" onSubmit={this.createTask}>
        <div className="edit-head">
          <div className="edit-head__checkbox">
            <input ref={this.completedRef} type="checkbox" name="completed" id="completed" />
            <label htmlFor="completed" />
          </div>
          <div className="edit-head__content">
            <input
              ref={this.titleRef}
              className="edit-head__input-title"
              type="text"
              name="title"
              placeholder="Add a task"
              autoFocus
            />
          </div>
          <div className="edit-head__priority">
            <input ref={this.importantRef} type="checkbox" name="important" id="important" />
            <label htmlFor="important" />
          </div>
          <div className="edit-head__edit is-editing">
            <i className="fas fa-pen edit-head__icon-edit" />
          </div>
        </div>
        <div className="edit-body">
          <div className="edit-body__content">
            <div className="edit-body__field">
              <label htmlFor="deadline" className="edit-body__label">
                Deadline
              </label>
              <div className="edit-body__input-wrapper">
                <input ref={this.dateRef} type="date" name="date" />
                <input ref={this.timeRef} type="time" name="time" />
              </div>
            </div>
            <div className="edit-body__field">
              <label htmlFor="comment" className="edit-body__label">
                Comment
              </label>
              <textarea
                ref={this.commentRef}
                name="comment"
                rows="8"
                placeholder="Type your memo here..."
              />
            </div>
          </div>
          <div className="edit-body__btns">
            <button
              type="button"
              className="edit-body__btn edit-body__btn--cancel"
              onClick={this.clearInputValue}
            >
              &#10005; Cancel
            </button>
            <button type="submit" className="edit-body__btn edit-body__btn--add">
              ＋ Add Task
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddTaskForm;
