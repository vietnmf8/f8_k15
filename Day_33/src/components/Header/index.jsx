import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "current" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
