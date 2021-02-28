function FormAction({caption, onClick}) {
    return(
        <button
        onClick={onClick}
        >
            {caption}
        </button>
    );
}

export default FormAction;