"use client";

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {getUserInfoByEmail} from "@/app/api/getUserInfoByEmail";
import {UserInfo} from "@/app/api/getUserInfoByEmail/types";

interface Props {
	// Props定义（如果有的话）
}

// 定义一个新的类型，它使UserInfo['user']中的所有属性变为可选的
type OptionalUserInfo = {
	[Property in keyof UserInfo['data']]?: UserInfo['data'][Property];
}

const MyPage: React.FC<Props> = (props) => {
	const router = useRouter();
	// 使用OptionalUserInfo作为状态的类型
	const [userInfo, setUserInfo] = useState<OptionalUserInfo>({});

	useEffect(() => {
		const loginEmail = localStorage.getItem("login_email");

		if (loginEmail === null) {
			// 如果未登录，重定向到登录页面
			router.push("/sign_in");
			return;
		}

		// 获取用户信息
		getUserInfoByEmail(loginEmail)
			.then(res => {
				setUserInfo(res.data);
			})
			.catch(err => {
				if (err.response?.status === 401) {
					router.push("/sign_in");
				} else {
					console.log(err);
				}
			});
	}, []);

	return (
		<>
			<div className='bg-main max-w-full h-screen-80'>
				<div className='text-center text-4xl pt-10 pb-10'>
					My Page
				</div>

				{
					// 如果用户信息已经加载，则显示用户信息
					userInfo.email !== undefined && (
						<div className='flex w-full justify-center flex-col items-center'>
							<div className='mb-2 w-1/3'>
								User Name: {userInfo.username}
							</div>
							<div className='mb-2 w-1/3'>
								Email: {userInfo.email}
							</div>
							<div className='mb-2 w-1/3'>
								Address: {userInfo.address}
							</div>
							<div className='mb-2 w-1/3'>
								Phone: {userInfo.phone}
							</div>
						</div>
					)
				}
			</div>
		</>
	);
};

export default MyPage;
