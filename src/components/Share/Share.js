import PropTypes from 'prop-types';
import React, { memo } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

function Share({ url }) {
  return (
    <>
      <div>
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>
      </div>
      <div>
        <LinkedinShareButton url={url}>
          <LinkedinIcon />
        </LinkedinShareButton>
      </div>
    </>
  );
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
};

export default memo(Share);
