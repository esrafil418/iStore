import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import products from "./data/products";
import { useState } from "react";
import Toast from "./components/Toast/Toast";
import Cart from "./components/Cart/Cart";
import productsContext from "./contexts/ProductsContext";

export default function App() {
	const [allProducts, setAllProducts] = useState(products);
	const [userCart, setUserCart] = useState([]);
	const [isShowToast, setIsShowToast] = useState(false);
	const [isShowCard, setIsShowCard] = useState(false);
	return (
		<div>
			<productsContext.Provider
				value={{
					allProducts,
					userCart,
					setUserCart,
					isShowToast,
					setIsShowToast,
					isShowCard,
					setIsShowCard,
				}}
			>
				<Navbar />

				<main className="pb-5">
					<div className="container">
						<h1 className="text-center main-title mt-4">All Products</h1>
						{allProducts.map((product) => (
							<ProductsSection />
						))}
					</div>
				</main>
				<Toast />
				<Cart />
			</productsContext.Provider>
		</div>
	);
}
