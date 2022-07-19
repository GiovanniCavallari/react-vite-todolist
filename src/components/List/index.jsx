import React from 'react';
import P from 'prop-types';
import ListItem from '../ListItem';

import './styles.css';

function List({ items, onFinish, onRemove }) {
  return (
    items &&
    items.map((item, index) => (
      <ListItem
        key={index}
        text={item.text}
        done={item.done}
        onFinish={() => onFinish(index)}
        onRemove={() => onRemove(index)}
      />
    ))
  );
}

List.propTypes = {
  items: P.arrayOf(
    P.shape({
      text: P.string.isRequired,
      done: P.bool.isRequired,
    }),
  ).isRequired,
  onFinish: P.func.isRequired,
  onRemove: P.func.isRequired,
};

export default List;
