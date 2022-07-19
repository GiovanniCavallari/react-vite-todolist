import React from 'react';
import P from 'prop-types';
import Button from '../Button';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

import './styles.css';

function ListItem({ text, done, onFinish, onRemove }) {
  return (
    <div className="list-item-container" data-testid="list-item">
      <p className={`list-item-text ${done && 'done'}`}>{text}</p>

      <div className="list-item-button-container">
        <Button type="success" onClick={onFinish}>
          <FaCheck />
        </Button>
        <Button type="danger" onClick={onRemove}>
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  text: P.string.isRequired,
  done: P.bool.isRequired,
  onFinish: P.func.isRequired,
  onRemove: P.func.isRequired,
};

export default ListItem;
