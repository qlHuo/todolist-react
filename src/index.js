import React from 'react';
import ReactDOM from 'react-dom';

//引入样式文件
import './style.css';
// 大写字母开头都是组件
import TodoList from './TodoList';



ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

