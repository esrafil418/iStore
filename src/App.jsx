import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ProductsSection from "./components/ProductsSection/ProductsSection";

export default function App() {
	return (
		<div>
			<Navbar />

			<main className="pb-5">
				<div className="container">
					<h1 className="text-center main-title mt-4">All Products</h1>
					<ProductsSection title="Phones" />
					<ProductsSection title="Laptops" />
					<ProductsSection title="Consoles" />
					<ProductsSection title="Monitors" />
					<ProductsSection title="Speakers" />
				</div>
			</main>
		</div>
	);
}
