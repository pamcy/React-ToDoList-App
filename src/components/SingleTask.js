import React from 'react';
import PropTypes from 'prop-types';
import EditTaskHead from './EditTaskHead';
import EditTaskBody from './EditTaskBody';

class SingleTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
    closeEditBody: PropTypes.func,
    editIsOpen: PropTypes.bool,
  };

  formRef = React.createRef();

  state = {
    title: null,
    date: null,
    time: null,
    file: null,
    comment: null,
    completed: false,
    important: false,
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.checked || e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, date, time, file, comment, completed, important } = this.state;
    const { addTask, closeEditBody } = this.props;

    const task = {
      id: Date.now(),
      title,
      date,
      time,
      file,
      comment,
      completed,
      important,
    };

    if (title) {
      addTask(task);
    }

    e.currentTarget.reset();
    closeEditBody();
  };

  handleCancel = () => {
    const { closeEditBody } = this.props;

    this.formRef.current.reset();
    closeEditBody();
  };

  render() {
    const { editIsOpen, data } = this.props;

    return (
      <li className="single-task">
        <form className="single-task__edit" ref={this.formRef} onSubmit={this.handleSubmit}>
          <EditTaskHead editIsOpen={editIsOpen} onChange={this.handleInputChange} data={data} />
          <EditTaskBody
            data={data}
            onChange={this.handleInputChange}
            handleCancel={this.handleCancel}
          />
        </form>
      </li>
    );
  }
}

export default SingleTask;

// https://stackoverflow.com/questions/35815631/react-get-child-component-data-from-parent
