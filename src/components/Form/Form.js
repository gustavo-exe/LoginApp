function Form({titulo,children})
{
    const contenedor = [
        "h-150" , "p-5", "w-96"
    ]

    const encabezadostyle = [
        "my-5", "text-3xl", "font-bold"
    ]
    return(
        <form className={contenedor.join(" ")}>
            <h1 className={encabezadostyle.join(" ")}>{titulo}</h1>
            {children}
        </form>
    );
}

export default Form;