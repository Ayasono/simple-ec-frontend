import React from 'react';

function Footer() {
	return (
		<>
			<footer className="bg-gray-800 text-white">
				<div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
					<div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
						<div className="sm:w-full md:w-1/3 xl:w-1/4 sm:px-4 mb-4 md:mb-0">
							<h5 className="text-xl font-bold mb-6">公司信息</h5>
							<ul className="list-none footer-links">
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">关于我们</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">联系我们</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">加入我们</a>
								</li>
							</ul>
						</div>
						<div className="sm:w-full md:w-1/3 xl:w-1/4 sm:px-4 mb-4 md:mb-0">
							<h5 className="text-xl font-bold mb-6">快速链接</h5>
							<ul className="list-none footer-links">
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">产品</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">服务</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">案例研究</a>
								</li>
							</ul>
						</div>
						<div className="sm:w-full md:w-1/3 xl:w-1/4 sm:px-4 mb-4 md:mb-0">
							<h5 className="text-xl font-bold mb-6">社交媒体</h5>
							<ul className="list-none footer-links">
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">LinkedIn</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">Twitter</a>
								</li>
								<li className="mb-2">
									<a href="#"
									   className="border-b border-transparent hover:border-white">Facebook</a>
								</li>
							</ul>
						</div>
						<div className="sm:w-full md:w-1/3 xl:w-1/4 sm:px-4">
							<h5 className="text-xl font-bold mb-6">订阅我们</h5>
							<div className="mt-2">
								<input type="email"
								       className="appearance-none w-full p-2 leading-tight text-gray-700 bg-gray-50 rounded focus:outline-none focus:bg-white focus:border-gray-500"
								       placeholder="您的电子邮箱"/>
								<button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">订阅</button>
							</div>
						</div>
					</div>
				</div>
				<div className="py-4 bg-gray-700 mt-8">
					<p className="text-center text-gray-400">版权所有 © 2024 公司名. 保留所有权利。</p>
				</div>
			</footer>
		</>
	)
		;
}

export {Footer};
