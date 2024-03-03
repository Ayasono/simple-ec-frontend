import {axiosInstance} from "@/app/api";

export async function getProducts() {
	const res = await axiosInstance({
		method: "GET",
		url: "/products",
	});
	return res.data;
}
