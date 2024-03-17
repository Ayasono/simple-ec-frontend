import {axiosInstance} from "@/app/api";

export async function getProducts() {
	const res = await axiosInstance({
		method: "GET",
		url: "/products",
		headers: {
			"Cache-Control": ""
		}
	});
	return res.data;
}
