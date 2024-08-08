import React, {useState} from 'react';
import {v4} from 'uuid';

const TodoForm = ({handleSubmit, handleInput, inputTitle, handleInputdesc, inputDesc, toggleSubmit}) => {
    
    return (

          <div>
            <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
              <div className="row">
                <div className="text-center">
                  <h2>{toggleSubmit ? "Add Task" : " Edit Task"}</h2>
                </div>
                <form className="col-12 p-2" onSubmit={handleSubmit}>
                  <label htmlFor="title" className="my-2">
                    Enter Task
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    className="w-100 my-1 p-2"
                    onChange={handleInput}
                    value={inputTitle}
                  />
                  <label className="my-2" htmlFor="description">
                    Enter Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="w-100 my-1 p-2"
                    onChange={handleInputdesc}
                    value={inputDesc}
                  />
                  {/* <div className="text-center"> */}
                  {toggleSubmit ? (
                    <button className="btn btn-primary my-2">Save</button>
                  ) : (
                    <button className="btn btn-primary my-2">Update</button>
                  )}
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>

    );
   };

export default TodoForm;