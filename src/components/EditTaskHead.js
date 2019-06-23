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
    const { onChange } = this.props;
    return (
      <div className="edit-head">
        <div className="edit-head__checkbox">
          <input type="checkbox" name="completed" id="completed" onChange={onChange} />
          <label htmlFor="completed" />
        </div>
        <div className="edit-head__content">
          <input
            className="edit-head__input-title"
            type="text"
            name="title"
            onChange={onChange}
            placeholder="Add a task"
          />
        </div>
        <div className="edit-head__priority">
          <input type="checkbox" name="important" id="important" onChange={onChange} />
          <label htmlFor="important" />
        </div>
        <div className="edit-head__edit">
          <i className="fas fa-pen edit-head__icon-edit" />
        </div>
      </div>
    );
  }
}

export default EditTaskHead;
