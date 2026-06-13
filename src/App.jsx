import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import products from "./data/products";
import { useState } from "react";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";

export default function App() {
	const [allProducts, setAllProducts] = useState(products);
	return (
		<div>
			<Navbar />

			<main className="pb-5">
				<div className="container">
					<h1 className="text-center main-title mt-4">All Products</h1>
					{allProducts.map((product) => (
						<ProductsSection {...product} />
					))}
				</div>
			</main>
			<Toast />
			<Cart />
		</div>
	);
}
