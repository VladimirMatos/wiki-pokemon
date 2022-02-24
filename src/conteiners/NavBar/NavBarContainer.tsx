import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavCont() {
    return (
        <nav className="Nav">
            <ul className="NavList">
                <li>
                    <Link className="Nav-text" to="/">Home</Link>
                </li>
                <li>
                    <Link className="Nav-text" to="/PokemonsImage">Pokemon Sprit</Link>
                </li>
            </ul>
        </nav>
    );
}