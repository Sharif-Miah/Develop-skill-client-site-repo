import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './AllCourse';
import Pdf from 'react-to-pdf';

const ref = createRef();


const AllCourseOne = () => {

    const data = useLoaderData();
    const { img, title, name, details } = data;


    return (
        <div ref={ref}>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="/" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">

                            <h3 className="text-2xl font-semibold sm:text-4xl">{name}</h3>
                            <h4 className='text-2xl'>{title}</h4>
                            <p>{details}</p>
                        </div>
                    </a>
                    <div className="flex mr-8">
                        <Pdf targetRef={ref} filename={`${title}.pdf`}>
                            {({ toPdf }) => (
                                <a type="button" target="_blank"
                                    rel="noreferrer" onClick={toPdf} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-amber-400 hover:bg-amber-500 hover:text-white dark:text-gray-900 mr-4 cursor-pointer">
                                    <button >Download PDF</button>
                                </a>
                            )}
                        </Pdf>

                        <Link to={`/premium/${data?.id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-amber-400 hover:bg-amber-500 hover:text-white dark:text-gray-900"><button type="button" >Get premium Access</button></Link>

                    </div>
                </div>
            </section >
        </div>

    );
};

export default AllCourseOne;