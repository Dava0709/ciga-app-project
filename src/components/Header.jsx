import categoryIcon from "../assets/images/menu button.png";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header class="Header">
            <div class="container">
                <Link to="/categories" class="btn-category">
                    <img src={categoryIcon} alt="menu button" />
                </Link>
            </div>
        </header>
    );
}

export default Header;