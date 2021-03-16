import { useState, useEffect } from "react";
import NavBar from "../NavBars/NavBar";
import NewTodo from "./NewTodo";
import ToDoList from "./ToDoList";

import FireBaseInit from "../../FireBaseInit";

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
            waiting:false
        }
    );

    //Renderizacion de componentes.
    useEffect(
        ()=>
        {
            const todosRef = FireBaseInit.database().ref('todos').orderByKey().limitToLast(100);
            todosRef.on('child_added', (snapshot) => 
            {
                let newTodo = { ...snapshot.val(), fb_id: snapshot.key };
                let newTodos = toDoDato.todos;
                newTodos.push(newTodo);
                setToDoDato({...toDoDato, todos: newTodos});
                //setTodoData({...todoData, todos: newTodos});
            });
            todosRef.on('child_removed', (snapshot)=>
            {
                const deletedKey = snapshot.key;
                let newTodos = toDoDato.todos.filter(o=>{
                    return o.fb_id !==deletedKey;
                });
                setToDoDato({...toDoDato, todos: newTodos});
            });
            todosRef.on('child_changed', (snapshot) => 
            {
                const changedKey = snapshot.key;
                const data = snapshot.val();
                console.log(data);
                let newTodos = toDoDato.todos.map(o => 
                    {
                    if (o.fb_id === changedKey) 
                    {
                        o = {...data, fb_id:changedKey};
                    }
                return o;
                });
                setToDoDato({...toDoDato, todos: newTodos});
            });
            
            return ()=>{todosRef.off();}

        }, []);
    
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
        FireBaseInit.database().ref("todos").push(newToDo);
    }

    //Acciones
    const DoneHandler = (id)=>
    {
        const ref = FireBaseInit.database().ref("todos")
        const fbTodo = ref.child(id);
        const lcTodo = toDoDato.todos.find( (o)=>
        {
            return o.fb_id === id;
        });
        
        fbTodo.update(
        {
            "completed": !lcTodo.completed
        });
    };
    
    const DeleteHandler = (id)=>{
        const ref = FireBaseInit.database().ref("todos")
        const fbTodo = ref.child(id);
        const lcTodo = toDoDato.todos.find((o) => 
        {
            return o.fb_id === id;
        });
        fbTodo.remove();
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