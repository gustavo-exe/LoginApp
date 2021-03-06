import { NavLink } from "react-router-dom";

function NavBarItem({etiqueta, enlace}) {
    return(
        <li>
            <NavLink to = {enlace}>
                {etiqueta}
            </NavLink>
        </li>
    )
}

export default NavBarItem;