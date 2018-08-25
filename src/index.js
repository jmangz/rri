import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const dummyTodos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' },
];

ReactDOM.render(<TodoList todos={dummyTodos} />, document.getElementById('app'));