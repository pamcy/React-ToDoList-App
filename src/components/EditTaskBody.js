import React from 'react';
import PropTypes from 'prop-types';

class EditTaskBody extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
  };

  render() {
    const { onChange } = this.props;

    return (
      <div className="edit-body">
        <div className="edit-body__content">
          <div className="edit-body__field">
            <label className="edit-body__label">Deadline</label>
            <div className="edit-body__input-wrapper">
              <input type="date" name="date" onChange={onChange} />
              <input type="time" name="time" onChange={onChange} />
            </div>
          </div>
          <div className="edit-body__field">
            <label className="edit-body__label">File</label>
            <input type="file" name="file" onChange={onChange} />
          </div>
          <div className="edit-body__field">
            <label className="edit-body__label">Comment</label>
            <textarea
              name="comment"
              onChange={onChange}
              rows="8"
              placeholder="Type your memo here..."
            />
          </div>
          <div className="edit-body__btns">
            <button
              type="button"
              className="edit-body__btn edit-body__btn--cancel"
              onClick={() => this.props.handleCancel()}
            >
              &#10005; Cancel
            </button>
            <button type="submit" className="edit-body__btn edit-body__btn--add">
              ＋ Add Task
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTaskBody;