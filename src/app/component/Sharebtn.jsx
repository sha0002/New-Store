"use client"
import React from 'react'
import { ShareIcon } from '@heroicons/react/24/solid'
import toast, { Toaster } from 'react-hot-toast';


const Sharebtn = () => {

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
        toast.success('copied')
    }

    return (
        <>
            <button onClick={handleShare} className='text-orange-700 hover:text-red-600 transition'>
                <ShareIcon className='inline-block w-4 h-4 mr-2' />
                Share Link
            </button>
            <Toaster />
        </>
    )
}

export default Sharebtn