import FormField from "../Form/FormField";
import { MdAdd } from "react-icons/md";
import "./ToDo.css"
function NewTodo({onChange, value, addTodo}) {
    const sectionStyle =[
        "GlassEffect","p-5","m-5","flex","items-center","flex-row","w-full"
    ];

    return(
        <section  className={sectionStyle.join(" ")}>
            <MdAdd size={"4rem"} color={"#548E94"} onClick={addTodo} ></MdAdd>
            <FormField
                caption="Escribir una nota para no olvides que tienes que hacer."
                type="text"
                id="TareaId"
                name="TareaName"
                onChange={onChange}
                value={value}
            >
            
            </FormField>
        </section>
    );
}

export default NewTodo;