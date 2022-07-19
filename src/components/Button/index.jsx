import React from 'react';
import P from 'prop-types';

import './styles.css';

function Button({ children, type, onClick }) {
  const types = ['neutral', 'success', 'danger'];
  const buttonType = types.includes(type) ? type : 'neutral';

  return (
    <button
      className={`btn btn-${buttonType}`}
      onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: P.string,
  onClick: P.func.isRequired,
  children: P.node.isRequired,
};

export default Button;
