import React from 'react';
import PropTypes from 'prop-types';

class EditTaskBody extends React.Component {
  static propTypes = {
    uid: PropTypes.number.isRequired,
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      time: PropTypes.string,
      file: PropTypes.string,
      comment: PropTypes.string,
      important: PropTypes.bool,
      completed: PropTypes.bool,
      isEditMode: PropTypes.bool,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    saveTask: PropTypes.func.isRequired,
    resetTask: PropTypes.func.isRequired,
  };

  render() {
    const { uid, data, handleInputChange, saveTask, resetTask } = this.props;
    const { isEditMode, date, time, comment } = data;

    if (!isEditMode) {
      return null;
    }

    return (
      <div className="edit-body">
        <div className="edit-body__content">
          <div className="edit-body__field">
            <label htmlFor="deadline" className="edit-body__label">
              Deadline
            </label>
            <div className="edit-body__input-wrapper">
              <input type="date" name="date" value={date} onChange={handleInputChange} />
              <input type="time" name="time" value={time} onChange={handleInputChange} />
            </div>
          </div>
          <div className="edit-body__field">
            <label htmlFor="file" className="edit-body__label">
              File
            </label>
            <input type="file" name="file" onChange={handleInputChange} />
          </div>
          <div className="edit-body__field">
            <label htmlFor="comment" className="edit-body__label">
              Comment
            </label>
            <textarea
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
            onClick={() => resetTask()}
          >
            &#10005; Cancel
          </button>
          <button
            type="button"
            className="edit-body__btn edit-body__btn--add"
            onClick={e => saveTask(e, uid)}
          >
            ＋ Save
          </button>
        </div>
      </div>
    );
  }
}

export default EditTaskBody;
