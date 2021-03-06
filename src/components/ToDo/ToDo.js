import { useState } from "react";
import NavBar from "../NavBars/NavBar";
import NewTodo from "./NewTodo";
import ToDoList from "./ToDoList";

function ToDo() {
    //Estilos
    const contenedorStyles = [
        "App", "flex", "flex-col"
    ]
    //Variables de estado
    const [toDoDato, setToDoDato] = useState(
        {
            todos:[],
            nuevaToDo:"",
        }
    );
    //Crear una nueva nota desde el input
    const InsertarUnaNota = (elemento) =>
    {
        const {value} = elemento.currentTarget;
        setToDoDato({...toDoDato, nuevaToDo: value});
        console.log(toDoDato);
    };

    //Agrega la nota al arreglo donde estaran todas.
    const AgregarNota = () => 
    {
        let newToDo = {
            description: toDoDato.nuevaToDo,
            completed:false,
            id : new Date().getTime()
        };
        let newTodos = toDoDato.todos;
        newTodos.push(newToDo);
    
        setToDoDato({todos:newTodos, nuevaToDo: ""});
    }

    //Acciones
    const DoneHandler = (id)=>{
        const newTodos = toDoDato.todos.map((elemento)=>{
        if(elemento.id === id){
            elemento.completed = !elemento.completed;
        }
        return elemento;
        });
    
        setToDoDato({...toDoDato, todos:newTodos});
    };
    
    const DeleteHandler = (id)=>{
        const newTodos = toDoDato.todos.filter((elemento) => {
            return elemento.id !==id;
        });
    
        setToDoDato({ ...toDoDato, todos: newTodos });
    }

    return (
    <div className={contenedorStyles.join(" ")} >
        <NavBar>

        </NavBar>

        <div className="flex flex-col items-center py-20 md:px-60 px-5 w-full" >
            <NewTodo
                onChange = {InsertarUnaNota}
                value    = {toDoDato.nuevaToDo}
                addTodo  = {AgregarNota}
            >

            </NewTodo>
            <ToDoList 
                toDos={toDoDato.todos}
                doneHandler={DoneHandler}
                deleteHandler={DeleteHandler}
            >
            </ToDoList>
        </div>
    </div>
    
    );
}

export default ToDo;