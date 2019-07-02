import React from 'react';
import PropTypes from 'prop-types';

const SingleInfoBar = ({ data }) => {
  return (
    <div className="single-item__infos">
      {data.date && (
        <span className="single-item__info">
          <i className="far fa-calendar-alt single-item__icon-calendar" />
          <span className="single-item__txt">{data.date}</span>
        </span>
      )}
      {data.comment && (
        <span className="single-item__info">
          <i className="far fa-comment-dots single-item__icon-comment" />
        </span>
      )}
    </div>
  );
};

SingleInfoBar.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

export default SingleInfoBar;
