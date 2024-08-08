import React, {useState} from 'react';
import {v4} from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const [showForm, setshowform] = useState(true);
    const [showNew, setshowNew] = useState(true);
    const [showDelete, setshowDelete] = useState(true);
    const [toggleSubmit, settoggleSubmit] = useState(true);
    const [isEditItem, setisEditItem] = useState(null);
    const [showList, setshowList] = useState(true);
    const [editMessage, seteditMessage] = useState(false);
    const [deleteMessage, setdeleteMessage] = useState(false);
    const [deleteMessagesuccess, setdeleteMessagesuccess] = useState(false);
    const [inputTitle, setinputTitle] = useState("");
    const [inputDesc, setinputDesc] = useState("");
    const [items, setitems] = useState([
      {
        id: v4(),
        name: "Default Task",
        desc: "Default Description",
        status: false,
      },
    ]);
     
    //   HANDLING INPUT FIELDS
    const handleInput = (e) => {
      setinputTitle(e.target.value);
    };
    const handleInputdesc = (e) => {
      setinputDesc(e.target.value);
    };
    //   HANDLING INPUT FIELDS
     
    //   SUBMITTING FORM
    const handleSubmit = (e) => {
      setshowList(true);
      setshowNew(true);
     
      e.preventDefault();
      if (!inputTitle || !inputDesc) {
        alert("fill data");
        showList(false);
      } else if (inputTitle && !toggleSubmit) {
        setitems(
          items.map((elem) => {
            if (elem.id === isEditItem) {
              return { ...elem, name: inputTitle, desc: inputDesc };
            }
            return elem;
          })
        );
     
        setinputTitle("");
        setinputDesc("");
        settoggleSubmit(true);
        setshowform(false);
        setshowDelete(true);
      } else {
        const allinputTitle = {
          id: new Date().getTime().toString(),
          name: inputTitle,
          desc: inputDesc,
        };
        setitems([allinputTitle, ...items]);
        setinputTitle("");
        setinputDesc("");
        setshowform(false);
      }
    };
    //   SUBMITTING FORM
     
    //   DELETE
    const handleDelete = (index) => {
      console.log(index);
      const updatedItems = items.filter((elem) => {
        return index !== elem.id;
      });
      setdeleteMessage(true);
     
      setTimeout(() => {
        setitems(updatedItems);
        setdeleteMessage(false);
      }, 2000);
      setdeleteMessagesuccess(false);
    };
    //   DELETE
     
    //   EDIT
    const handleEdit = (id) => {
      setshowList(false);
      setshowDelete(false);
      setshowNew(false);
      setshowform(true);
     
      settoggleSubmit(false);
      let newEditItem = items.find((elem) => {
        return elem.id === id;
      });
      setinputTitle(newEditItem.name);
      setinputDesc(newEditItem.desc);
      // setshowDelete(true)
     
      setisEditItem(id);
      console.log(newEditItem);
    };
    //   EDIT
     
    // ADD NEW TASK
    const handleAdd = () => {
      //   alert("hello")
      setshowform(true);
      setshowList(true);
      setshowNew(false);
    };
    // ADD NEW TASK
    return (
      <>
        {showNew ? (
          <div className="container">
            <div className="col-12 text-end">
              <button className="btn btn-primary " onClick={handleAdd}>
                New
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
     
        {showForm ? (
          <TodoForm handleSubmit={handleSubmit} handleInput={handleInput} inputTitle={inputTitle} handleInputdesc={handleInputdesc} inputDesc={inputDesc} toggleSubmit={toggleSubmit} />
        ) : (
          ""
        )}
     
        {showList ? (
          <div className="container py-2 ">
            {deleteMessage ? (
              <p className="text-center text-danger">Item Deleted Successfully</p>
            ) : (
              ""
            )}
            <TodoList items={items} handleEdit={handleEdit} handleDelete={handleDelete} showDelete={showDelete} /> 
          </div>
        ) : (
          ""
        )}
      </>
    );
   };

export default Todo;