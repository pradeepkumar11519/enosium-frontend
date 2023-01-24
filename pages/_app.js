import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {
  const  [loading ,setloading] = useState(false)
  const [Progress,setProgress] = useState(0)
  const router = useRouter()
  const [invert,setinvert] = useState(false)
  const CloseOffCanvasNavbar = () => {

    document.querySelector('#offcanvas').classList.remove('smenu')

}
  React.useEffect(() => {

		router.events.on('routeChangeStart', () => {
			setProgress(40)
			CloseOffCanvasNavbar()
		})
		router.events.on('routeChangeComplete', () => {
			setProgress(100)

		})

	}, [])
  return(
    <div className={`${invert?"invert":""}`}>
      <Navbar invert={invert} setinvert={setinvert} />
      <LoadingBar
              color='#E11D48'
              progress={Progress}
              height={5}
              shadowStyle={{'height':'5px','width':'20px'}}
              waitingTime={200}
              onLoaderFinished={() => setProgress(0)}
            />
      <ToastContainer/>
      <Component CloseOffCanvasNavbar={CloseOffCanvasNavbar} setProgress={setProgress} loading={loading} setloading={setloading} invert={invert} {...pageProps} />
    </div>
  
  )
}
