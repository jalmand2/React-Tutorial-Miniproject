import { useState } from 'react';
// useState is a react hook and can only be called directly in react component functions and in custom hooks

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [ showModal, setModalIsOpen ] = useState(false);
    //stored value in first element above, second element is a function that allows you to change the stored value
    //useState returns an array with two elements
    function deleteHandler() {
        setModalIsOpen(true);
    } 
  return (
  <div className="card">
    <h2>{props.text}</h2>
    <div classsName="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
    { showModal && <Modal /> }
    { showModal && <Backdrop /> }
  </div>
  );
}

export default Todo;
// Name of function has to start w/ capital to differentiate it from the built-in HTML element
// React wants capitalization of custom components
//props helps us to pass values