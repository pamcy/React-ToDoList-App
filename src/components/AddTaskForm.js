import React from 'react';
import PropTypes from 'prop-types';
import TabContent from './TabContent';

class AddTaskForm extends React.Component {
  static propTypes = {
    formRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    addTask: PropTypes.func.isRequired,
    cancelTask: PropTypes.func.isRequired,
  };

  titleRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  dateRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  timeRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  fileRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  commentRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  completedRef = React.createRef();
  // eslint-disable-next-line lines-between-class-members
  importantRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();

    const { addTask } = this.props;
    const task = {
      title: this.titleRef.current.value,
      date: this.dateRef.current.value,
      time: this.timeRef.current.value,
      file: this.fileRef.current.value,
      comment: this.commentRef.current.value,
      completed: this.completedRef.current.checked,
      important: this.importantRef.current.checked,
    };

    if (this.titleRef.current.value === '') {
      alert('Task name must be filled in!');
    } else {
      addTask(task);
      e.currentTarget.reset();
    }
  };

  render() {
    const { formRef, cancelTask, isEditing } = this.props;
    const toggleEditStatus = isEditing ? 'is-editing' : '';

    return (
      <form ref={formRef} className="single-task__edit new-task" onSubmit={this.handleSubmit}>
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
          <div className={`edit-head__edit ${toggleEditStatus}`}>
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
              <label htmlFor="file" className="edit-body__label">
                File
              </label>
              <input ref={this.fileRef} type="file" name="file" />
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
              onClick={() => cancelTask()}
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
