function FormChecked({type, id, value, description}) {
    return(
        <section >
            <input  type={type} id={id} value={value}/><span>&nbsp;{description}</span>
        </section>
    )
}

export default FormChecked;