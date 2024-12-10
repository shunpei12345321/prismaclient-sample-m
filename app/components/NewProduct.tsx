"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewProduct = () => {
	const [title, setTitle] = useState("");
	const [quauntity, setQuatity] = useState("");
	const [price, setPrice] = useState("");

	// const [sum.setSum] = useState(""); まだこのフックを作ってない
	//ここのfech がViewProduct. tsx に登録される

	const handleSubmit = async () => {
		{
			const response = await fetch("/api/product", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					title,
					quauntity,
					price,
				}),
			});
			const data = await response.json();
			//handleSubmit するとデータベースに飛ばされる
		}
	};

	return (
		<div className="flex flex-col space-y-10 w-1/2 p-10 items-center">
			<div className="border-2 w-2/3 p-5">
				<p className="text-center font-bold">値段表</p>
				{/* タイトル */}
				<div className="flex flex-col mb-4">
					<label htmlFor="title" className="mb-2">
						タイトル
					</label>
					<input
						onChange={(event) => {
							setTitle(event.target.value);
						}}
						type="text"
						name="name"
						id="name"
						className="border-2 p-2"
					/>
				</div>
				{/* 個数-  */}
				<div className="flex flex-col mb-4">
					<label htmlFor="quantity" className="mb-2">
						個数
					</label>
					<input
						onChange={(e) => {
							setQuatity(e.target.value);
						}}
						type="nuber"
						name="quantity"
						id="email"
						className="border-2 p-2"
					/>
				</div>
				{/* 値段  */}
				<div className="flex flex-col mb-4">
					<label htmlFor="price" className="mb-2">
						値段
					</label>
					<input
						onChange={(e) => {
							setPrice(e.target.value);
						}}
						type="number"
						name="price"
						id="price"
						className="border-2 p-2"
					/>
				</div>
			</div>
			{/* もともとはform tab  */}

			<button
				type="button"
				onClick={handleSubmit}
				className="bg-blue-500 text-white px-2 py-1"
			>
				Submit
			</button>
		</div>
	);
};

export default NewProduct;
