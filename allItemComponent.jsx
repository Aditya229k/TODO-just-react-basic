function TodoItems() {
  let taskName = 'Buy Milk';
  let taskName2 = 'Study hard';

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div>{taskName}</div>
        </div>
        <div className="col-2">
          <div>18/09/2024</div>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div>{taskName2}</div>
        </div>
        <div className="col-2">
          <div>18/09/2024</div>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
</div>
    
  );
}


export default TodoItems;
