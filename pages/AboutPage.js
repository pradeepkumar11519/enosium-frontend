import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
export default function AboutPage({invert}) {
	console.log(invert);
	return (
		<div>
			<div className=" bg-black text-white">
				<section className="text-gray-600 body-font overflow-hidden">
					<div className="container px-5 py-24 mx-auto">
						<div className="lg:w-[70%] mx-auto flex flex-wrap">
							<Image placeholder="blur" alt="ecommerce" className={`${invert?"invert":""} lg:w-1/3  w-full h-full my-auto object-contain object-center rounded`} src="/images/about.jpeg" />
							<div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
								<h1 className="text-2xl font-medium title-font mb-4 text-gray-600 tracking-widest">ABOUT US</h1>
								<div className="flex mb-4">
									<span className="flex items-center">
										<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" ststrokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" />
									</span>
								</div>
								<p className="leading-relaxed text-lg text-white">Welcome To Our Website Namely Called Tyros . Starting with the Introduction , Our Website Takes In Required Inputs From The User Sends It To The Backend Through An API Call From The Frontend And The Backend Therefore Sends The Same Data Well A Bit Formatted Type Data To The Trained Model And Then Returns The Predicted Output . Lets Speak On The Tools Used , Frontend Is Done On Next.js , Backend is Done On Django . Hope You Liked It Do Know More About Us Below.
								</p>
							</div>
						</div>
					</div>
				</section>




				<section className="text-gray-300 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-col text-center w-full mb-20">
							<h1 className="text-2xl font-medium title-font mb-4 text-gray-600 tracking-widest">OUR TEAM</h1>
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="p-4 lg:w-1/2">
								<div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ${invert?"invert":""}`}>
									<Image placeholder="blur" alt="team" className={`${invert?"invert":""}flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`} src="/images/akhilesh.jpeg"/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-600">Akhilesh Panchamgam</h2>
										<h3 className="text-gray-500 mb-3">Team Lead</h3>
										<p className="mb-4">Trained And Tested ML Algorithm To Accuracy, Coordinated Team Members.</p>
										<span className={`${invert?"invert":""} inline-flex p-1 bg-gray-900 rounded-full`}>
											<Link className="ml-2 text-gray-500 bg-gray-800 p-2 rounded-full w-fit" href='https://www.linkedin.com/in/akhilesh-panchangam-563250251/' target={"_blank"}>
												<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
												</svg>
											</Link>
											<div className='p-2'>@Panchangam_Akhilesh</div>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ${invert?"invert":""}`}>
									<Image placeholder="blur" alt="team" className={`${invert?"invert":""}flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`} src="/images/pradeep.jpeg"/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-600">Pradeep Kumar Rebbavarpu</h2>
										<h3 className="text-gray-500 mb-3">Member</h3>
										<p className="mb-4">Created And Deployed The Backend And The Frontend Of The Website Which Takes Data From The User And Returns Out The Predicted Output</p>
										<span className={`${invert?"invert":""} inline-flex p-1 bg-gray-900 rounded-full`}>
											<Link className="ml-2 text-gray-500 bg-gray-800 p-2 rounded-full w-fit" href='https://www.linkedin.com/in/pradeep-kumar-rebbavarapu-820489259/' target={"_blank"}>
												<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
												</svg>
											</Link>
											<div className='p-2'>@Pradeep_Kumar</div>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ${invert?"invert":""}`}>
									<Image placeholder="blur" alt="team" className={`${invert?"invert":""}flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`} src="/images/suhana.jpeg"/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-600">Suhana Shaik</h2>
										<h3 className="text-gray-500 mb-3">Member</h3>
										<p className="mb-4">Worked On Various Test Cases To Find The Highest Accuracy For A Given Model.</p>
										<span className={`${invert?"invert":""} inline-flex p-1 bg-gray-900 rounded-full`}>
											<Link className="ml-2 text-gray-500 bg-gray-800 p-2 rounded-full w-fit" href='https://www.linkedin.com/in/suhana-shaik-955671258' target={"_blank"}>
												<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
												</svg>
											</Link>
											<div className='p-2'>@Suhana_Shaik</div>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className={`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ${invert?"invert":""}`}>
									<Image placeholder="blur" alt="team" className={`${invert?"invert":""}flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`} src="/images/trishant.jpeg"/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-600">Trishant Kumar Talluri</h2>
										<h3 className="text-gray-500 mb-3">Member</h3>
										<p className="mb-4">Created Frontend And Developed An Interactive UI Design.</p>
										<span className={`${invert?"invert":""} inline-flex p-1 bg-gray-900 rounded-full`}>
											<Link className="ml-2 text-gray-500 bg-gray-800 p-2 rounded-full w-fit" href='https://www.linkedin.com/in/trishant-talluri-6800a5253/' target={"_blank"}>
												<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className={`w-5 h-5`} viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
												</svg>
											</Link>
											<div className='p-2'>@Trishant_Talluri</div>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}