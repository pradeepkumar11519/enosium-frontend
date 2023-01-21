import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'
import {AiFillCloseSquare} from 'react-icons/ai'
import Modal from 'react-modal';

export default function Home() {
	const [data, setdata] = useState({})
	const [loading, setloading] = useState(false)
	const [result, setresult] = useState(null)
	const [IsOpen, setIsOpen] = useState(false)
	const onSubmit = async (e) => {
		setloading(true)
		e.preventDefault()
		let new_data = {}
		for (let i = 0; i < Object.keys(e.target).length - 3; i++) {
			let k = i.toString()
			new_data[i] = e.target[i]?.value
		}
		setdata(new_data)
		await axios.post("https://pradeep11519.pythonanywhere.com/api/v1/Get_User_Input/",
			new_data


		).then((response) => {
			setresult(response.data)
			
			setIsOpen(true)
		}).catch((error) => {
		
		})
		setloading(false)
	}

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			margin:'10px 10px',
			transform: 'translate(-50%, -50%)',
			backgroundColor:'black'
		},
	};
	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
			
				<Modal
					isOpen={IsOpen}

					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<button onClick={closeModal}>
						<AiFillCloseSquare className='invert w-6 h-6'/>
					</button>
					<div className='text-white mx-auto flex flex-col justify-center'>

						<div>
							<video className='w-[300px] mx-auto m-10 h-[300px]' muted src={`/images/${result}.mp4`} loop autoPlay={true} type="video/mp4" />
							{(result==2)?(
								<h1 className='text-center font-bold text-2xl text-white my-5'>Hurray You Are Eligible For A Loan</h1>
							):(
								<h1 className='text-center font-bold text-2xl text-white mb-20 mx-10'>Oops!! Really Sorry That You Are not Eligible For A Loan</h1>
							)}
						</div>

					</div>
				</Modal>
			
			

			<div className='bg-[url("/images/pic2.png")]  w-full h-full '>

				<h1 className='text-center translate-y-[70px] w-fit mx-auto p-5 bg-black  text-4xl text-white border-2 h-fit border-white font-bold '>PREDICT YOUR LOAN STATUS</h1>
				<form className='sm:py-32 sm:mx-32 mx-5 py-32 uppercase' onSubmit={onSubmit} action="post">
					<div className='lg:grid grid-cols-2  justify-center mx-auto'>
						<div className="bg-white bg-opacity-90 rounded-md p-5 m-5">
							<div>
								<div id="label">Number of people who will provide maintenance</div>
								<input className='border-2 border-black  p-3 font-bold' type="number" required />
							</div>
							<div>
								<div id="label">Loan History</div>
								<select className='border-2 border-black  p-3 font-bold' >
									{
										['all loans at this bank paid back duly', 'critical account/other loans existing (not at this bank)', 'delay in paying off loans in the past', 'existing loans paid back duly till now', 'no loans taken/allloans paid back duly'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)

									}

								</select>
							</div>
							<div>
								<div id="label">Purpose of taking loan</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['Education Loan', 'Loan for business establishment', 'Loan for retraining', 'New Car Purchase', 'Old Car Repair', 'Other repairs', 'Purchase of domestic appliances', 'Purchase of furniture/equipment', 'Purchase of radio/television'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>


							<div>

								<div id="label">loan amount taken</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />

							</div>
							<div>
								<div id="label">Guarantor or Debtor</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['co-applicant', 'gaurantor', 'none'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
						</div>
						<div className="bg-white bg-opacity-90 rounded-md p-5 m-5">

							<div>

								<div id="label">Number of years of employment</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['between 1 and 4 years', 'greater than 4 years', 'less than a year', 'unemployed'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
							<div>

								<div id="label">Marital Status</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['female and divorced/seperated/married', 'male and divorced/seperated', 'male and married/widowed', 'male and single'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>


							<div>

								<div id="label">Number of loans taken from current bank	</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />
							</div>
							<div>

								<div id="label">Age of the applicant in Number of Years	</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />
							</div>
							<div>
								<div id="label">amount in current accounts</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['between 0 and 200', 'greater than 200', 'less than 0', 'no current account'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
						</div>
						<div className="bg-white bg-opacity-90 rounded-md p-5 m-5">

							<div>
								<div id="label">amount in savings account</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['between 100 and 500', 'between 500 and 1000', 'greater than 1000', 'less than 100', 'no savings account'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>

							</div>

							<div>
								<div id="label">% of income paid as installment</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />

							</div>
							<div>
								<div id="label">Other loans plans taken</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['bank', 'none', 'stores'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
							<div className='h-fit'>

								<div id="label">Working abroad or not</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['No', 'Yes'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
							<div>
								<div id="label">Is there telephone number available</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['No', 'Yes'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>
						</div>

						<div className="bg-white bg-opacity-90 rounded-md p-5 m-5 ">
							<div>
								<div id="label">time duration for loan</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />
							</div>
							<div>
								<div id="label">Owned property	</div>
								<select className='border-2 border-black  p-3 font-bold'>
									{
										['No property', 'Real Estate', 'building society savings agreement/life insurance', 'car or other property'].map(ele => <option key={ele} className='font-bold p-3'>{ele}</option>)
									}

								</select>
							</div>

							<div>
								<div id="label">Type of job performed</div>
								<select className='border-2 border-black  break-all p-3 font-bold'>
									{
										['management/ self-employed/highly qualified employee/ officer', 'skilled employee / official', 'unemployed/ unskilled - non-resident', 'unskilled - resident'].map(ele => <option key={ele} className='font-bold break-all p-3'>{ele}</option>)
									}

								</select>
							</div>
							<div>

								<div id="label">Type of Housing</div>
								<select className='border-2 border-black  break-all p-3 font-bold'>
									{
										['for free', 'own', 'rent'].map(ele => <option key={ele} className='font-bold break-all p-3'>{ele}</option>)
									}

								</select>
							</div>

							<div>
								<div id="label">Number of years of stay in current address	</div>
								<input required className='border-2 border-black  p-3 font-bold' type="number" />
							</div>
						</div>

					</div>
					<button className='hover:scale-105 focus:ring-4 focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-3 font-bold  text-xl rounded-md mx-auto bg-rose-600 text-white w-fit text-center flex'>{loading ? "Loading..." : "Submit"}</button>
				</form>
				<style jsx>
					{
						`
					#label{
						margin:20px 0px;
						font-weight:700;
						font-size:21px;
					}
					select {
						border-radius:10px;
						width:100%;
					}
					input {
						border-radius:10px;
						width:100%;
					}
					
					`
					}
				</style>
			</div>
		</div>
	)
}


