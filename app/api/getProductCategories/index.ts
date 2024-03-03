import {axiosInstance} from "@/app/api";
import {iCategory} from "@/app/products/types";

export async function getProductCategories(): Promise<iCategory> {
	const res: {data: iCategory} = await axiosInstance({
		method: 'get',
		url: '/products/categories',
	});
	return res.data;
}
