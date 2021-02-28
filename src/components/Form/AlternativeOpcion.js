function AlternativeOpcion({opcion}) {
    //Estilos
    const contenedor = [
        "flex", "flex-col", "p-2", "text-center"
    ]
    
    return(
        <div className={contenedor.join(" ")}>
            
            <a className="font-bold">
                {opcion}
            </a>
            
        </div>
    )
}

export default AlternativeOpcion;