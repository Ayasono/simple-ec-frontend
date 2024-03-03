import React, {useEffect, useState} from 'react';
import {iCategory, iProduct, iProducts} from "@/app/products/types";
import {getProductCategories} from "@/app/api/getProductCategories";

type Props = {
	setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
};

export function Categories({setCategoryFilter}: Props) {
	const [categories, setCategories] = useState<iCategory | undefined>(undefined);

	useEffect(() => {
		getProductCategories()
			.then(res => {
				res.categories.unshift({id: 0, name: "all"})
				setCategories(res)
			})
			.catch(error => console.error(error));
	}, [])

	if (categories?.msg !== "ok") return <h2 className='text-red-600'>No data available</h2>

	return categories.categories
		.map((category) => {
			return (
				<li
					onClick={() => {
						setCategoryFilter(category.name)
					}}
					key={category.id}
					className='text-sm rounded px-1 py-1 border-2 border-category text-category cursor-pointer animate-fadein'>
					{category.name}
				</li>
			)
		})
}
