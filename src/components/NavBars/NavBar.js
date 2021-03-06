import NavBarItem from "./NavBarItem";
import "./NavBar.css";
function NavBar() {
    let dummyData =[
        {etiqueta: "Cerrar sesion", enlace:"/LoginApp"}
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
            <h1>Name</h1>

            <ul>
                {navBarItems}
            </ul>
        </nav>
    );
}

export default NavBar;