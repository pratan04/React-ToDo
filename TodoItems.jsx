
import Todoitem from "./Todoitem";


function TodoItems({todoItems}){

    return <>
    <div className="items-container">

    {todoItems.map((item) => {
        return (<Todoitem todoName={item.Name} todoDate={item.dueDate} />);
    })}
    
     {/* <Todoitem todoName={todoItems.Name} todoDate={todoItems.dueDate}/> */}
    </div>
    </>
}

export default TodoItems;