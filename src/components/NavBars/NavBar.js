import NavBarItem from "./NavBarItem";
import "./NavBar.css";
function NavBar() {
    let dummyData =[
        {etiqueta: "Cerrar sesion", enlace:"/"}
    ];

    let navBarItems = dummyData.map((elemento, indice) =>
    {
        return (
            <NavBarItem 
                etiqueta = {elemento.etiqueta}
                enlace = {elemento.enlace}
                key = {indice}>
            </NavBarItem>
        );
    });

    return(
        <nav>
            <h1 className="font-bold">Tareas por hacer.</h1>

            <ul>
                {navBarItems}
            </ul>
        </nav>
    );
}

export default NavBar;