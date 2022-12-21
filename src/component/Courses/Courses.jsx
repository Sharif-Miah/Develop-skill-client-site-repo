import React, { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { Link, useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';
import PrimiumCourse from '../PrimiumCourse/PrimiumCourse';

const Courses = () => {
    const coursees = useLoaderData();
    const [courses, setCourse] = useState([]);
    const [loading, setLoading] = useState(true)


    //Course data show
    useEffect(() => {
        fetch('https://learn-skill-backend-farhan-sharif.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setCourse(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div style={{height: '100px', width: '100px', margin: 'auto'}}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-10'>All Course Here...</h1>
            <div className='lg:flex  justify-around'>
                <div className='md:text-center   mt-16 mr-3 mb-6'>
                    {
                        courses.map(category => <p className='bg-amber-400  py-8 px-6 text-white'
                            key={category.id}><Link className='bg-gray-900 font-bold px-12 py-3 my-2'
                                to={`/course/${category.id}`}>{category.name}</Link></p>)
                    }
                </div>
                <div className='flex justify-center '>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center align-middle'>
                        {
                            coursees.map(coures => <AllCourse key={coures.id} course={coures} />)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;