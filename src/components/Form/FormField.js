function FormField({caption, type, id, name, onChange ,value}) {
    
    const inputStyle =[
        "my-2","rounded-lg" ,"p-2", " w-full","rounded-4", "border", "border-gray-400"
    ]
    return (
        <section>
            <input className={inputStyle.join(" ")} placeholder={caption} type={type} id={id} name={name} onChange={onChange} value={value}/>
        </section>
    )
}

export default FormField;