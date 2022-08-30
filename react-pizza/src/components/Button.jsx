import React from "react";
import classnames from 'classnames'
import { PropTypes } from 'prop-types';

const Button = ({ className, outline, children, onClick }) => {
  return (
    <button
    onClick={onClick}
    className={classnames('button', className, {
      'button--outline': outline,
    })}>
      {children}
  </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;