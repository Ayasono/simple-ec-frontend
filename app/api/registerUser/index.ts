import {axiosInstance} from "@/app/api";

interface UserLoginMsg {
	msg: string
}

export async function registerUser(username: string, email: string, password: string, address: string, phone: string,) {
	return axiosInstance({
		url: "/users",
		method: "post",
		data: {
			username: username,
			email: email,
			password_hash: password,
			address: address,
			phone: phone,
		}
	})
		.then(res => res.data as UserLoginMsg)
		.catch(err => {
			console.error(err)
			return err
		})
}
