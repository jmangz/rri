import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div className="todo">
    <input type="text" placeholder="Add todo" />
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objects).isRequired,
};
export default TodoList;
