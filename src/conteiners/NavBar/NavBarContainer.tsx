import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavCont() {
    return (
        <nav className="Nav">
            <ul className="NavList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/PokemonsImage">Pokemon Sprit</Link>
                </li>
            </ul>
        </nav>
    );
}