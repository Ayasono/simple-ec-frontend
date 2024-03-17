import Link from "next/link";

export const Header = () => {
	return (
		<>
			<header className='h-20 w-full fixed top-0 flex justify-between items-center px-10'>
				<nav className='flex gap-2'>
					<Link className='hover:text-orange-200' href={"/"}>Home</Link>
					<Link className='hover:text-orange-200' href={"/products"}>Products</Link>
				</nav>
				<div>
					<Link href={"/"}>
						<img src="/logo.svg" alt="logo" className='w-20 h-20 cursor-pointer'/>
					</Link>
				</div>
				<div className='flex gap-2'>
					<Link className='hover:text-orange-200' href={"/my-page"}>MyPage</Link>
					<Link className='hover:text-orange-200' href={"/cart"}>Cart</Link>
				</div>
			</header>
			<div className='pt-20'></div>
		</>
	);
};
