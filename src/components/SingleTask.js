import React from 'react';
import PropTypes from 'prop-types';
import EditTaskHead from './EditTaskHead';
import EditTaskBody from './EditTaskBody';

class SingleTask extends React.Component {
  static propTypes = {};

  handleInputChange = e => {
    const { name, value, type, checked } = e.currentTarget;
    const inputValue = type === 'checkbox' ? checked : value;
    const { id, updateTask } = this.props;

    updateTask(id, {
      [name]: inputValue,
    });
  };

  // handleCancel = () => {
  //   const { closeEditBody } = this.props;

  //   this.formRef.current.reset();
  //   closeEditBody();
  // };

  render() {
    const { id, data, formRef, isEditing, cancelTask } = this.props;

    return (
      <li className="single-task">
        <form ref={formRef} className="single-task__edit">
          <EditTaskHead
            id={id}
            data={data}
            handleInputChange={this.handleInputChange}
            isEditing={isEditing}
          />
          <EditTaskBody
            id={id}
            data={data}
            handleInputChange={this.handleInputChange}
            cancelTask={cancelTask}
          />
        </form>
      </li>
    );
  }
}

export default SingleTask;
