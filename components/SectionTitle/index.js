// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledHeading from './styles';

const SectionTitle = ({ children, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

SectionTitle.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

SectionTitle.defaultProps = {
  className: '',
  isWhite: false,
};

export default SectionTitle;
