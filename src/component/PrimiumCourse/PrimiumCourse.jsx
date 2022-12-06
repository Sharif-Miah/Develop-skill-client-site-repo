import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PrimiumCourse = () => {
    const data = useLoaderData()

    return (

        <div className='flex justify-center items-center'>
            {

                data.map(premium => <div key={premium.id} className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50" >
                    <img src={premium.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <h2 className="text-xl font-semibold tracking-wide">{premium.name}</h2>
                    </div>
                    <p className="dark:text-gray-100">{premium.title}</p>
                </div >)
            }

        </div>


    );
};

export default PrimiumCourse;