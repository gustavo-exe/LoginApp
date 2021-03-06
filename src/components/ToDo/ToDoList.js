import { MdDelete} from 'react-icons/md';
import "./ToDo.css";

function ToDoListItem({descripcion, id, completed, doneHandler, deleteHandler})
{
    //Estilos
    const inputStyle =[
        "my-2","rounded-lg" ,"p-2", "w-full","rounded-4", "border", "border-gray-400", "check"
    ]
    const elemenListStyle =[
        "GlassEffect"," flex"," items-center","my-3 ","p-3"," flex-row", "w-full"
    ]
    
    const onClick = ()=>{
        doneHandler(id);
    }
    const onDeleteClick = ()=>{
        deleteHandler(id);
    }
    
    const tacharTexto = (completed)?" striked": " ";

    return (
    <li className={elemenListStyle.join(" ")} >        
        <MdDelete color={"#548E94"}size={"2rem"} onClick={onDeleteClick}></MdDelete>
        <input className={inputStyle.join(" ")} type="checkbox" onClick={onClick}></input>
        <p className={"text-2xl mx-2" + tacharTexto} >{descripcion}</p>
    </li>);
}


function ToDoList({toDos, doneHandler, deleteHandler}) {
    const toDoItems = toDos.map((elemento)=>{
        return(
            <ToDoListItem
                key={elemento.doneHandlerid}
                descripcion={elemento.description}
                id={elemento.id}
                completed={elemento.completed}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
            >

            </ToDoListItem>
        )
    });
    
    return(
        <section className=" w-full">
            <ul>
                {toDoItems}
            </ul>
        </section>
    )
}

export default ToDoList;