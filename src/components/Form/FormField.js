function FormField({caption, type, id, name, onChange ,value}) {
    return (
        <section>
            <label>
                {caption}
            </label>
            <input type={type} id={id} name={name} onChange={onChange} value={value}/>
        </section>
    )
}

export default FormField;