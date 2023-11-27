function Todo(props) {
    function deleteHandler() {
        
    } 
  return (
  <div className="card">
    <h2>{props.text}</h2>
    <div classsName="actions">
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
  </div>
  );
}

export default Todo;
// Name of function has to start w/ capital to differentiate it from the built-in HTML element
// React wants capitalization of custom components
//props helps us to pass values