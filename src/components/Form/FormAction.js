function FormAction({caption, onClick}) {

    const buttonstyle = [
        "w-full", "text-white", "my-4", "rounded-lg"
    ]

    return(
        <button
        className={buttonstyle.join(" ")}
        onClick={onClick}
        >
            {caption}
        </button>
    );
}

export default FormAction;