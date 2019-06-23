/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class EditTaskHead extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      completed: PropTypes.bool,
      important: PropTypes.bool,
    }),
    getTaskCompleted: PropTypes.func,
    getTaskImportant: PropTypes.func,
  };

  render() {
    const { isNewTask, editIsOpen, onChange, data } = this.props;

    const completedValue = isNewTask ? undefined : data.completed;
    const titleValue = isNewTask ? undefined : data.title;
    const importantValue = isNewTask ? undefined : data.important;
    const editStatus = editIsOpen ? 'is-editing' : '';

    return (
      <div className="edit-head">
        <div className="edit-head__checkbox">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            onChange={onChange}
            checked={completedValue}
          />
          <label htmlFor="completed" />
        </div>
        <div className="edit-head__content">
          <input
            className="edit-head__input-title"
            type="text"
            name="title"
            value={titleValue}
            onChange={onChange}
            placeholder="Add a task"
          />
        </div>
        <div className="edit-head__priority">
          <input
            type="checkbox"
            name="important"
            id="important"
            onChange={onChange}
            checked={importantValue}
          />
          <label htmlFor="important" />
        </div>
        <div className={`edit-head__edit ${editStatus}`}>
          <i className="fas fa-pen edit-head__icon-edit" />
        </div>
      </div>
    );
  }
}

export default EditTaskHead;
