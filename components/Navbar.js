import React from 'react'
import Link from 'next/link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { AiOutlineBars } from 'react-icons/ai'
import OffCanvasNavbar from './OffCanvasNavbar'
import Logo from '../public/images/logo.jpeg'
import Image from 'next/image'
export default function Navbar({ invert, setinvert,CloseOffCanvasNavbar }) {
	const OpenOffCanvas = () => {
		document.querySelector('#offcanvas').classList.toggle('smenu')
	}

	return (
		<div>
			<div className='flex justify-between py-3 border-2 bg-black border-black'>
				<Link href="/">
				<div className='text-white my-auto mx-5 w-fit flex'>
					<Image src={Logo} className="w-16"  />
					<h1 className='my-auto font-bold tracking-widest'>TYROS</h1>
				</div>
				</Link>
				<div className='hidden md:block'>
					<ul className='flex my-auto mt-2'>
						<li className='border-2 border-white text-white mx-5 p-2 rounded-md font-bold hover:scale-105 transition-all fade-in-out '><Link href="/">HOME</Link></li>
						<li className='border-2 border-white text-white mx-5 p-2 rounded-md font-bold hover:scale-105 transition-all fade-in-out '><Link href="/AboutPage">ABOUT US</Link></li>
					</ul>
				</div>
				<div id="button" className='my-auto mx-10 hover:animate-spin cursor-pointer hidden md:block' onClick={() => {
					if (invert) {
						setinvert(false)
					}
					else {
						setinvert(true)
					}
				}}>
					{invert ? (
						<BsFillMoonFill className='text-white w-7 h-7 my-auto mx-auto' />
					) : (
						<>
							<BsFillSunFill className='text-white w-7 h-7 my-auto mx-auto' />
						</>
					)}

				</div>
				<div id="offcanvasbtn" className='my-auto mx-5 cursor-pointer md:hidden' onClick={OpenOffCanvas} >
					<AiOutlineBars className='w-7 h-7 mx-auto my-auto text-white' />
				</div>

			</div>
			<div className='md:hidden overflow-hidden'>
				<OffCanvasNavbar invert={invert} setinvert={setinvert} />
			</div>
		</div>
	)
}
