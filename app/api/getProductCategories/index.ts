import {axiosInstance} from "@/app/api";

export async function getProductCategories() {
	try {
		const res = await axiosInstance({
			method: 'get',
			url: '/products/categories',
		});
		return res.data;
	} catch (err) {
		console.error(err);
	}
}
