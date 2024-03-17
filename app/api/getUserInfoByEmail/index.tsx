import {axiosInstance} from "@/app/api";
import {UserInfo} from "@/app/api/getUserInfoByEmail/types";

export const getUserInfoByEmail = async (email: string) => {
	try {
		const res = await axiosInstance({
			method: "get",
			url: `/users/${email}`,
		});
		return res.data as UserInfo;
	} catch (err) {
		throw err;
	}
}
