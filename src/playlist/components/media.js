import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  handleClick = (event) => {
    const { openModal, id } = this.props;
    openModal(id);
  }

  render() {
    const {
      cover,
      title,
      author,
    } = this.props;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['audio', 'video']),
  openModal: PropTypes.func.isRequired,
}

export default Media;
