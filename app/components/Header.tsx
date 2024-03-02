import Link from "next/link";

export const Header = () => {
	return (
		<>
			<header className='h-20 w-full fixed top-0 flex justify-center items-center gap-10'>
				<Link className='hover:text-orange-200' href={"/"}>Home</Link>
				<Link className='hover:text-orange-200' href={"/products"}>Products</Link>
			</header>
		</>
	);
};
