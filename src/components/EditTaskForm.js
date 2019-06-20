import React from 'react';
import PropTypes from 'prop-types';
import SingleTask from './SingleTask';

class EditTaskForm extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  dateRef = React.createRef();

  timeRef = React.createRef();

  fileRef = React.createRef();

  commentRef = React.createRef();

  state = {
    title: '',
    completed: false,
    important: false,
  };

  getTaskTitle = value => {
    this.setState({ title: value });
  };

  getTaskCompleted = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  getTaskImportant = () => {
    this.setState({
      important: !this.state.important,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, completed, important } = this.state;
    const { addTask } = this.props;

    const task = {
      id: Date.now(),
      title,
      date: this.dateRef.current.value,
      time: this.timeRef.current.value,
      file: this.fileRef.current.value,
      comment: this.commentRef.current.value,
      completed,
      important,
    };

    addTask(task);
  };

  render() {
    return (
      <form className="edit-task" onSubmit={this.handleSubmit}>
        <SingleTask
          details={this.state}
          getTaskTitle={this.getTaskTitle}
          getTaskCompleted={this.getTaskCompleted}
          getTaskImportant={this.getTaskImportant}
        />
        <div className="edit-task__content">
          <div className="edit-task__field">
            <label className="edit-task__label">Deadline</label>
            <div className="edit-task__input-wrapper">
              <input type="date" name="date" ref={this.dateRef} />
              <input type="time" name="time" ref={this.timeRef} />
            </div>
          </div>
          <div className="edit-task__field">
            <label className="edit-task__label">File</label>
            <input type="file" name="file" ref={this.fileRef} />
          </div>
          <div className="edit-task__field">
            <label className="edit-task__label">Comment</label>
            <textarea
              name="comment"
              ref={this.commentRef}
              rows="8"
              placeholder="Type your memo here..."
            />
          </div>
        </div>

        <div className="edit-task__btns">
          <button type="button" className="edit-task__btn edit-task__btn--cancel">
            &#10005; Cancel
          </button>
          <button type="submit" className="edit-task__btn edit-task__btn--add">
            ＋ Add Task
          </button>
        </div>
      </form>
    );
  }
}

export default EditTaskForm;
