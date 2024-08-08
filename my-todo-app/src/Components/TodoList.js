import React, {useState} from 'react';
import {v4} from 'uuid';
import TodoForm from './TodoForm';

const TodoList = ({items, handleEdit, handleDelete, showDelete}) => {

    // ADD NEW TASK
    return (
      <div>
        {items.map((elem, index) => {
          return (
            <div
              className="row border rounded shadow p-3 mb-3 bg-white rounded  p-2"
              key={elem.id}>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div>
                  <h4>{elem.name}</h4>
                  <p>{elem.desc}</p>
                </div>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleEdit(elem.id)}
                  >
                    Edit
                  </button>
                  {showDelete ? (
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(elem.id)}>
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
              </div>
            </div>
          );
        })}
      </div>
    );
   };

export default TodoList;