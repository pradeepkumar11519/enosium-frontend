import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-white invert">
                <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col invert text-gray-600">
                    <a href="#home" className="w-16 bg-transparent h-16 p-2"> <img src="/images/logo.jpeg" alt="logo" /></a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Copyright —
                        <a href="#" className="text-gray-600 ml-1" target="_blank">@Team_Tyros</a>
                    </p>
                    
                </div>
            </footer>
        </div>
    )
}
