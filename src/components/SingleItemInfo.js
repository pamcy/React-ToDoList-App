import React from 'react';

class SingleItemInfo extends React.Component {
  render() {
    return (
      <div className="single-item__infos">
        <span className="single-item__info">
          <i className="far fa-calendar-alt single-item__icon-calendar" />
        </span>
        <span className="single-item__info">
          <i className="far fa-file single-item__icon-file" />
        </span>
        <span className="single-item__info">
          <i className="far fa-comment-dots single-item__icon-comment" />
        </span>
      </div>
    );
  }
}

export default SingleItemInfo;
