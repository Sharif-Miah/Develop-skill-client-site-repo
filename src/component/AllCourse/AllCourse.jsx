import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourseone'

const AllCourse = ({ course }) => {
    const { img, title, name } = course;
    return (

        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:text-gray-100 p-6 mx-auto course-cart">
            <img src={img} alt="" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-white">{name}</h2>
                    <p className="text-gray-100">{title}</p>

                </div>
                <Link to={`/course/${course?.id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-amber-400 hover:bg-amber-500 hover:text-white dark:text-gray-900">
                        Buy Now</button></Link>
            </div>
        </div >
    );
};

export default AllCourse;