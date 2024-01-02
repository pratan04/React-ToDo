



function Todoitem({todoName,todoDate}){

// let todoName="Buy Milk";
// let todoDate="4/10/2023";


return <div>
    
    <div className="container text-center">
        <div className="row"> 
  
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger">delete</button></div><br />

  </div>

</div>
</div>

}

export default Todoitem;