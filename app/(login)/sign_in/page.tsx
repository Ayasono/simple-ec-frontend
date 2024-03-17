"use client"

import React, {useState} from 'react';
import {onUserLogin} from "@/app/api/onUserLogin";
import {useRouter} from "next/navigation";

interface Props {

}

const SignIn: React.FC<Props> = ({}) => {
	const [userEmail, setUserEmail] = useState("yuehu@ualberta.ca")
	const [userPassword, setUserPassword] = useState("test")
	const router = useRouter()

	async function onLogin() {
		if (userEmail === "" || userPassword === "") return

		const res = await onUserLogin(userEmail, userPassword)
		if (res.data.msg === "ok") {
			console.log("logged in")
			localStorage.setItem("login_email", userEmail)
			window.location.pathname = "/my-page"
		}
	}

	return (
		<>
			<div className='bg-main max-w-full h-screen-80'>
				<div className='text-center text-4xl pt-10 pb-10'>
					Login
				</div>

				{/* email */}
				<div className='flex w-full justify-center flex-col items-center'>
					<div className='mb-2 w-1/3'>
						Email Address
					</div>
					<input className='h-10 w-1/3 px-5'
					       type='email'
					       onChange={e => setUserEmail(e.target.value)}
					       value={userEmail}
					/>
				</div>
				{/* password */}
				<div className='flex w-full justify-center flex-col items-center mt-4'>
					<div className='mb-2 w-1/3'>
						Password
					</div>
					<input className='h-10 w-1/3 px-5'
					       type='password'
					       onChange={e => setUserPassword(e.target.value)}
					       value={userPassword}
					/>
				</div>

				{/* submit */}
				<div className='flex w-full justify-center mt-4'>
					<button
						className='h-10 w-1/5 bg-highlight text-white'
						onClick={onLogin}
					>
						Login
					</button>
				</div>

				{/* register */}
				<div className='flex w-full justify-center mt-10 cursor-pointer'>
					<div className='w-1/2 border-b-black text-center border-b-2'
					     onClick={() => router.push("/sign_up")}>
						create an account
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
