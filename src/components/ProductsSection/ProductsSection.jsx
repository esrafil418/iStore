import { useContext } from "react";
import "./ProductsSection.css";
import productsContext from "../../contexts/ProductsContext";
export default function ProductsSection({ title, info }) {
	const contextData = useContext(productsContext);

	const addToCart = (product) => {
		contextData.setIsShowToast(true);

		setTimeout(() => {
			contextData.setIsShowToast(false);
		}, 2500);

		let isInUserCart = contextData.userCart.some(
			(bagProduct) => bagProduct.title === product.title,
		);

		if (!isInUserCart) {
			let newUserCartProduct = {
				id: contextData.userCart.length + 1,
				title: product.title,
				price: product.price,
				count: 1,
			};

			contextData.setUserCart((prevProduct) => [
				...prevProduct,
				newUserCartProduct,
			]);
		} else {
			let userCart = [...contextData.userCart];

			userCart.map((bagProduct) => {
				if (bagProduct.title === product.title) {
					bagProduct.count += 1;
					return true;
				}
			});
			contextData.setUserCart(userCart);
		}
	};
	return (
		<>
			{contextData.allProducts.map((productSection) => (
				<div className="row justify-content-center mt-5">
					<h3 className="text-center">{productSection.title}</h3>

					{productSection.info.map((product) => (
						<div className="col-xl-3 col-lg-4 col-md-5 mt-5">
							<div className="card py-3 px-3">
								<div className="col-12 text-center">
									<img
										src={product.img}
										alt={product.title}
										className="card-img-top w-75"
									/>
								</div>
								<div className="card-body text-center">
									<p className="card-text fw-bold">{product.title}</p>
									<p className="price">${product.price}</p>
									<br />
									<button
										type="button"
										href="javascript:void(0)"
										className="btn btn-danger"
										onClick={() => addToCart(product)}
									>
										Add to Cart
									</button>
									<a
										href="#"
										className="btn btn-outline-dark mt-3 text-capitalize"
									>
										More Information
									</a>
									<p className="number mt-3">{product.count}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</>
	);
}
