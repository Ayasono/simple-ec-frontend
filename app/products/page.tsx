"use client"

import React, {useEffect, useState} from 'react';
import {iProducts} from "./types";
import {getProducts} from "@/app/api/getProducts";
import {Categories} from "@/app/_components/Categories";

const Products = () => {
	const [products, setProducts] = useState<iProducts | undefined>();
	const [category, setCategory] = useState("all");

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setProducts(await getProducts());
			} catch (error) {
				console.error(error);
			}
		};

		fetchProducts();
	}, []);

	const filteredProducts = products?.products.filter(product => category === "all" || product.category_name === category);

	return (
		<>
			<main className='w-240 mx-auto'>
				<h1 className='text-3xl font-bold mb-5'>Products</h1>
				<div className='flex row justify-between'>
					{/* Product Cards */}
					<ul className='grid grid-cols-3 gap-5'>
						{filteredProducts?.length ? filteredProducts.map(product => (
							<li key={`${product.id}-${Date.now()}`}
							    className='flex flex-col w-48 cursor-pointer animate-fadein'
							    onClick={() => location.href = `/products/${product.id}`}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={product.image_url}
								     alt={product.name}
								     className='w-48 h-48'/>
								<div className='font-bold my-2 text-sm'>{product.name}</div>
								<div className='text-xs mb-2 hover:text-highlight'
								     dangerouslySetInnerHTML={{__html: product.description}}></div>
								{
									product.single_price ?
										<div className='text-xs flex flex-nowrap'>
											<div className='mr-5'>単品</div>
											<div className='text-xs'>¥{product.single_price}</div>
											<div className='ml-1 text-[8px] text-highlight'>(税込)</div>
										</div>
										: null
								}
								{
									product.subs_price ?
										<div className='text-xs flex flex-nowrap'>
											<div className='mr-5'>定期</div>
											<div className='text-xs'>¥{product.subs_price}</div>
											<div className='ml-1 text-[8px] text-highlight'>(税込)</div>
										</div>
										: null
								}
							</li>
						)) : <h2 className='text-red-600'>No data available</h2>}
					</ul>
					{/* Categories */}
					<aside className='w-80'>
						<h2 className='text-2xl font-bold mb-5'>カテゴリー</h2>
						<ul className='flex gap-1.5 flex-wrap'>
							<Categories setCategoryFilter={setCategory}/>
						</ul>
					</aside>
				</div>
			</main>
		</>
	);
};

export default Products;
