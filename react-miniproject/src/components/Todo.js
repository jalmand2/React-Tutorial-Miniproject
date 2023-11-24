function Todo() {
  return (
  <div className="card">
    <h2>TITLE</h2>
    <div classsName="actions">
      <button className="btn">Delete</button>
    </div>
  </div>
  );
}

export default Todo;
// Name of function has to start w/ capital to differentiate it from the built-in HTML element
// React wants capitalization of custom components
