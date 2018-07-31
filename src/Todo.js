import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return todo.isDone ? (
    <strike>
      {todo.text}
    </strike>) : (
      <span>
        {todo.text}
      </span>);
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
