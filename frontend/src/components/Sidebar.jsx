import { Link } from "react-router-dom";
// import { IoHomeSharp } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// import { MdOutlineExplore } from "react-icons/md";
// import { PiSignInBold } from "react-icons/pi";
// import { MdEditDocument } from "react-icons/md";


const Sidebar = () => {
	// const authUser = false;
	return (
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border-gray-800 text-white'
		>
			<nav className='h-full flex flex-col gap-3'>
				<Link to='/' className='flex justify-center'>
					<img className='h-8' src='/github.svg' alt='Github Logo' />
				</Link>

			</nav>
		</aside>
	);
};

export default Sidebar;