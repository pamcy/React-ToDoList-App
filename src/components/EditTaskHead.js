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
    const { editIsOpen, details, getTaskCompleted, getTaskImportant } = this.props;
    const toggleComplete = details.completed ? 'is-checked' : '';
    const toggleImportant = details.important ? 'is-important' : '';
    const toggleEditing = editIsOpen ? 'is-editing' : '';

    return (
      <div className="edit-head">
        <div className={`edit-head__checkbox ${toggleComplete}`} onClick={() => getTaskCompleted()}>
          <i className="fas fa-square edit-head__icon-uncheck" />
          <i className="fas fa-check-square edit-head__icon-checked" />
        </div>
        <div className="edit-head__content">
          <input
            className="edit-head__input-title"
            type="text"
            name="title"
            onChange={this.props.onChange}
            placeholder="Add a task"
          />
          {/* <SingleItemInfo /> */}
        </div>
        <div
          className={`edit-head__priority ${toggleImportant}`}
          onClick={() => getTaskImportant()}
        >
          <i className="far fa-star edit-head__icon-white-star" />
          <i className="fas fa-star edit-head__icon-colored-star" />
        </div>
        <div className={`edit-head__edit ${toggleEditing}`}>
          <i className="fas fa-pen edit-head__icon-edit" />
        </div>
      </div>
    );
  }
}

export default EditTaskHead;
