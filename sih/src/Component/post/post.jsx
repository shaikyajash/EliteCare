import React from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../navbar/navbar";


export default function Post() {
    const location = useLocation();
    const post = location.state?.post;
    return(
        <div className="'bg-gray-100 min-h-screen w-full">
            <Navbar/>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16'>
                <div className='bg-white p-4 rounded-lg shadow-green-500 shadow flex flex-col items-start'>
                    <div className='flex flex-row items-start w-full '>
                        <img src='/images/avatar.png' alt='avatar' className='w-10 h-10 rounded-full mr-4'/>
                        <h1 className="text-4xl font-semibold mb-4">{post.author}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full pt-4'>
                        <div className='flex flex-col items-start justify-between w-full p-4 border-t-2 border-gray-200 cursor-pointer'>
                            <h1 className='font-semibold text-md'>{post.topic} - </h1>
                            <p className='font-normal text-sm'>{post.blog}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}