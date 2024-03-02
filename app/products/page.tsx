import React from 'react';
import {iCategory, iProducts} from "./types";
import {getProducts} from "@/app/api/getProducts";
import {getProductCategories} from "@/app/api/getProductCategories";

const Products = async () => {
	async function renderProducts() {
		const products: iProducts = await getProducts();

		if (!products) return (
			<h2 className='text-red-600'>No data available</h2>
		)

		return products.products.map((product) => {
			return (
				<li key={product.id}
				    className='flex flex-col w-48'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src={product.image_url}
					     alt={product.name}
					     className='w-48 h-48 '/>
					<div className='font-bold my-2 text-sm'>{product.name}</div>
					<div className='text-xs'
					     dangerouslySetInnerHTML={{__html: product.description}}></div>
				</li>
			)
		})
	}

	async function renderProductCategories() {
		const categories: iCategory = await getProductCategories();

		if (categories.msg !== "ok") return (
			<h2 className='text-red-600'>No data available</h2>
		)

		return categories.categories.map((category) => {
			return (
				<li key={category.id}
				    className='text-sm px-1 py-1 border-2 border-category text-category'>
					{category.name}
				</li>
			)
		})
	}

	return (
		<>
			<main className='w-240 mx-auto pt-20'>
				<h1 className='text-3xl font-bold mb-5'>Products</h1>
				<div className='flex row justify-between'>
					<ul className='grid grid-cols-3 gap-5'>
						{await renderProducts()}
					</ul>
					<aside className='w-80'>
						<h2 className='text-2xl font-bold mb-5'>カテゴリー</h2>
						<ul className='flex gap-2.5 flex-wrap'>
							{await renderProductCategories()}
						</ul>
					</aside>
				</div>
			</main>
		</>
	);
};

export default Products;
