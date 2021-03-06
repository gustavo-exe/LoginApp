import React, {useState} from "react";
import FormField from "../Form/FormField";
import Form from "../Form/Form";
import FormAction from "../Form/FormAction";
import FormChecked from "../Form/FormChecked";
import AlternativeOpcion from "../Form/AlternativeOpcion";
import {useHistory} from "react-router-dom";

function Login() {
    //Estilos
    const styles = [
        "App", "flex", "justify-center","items-center","p-5"
    ]

    //Informacion del usuario 
    const [formData , setFormData] = useState({
        username:"",
        password:""
    });;
    
    //Cambio de pagina
    const history = useHistory();
    const cambioDePagina = (username) => 
    {   
        history.push('/LoginApp/ToDo'); 
        alert(`!Bievenido ${username}!`)
    };

    //Cambiand del valor de los atributos FormData
    const myOnChange = function (e) {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value, [name+"Error"]:console.error});
        console.log(formData);
    }
    return(
    <div className={styles.join(" ")}>
        <Form titulo="Ingresar" >
            <FormField 
            caption="Usuario"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={myOnChange}>
                
            </FormField>
            <FormField 
            caption="Contraseña"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={myOnChange}>
                
            </FormField>
            <FormChecked
                type="checkbox" 
                id="cbox1" 
                value="first_checkbox"
                description="Recordar los datos"
            >
            </FormChecked> 
            <FormAction
            caption="Iniciar"
            onClick={
                (modal)=>{
                    modal.preventDefault();
                    modal.stopPropagation();
                    const { username, password } = formData;
                    
                    if (password){
                        (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(password) ? cambioDePagina(username) :alert("Contraseña Inválida");
                    }
                    
                }
            }
            >
            </FormAction>
            <AlternativeOpcion
                opcion ="¿No tienes una cuenta? Crea una."
            >
            </AlternativeOpcion>
        </Form>
    </div>
    )
    
}

export default Login;