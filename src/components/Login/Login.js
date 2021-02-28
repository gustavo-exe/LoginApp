import React, {useState} from "react";
import FormField from "../Form/FormField";
import Form from "../Form/Form";
import FormAction from "../Form/FormAction";
function Login() {
    const [formData , setFormData] = useState({
        username:"",
        password:""
    });;
    
    const myOnChange = function (e) {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value, [name+"Error"]:console.error});
        console.log(formData);
    }
    return(
        <Form>
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
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={myOnChange}>
                
            </FormField>
            <FormAction
            caption="Iniciar"
            onClick={
                (modal)=>{
                    modal.preventDefault();
                    modal.stopPropagation();
                    const { username, password } = formData;
                    
                    if (password){
                        (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(password) ? alert(`!Bievenido ${username}!`) :alert("Contraseña Inválida");
                    }
                    
                }
            }
            >
            </FormAction>
        </Form>
    )
    
}

export default Login;