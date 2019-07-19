import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import SingleInfoBar from './SingleInfoBar';

const EditTaskHead = props => {
  const { uid, index, data, handleInputChange, openEditMode, currentPath } = props;
  const { title, date, comment, isEditMode, completed, important } = data;
  const editStatus = isEditMode ? 'is-editing' : '';
  const dragStatus = currentPath !== '/' ? 'drag-is-hidden' : '';
  const importantStatus = important ? 'is-important' : '';
  const completedStatus = completed ? 'is-completed' : '';
  const infoBarStatus = date.length > 0 || comment.length > 0;
  const paddingStyle = infoBarStatus ? 'has-infoBar' : '';

  return (
    <Draggable draggableId={uid} index={index}>
      {(provided, snapshot) => {
        const dragStyle = {
          boxShadow: snapshot.isDragging
            ? '2px 2px 5px 1px rgba(0, 0, 0, 0.1), -2px -2px 5px 1px rgba(0, 0, 0, 0.1)'
            : '',
          ...provided.draggableProps.style,
        };

        return (
          <div
            className={`edit-head ${importantStatus} ${dragStatus}`}
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={dragStyle}
          >
            <div className="edit-head__drag" {...provided.dragHandleProps}>
              <i className="fas fa-bars" />
            </div>
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
            <div
              className="edit-head__content"
              onClick={() => openEditMode(uid)}
            >
              <input
                className={`edit-head__input-title ${completedStatus} ${paddingStyle}`}
                type="text"
                name="title"
                value={title}
                placeholder="Add a task"
                onChange={handleInputChange}
              />
              {infoBarStatus && <SingleInfoBar data={data} />}
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
            <div
              className={`edit-head__edit ${editStatus}`}
              onClick={() => openEditMode(uid)}
            >
              <i className="fas fa-pen edit-head__icon-edit" />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

EditTaskHead.propTypes = {
  uid: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    comment: PropTypes.string,
    important: PropTypes.bool,
    completed: PropTypes.bool,
    isEditMode: PropTypes.bool,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  openEditMode: PropTypes.func.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default EditTaskHead;
