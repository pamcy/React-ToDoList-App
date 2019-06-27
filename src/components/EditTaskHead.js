/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class EditTaskHead extends React.Component {
  static propTypes = {};

  render() {
    const { handleInputChange, isEditing } = this.props;
    const { title, completed, important } = this.props.data;
    const toggleEditStatus = isEditing ? 'is-editing' : '';

    return (
      <div className="edit-head">
        <div className="edit-head__checkbox">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            checked={completed}
            onChange={handleInputChange}
          />
          <label htmlFor="completed" />
        </div>
        <div className="edit-head__content">
          <input
            className="edit-head__input-title"
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
            id="important"
            checked={important}
            onChange={handleInputChange}
          />
          <label htmlFor="important" />
        </div>
        <div className={`edit-head__edit ${toggleEditStatus}`}>
          <i className="fas fa-pen edit-head__icon-edit" />
        </div>
      </div>
    );
  }
}

export default EditTaskHead;
