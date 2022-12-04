import React from 'react';
import './APP.css';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';
import Todo from './components/Todo';

function APP(){
    return(
    <div className='todo-app'>
       <Todolist />
    </div>);
};

export default APP