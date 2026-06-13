import { IoBagOutline } from "react-icons/io5";
import "./Navbar.css";
import { useContext } from "react";
import productsContext from "../../contexts/ProductsContext";

export default function Navbar() {
	const contextData = useContext(productsContext);
	return (
		<nav className="navbar navbar-expand-sm py-3 d-flex">
			<div className="container">
				<a href="#" className="navbar-brand">
					iStore
				</a>

				<ul className="navbar-nav me-auto ms-3">
					<li className="nav-item">
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
				</ul>

				<div className="bag-box">
					<a href="#" className="bag">
						<IoBagOutline
							className="text-white"
							onClick={() => contextData.setIsShowCard(true)}
						/>
						<span className="bag-products-counter">0</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
