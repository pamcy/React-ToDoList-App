import React from 'react';

class EditTask extends React.Component {
  render() {
    return (
      <form className="edit-task">
        <div className="edit-task__content">
          <div className="edit-task__field">
            <label htmlFor="deadline" className="edit-task__label">
              Deadline
            </label>
            <div className="edit-task__input-wrapper">
              <input type="date" name="date" />
              <input type="time" name="time" />
            </div>
          </div>
          <div className="edit-task__field">
            <label htmlFor="file" className="edit-task__label">
              File
            </label>
            <input type="file" name="file" id="file" />
          </div>
          <div className="edit-task__field">
            <label htmlFor="comment" className="edit-task__label">
              Comment
            </label>
            <textarea name="comment" rows="8" placeholder="Type your memo here..." />
          </div>
        </div>

        <div className="edit-task__btns">
          <a href="" className="edit-task__btn edit-task__btn--cancel">
            &#10005; Cancel
          </a>
          <a href="" className="edit-task__btn edit-task__btn--add">
            ＋ Add Task
          </a>
        </div>
      </form>
    );
  }
}

export default EditTask;
