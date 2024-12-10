"use client";

import { ProductType } from "@/app/api/product/type";
import { useEffect, useState } from "react";

const ViewProduct = () => {
	const [products, setProduct] = useState<ProductType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	//これをリポジトリ―に持っていけばよい
	// ここが表示場所
	useEffect(() => {
		const fetchProducts = async () => {
			{
				const res = await fetch("/api/product/");
				const products = await res.json();
				setProduct(products);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="w-1/2 flex flex-col ">
			<div className="flex justify-between mb-5">
				<p className="text-center font-bold text-3xl">Supabase: User table</p>
			</div>
			<div className="flex flex-col items-center justify-start h-64 overflow-y-scroll border">
				{products.map((product) => (
					<div key={product.id} className="flex border-b w-full px-2 py-1">
						<p className="text-sm text-gray-800">id: {product.id}</p>
						<p className="text-sm text-gray-800 ml-4">
							タイトル: {product.title}
						</p>
						<p className="text-sm text-gray-800 ml-4">
							個数: {product.quantity}
						</p>
						<p className="text-sm text-gray-800 ml-4">価格: {product.price}</p>
						<p></p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewProduct;
