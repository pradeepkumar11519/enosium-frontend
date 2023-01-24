import React from 'react'
import Link from 'next/link'
export default function OffCanvasNavbar({invert,setinvert,CloseOffCanvasNavbar}) {
    
    return (
        <div className=' overflow-hidden'>
            <div id="offcanvas" className='absolute left-[-500px] bg-black h-[400px] w-[300px] overflow-hidden transition-all fade-in-out z-[10000000000000]'>

                <h1 className='text-center text-white font-bold mx-10  text-3xl my-10'>WELCOME TO TYROS</h1>
                <ul>
                    <Link className='' href="/"><li className='my-2 mx-auto border-2 p-2 rounded-md hover:invert transition-all fade-in-out focus:invert text-center w-[200px] bg-black text-white'>Home</li></Link>
                    <Link className='' href="/AboutPage"><li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white'>About</li></Link>
                    <li className='my-2 mx-auto border-2 hover:invert transition-all fade-in-out focus:invert p-2 rounded-md text-center w-[200px] bg-black text-white' onClick={()=>{
                        if(invert){
                            setinvert(false)
                        }
                        else{
                            setinvert(true)
                        }
                        
                    }}>{invert?"DARK MODE":"LIGHT MODE"}</li>




                    
                </ul>
            </div>
        </div>
    )
}


