import React from 'react';
import PropTypes from 'prop-types';

class EditTaskHead extends React.Component {
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
    openEditMode: PropTypes.func.isRequired,
  };

  render() {
    const { uid, data, handleInputChange, openEditMode } = this.props;
    const { title, isEditMode, completed, important } = data;
    const editStatus = isEditMode ? 'is-editing' : '';
    const importantStatus = important ? 'is-important' : '';
    const completedStatus = completed ? 'is-completed' : '';

    return (
      <div className={`edit-head ${importantStatus}`}>
        <div className="edit-head__checkbox">
          <input
            type="checkbox"
            name="completed"
            id={`completed-${uid}`}
            checked={completed}
            onChange={handleInputChange}
          />
          <label htmlFor={`completed-${uid}`} />
        </div>
        <div className="edit-head__content" onClick={() => openEditMode(uid)}>
          <input
            className={`edit-head__input-title ${completedStatus}`}
            type="text"
            name="title"
            value={title}
            placeholder="Add a task"
            onChange={handleInputChange}
            autoFocus
          />
        </div>
        <div className="edit-head__priority">
          <input
            type="checkbox"
            name="important"
            id={`important-${uid}`}
            checked={important}
            onChange={handleInputChange}
          />
          <label htmlFor={`important-${uid}`} />
        </div>
        <div className={`edit-head__edit ${editStatus}`} onClick={() => openEditMode(uid)}>
          <i className="fas fa-pen edit-head__icon-edit" />
        </div>
      </div>
    );
  }
}

export default EditTaskHead;
