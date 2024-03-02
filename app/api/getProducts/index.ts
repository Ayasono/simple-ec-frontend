import {axiosInstance} from "@/app/api";

export async function getProducts() {
	try {
		const response = await axiosInstance({
			url: "/products",
			method: "GET",
		});
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
