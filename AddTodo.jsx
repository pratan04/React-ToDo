function AddTodo(){

    return <div>
        <div className="container text-center">

  <div className="row">

  <div className="col-6"><input type="text" placeholder="enter todo here"/></div>
    <div className="col-4"><input type="date" placeholder="enter date"/></div>
    <div className="col-2"><button type="button" className="btn btn-success">add</button></div><br/>
    </div>
    </div>
    </div>
}

export default AddTodo;