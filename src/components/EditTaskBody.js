import React from 'react';
import PropTypes from 'prop-types';

class EditTaskBody extends React.Component {
  static propTypes = {};

  render() {
    const { handleInputChange, cancelTask } = this.props;
    const { date, time, file, comment } = this.props.data;

    return (
      <div className="edit-body">
        <div className="edit-body__content">
          <div className="edit-body__field">
            <label htmlFor="deadline" className="edit-body__label">
              Deadline
            </label>
            <div className="edit-body__input-wrapper">
              <input
                ref={this.dateRef}
                type="date"
                name="date"
                value={date}
                onChange={handleInputChange}
              />
              <input
                ref={this.timeRef}
                type="time"
                name="time"
                value={time}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="edit-body__field">
            <label htmlFor="file" className="edit-body__label">
              File
            </label>
            <input ref={this.fileRef} type="file" name="file" onChange={handleInputChange} />
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
              value={comment}
              onChange={handleInputChange}
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
    );
  }
}

export default EditTaskBody;
