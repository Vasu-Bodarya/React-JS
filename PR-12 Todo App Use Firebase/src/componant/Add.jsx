import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add_todo, Delete_todo, View_todo, Clear_all_todos } from '../Redux/action/TodoAction';

const Add = () => {
  const [list, setList] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) {
      alert('Please enter a Todo item!');
      return;
    }
    let obj = {
      list,
    };
    dispatch(Add_todo(obj));
    setList('');
    alert('YOUR RECORD IS ADDED....!');
  };

  const AllTodos = useSelector((state) => state.todo.TodoList);

  useEffect(() => {
    dispatch(View_todo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(Delete_todo(id));
    alert('YOUR RECORD IS BEING DELETED ....!');
  };

  const handleClearAll = () => {
    dispatch(Clear_all_todos());
    alert('ALL RECORDS HAVE BEEN CLEARED!');
  };

  return (
    <>
      <div className='w-50 mt-5 p-3'>
        <h2 className='bg-secondary text-white p-2'>Todo List</h2>
        <div className='mt-4'>
          <form className='d-flex' action='' onSubmit={handleSubmit}>
            <input
              type='text'
              className='w-100 ps-2'
              placeholder='Add a Todo..'
              onChange={(e) => setList(e.target.value)}
              value={list || ''}
            />
            <button type='submit' className='btn btn-secondary text-white rounded-0'>
              Submit
            </button>
          </form>
        </div>

        <div className='bg-light mt-4 p-4 rounded-4'>
          <ul className='p-0 m-0'>
            {AllTodos.map((item, index) => {
              return (
                <li key={index} className='d-flex justify-content-between p-2'>
                  <h4 className='p-0 m-0 w-50 d-flex flex-start'>{item.list}</h4>
                  <button className='btn btn-secondary' onClick={() => handleDelete(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <button className='btn btn-danger mt-4' onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default Add;
