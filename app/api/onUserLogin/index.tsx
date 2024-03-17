import {axiosInstance} from "@/app/api";

export const onUserLogin = async (email: string, password: string) => {
	return axiosInstance({
		method: "POST",
		url: "/users/login",
		data: {
			email,
			password_hash: password,
		},
	})
}
