"use client"

import React from 'react';
import {registerUser} from "@/app/api/registerUser";

interface Props {

}

const SignUp: React.FC<Props> = ({}) => {
	async function onSignUp(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const form = e.currentTarget

		if (form.username.value === "") return console.log("username is empty")
		if (form.email.value === "") return console.log("email is empty")
		if (form.password_hash.value === "") return console.log("password is empty")
		if (form.password_hash.value !== form.password_hash.value) return console.log("passwords do not match")

		const object = {
			username: form.username.value,
			email: form.email.value,
			password_hash: form.password_hash.value,
			address: form.address.value,
			phone: form.phone.value,
		}

		const res = await registerUser(object.username, object.email, object.password_hash, object.address, object.phone)
		console.log(res.message)
	}


	return (
		<>
			<div className='bg-main max-w-full h-screen-80'>
				<div className='text-center text-4xl pt-10 pb-10'>
					Sign Up
				</div>

				<form action='127.0.0.1:8080/users'
				      method='post'
				      onSubmit={onSignUp}
				>
					{/* user name */}
					<div className='flex w-full justify-center flex-col items-center'>
						<div className='mb-2 w-1/3'>
							User Name
						</div>
						<input className='h-10 w-1/3 px-5'
						       name='username'
						       required={true}
						/>
					</div>
					{/* email */}
					<div className='flex w-full justify-center flex-col items-center'>
						<div className='mb-2 w-1/3'>
							Email Address
						</div>
						<input className='h-10 w-1/3 px-5'
						       type='email'
						       name='email'
						       required={true}
						/>
					</div>
					{/* password */}
					<div className='flex w-full justify-center flex-col items-center mt-4'>
						<div className='mb-2 w-1/3'>
							Password
						</div>
						<input className='h-10 w-1/3 px-5'
						       type='password'
						       name='password_hash'
						       required={true}
						/>
					</div>
					{/* confirm password */}
					<div className='flex w-full justify-center flex-col items-center mt-4'>
						<div className='mb-2 w-1/3'>
							Confirm Password
						</div>
						<input className='h-10 w-1/3 px-5'
						       type='password'
						       required={true}
						/>
					</div>
					{/* address */}
					<div className='flex w-full justify-center flex-col items-center mt-4'>
						<div className='mb-2 w-1/3'>
							Address
						</div>
						<input className='h-10 w-1/3 px-5'
						       name='address'
						       required={true}
						/>
					</div>
					{/* phone */}
					<div className='flex w-full justify-center flex-col items-center mt-4'>
						<div className='mb-2 w-1/3'>
							Phone
						</div>
						<input className='h-10 w-1/3 px-5'
						       type='tel'
						       name='phone'
						       required={true}
						/>
					</div>
					{/* submit */}
					<div className='flex w-full justify-center mt-4'>
						<button
							className='h-10 w-1/5 bg-highlight text-white'
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignUp;
