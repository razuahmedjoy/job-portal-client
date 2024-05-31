import React from 'react';
import JobCards from '../components/Shared/JobCards';
import { AcademicCapIcon, BoltIcon, BookmarkIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const AllJobs = () => {
    return (
        <div>
            <div className="w-full py-12 bg-pink-100/30 px-5 md:px-20">
                <h1 className="text-5xl font-medium mb-5">Find the job <span className="text-primary">that qualify</span> your life</h1>
                <p className="text-gray-800 text-base">Find Jobs, Employment & Career Opportunities</p>

                <div className='bg-white w-full px-8 py-4 mx-auto rounded-md gap-4   grid grid-cols-1 md:grid-cols-4 text-gray-600 text-lg my-8'>
                    <div className='flex items-center w-full'>
                        {/* add a search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input type='text' placeholder='job title, keywords' className='px-4 py-2 lg:border-gray-400 lg:border-r outline-none w-full' />
                    </div>

                    <div className='flex items-center w-full'>
                        {/* add a search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>


                        <select className='px-4 py-2 lg:border-gray-400 lg:border-r outline-none w-full'>
                            <option value=''>City</option>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                        </select>
                    </div>
                    <div className='flex items-center w-full'>
                        {/* add a search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>



                        <select className='px-4 py-2 outline-none w-full'>
                            <option value=''>Categories</option>
                            <option value=''>Option 1</option>
                            <option value=''>Option 2</option>
                        </select>
                    </div>



                    <button className='px-3 py-3 lg:ml-8 bg-primary hover:bg-white hover:border hover:border-primary duration-300 hover:text-primary text-white rounded '>Find Jobs</button>
                </div>


                <div className="flex items-center gap-4 flex-wrap my-8">
                    <div className='min-w-[220px] bg-white rounded p-2'>
                        <select className='bg-white rounded w-full outline-none focus:outline-none px-4 py-1' name="type" id="">
                            <option value="full-time">Job Type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                    <div className='min-w-[220px] bg-white rounded p-2'>
                        <select className='bg-white rounded w-full outline-none focus:outline-none px-4 py-1' name="type" id="">
                            <option value="full-time">Job Type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                    <div className='min-w-[220px] bg-white rounded p-2'>
                        <select className='bg-white rounded w-full outline-none focus:outline-none px-4 py-1' name="type" id="">
                            <option value="full-time">Job Type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                    <div className='min-w-[220px] bg-white rounded p-2'>
                        <select className='bg-white rounded w-full outline-none focus:outline-none px-4 py-1' name="type" id="">
                            <option value="full-time">Job Type</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="contract">Contract</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-full py-12 px-5 md:px-20">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className=''>
                        <p className="text-gray-800 text-base mb-10">Showing All 8 Results</p>

                        <div className='grid grid-cols-1 gap-y-5'>
                            <JobCards />
                            <JobCards />
                            <JobCards />
                            <JobCards />
                        </div>

                    </div>
                    <div className='hidden md:block md:col-span-2  w-full rounded-xl border border-gray-300'>
                        <div className="p-5 sticky top-0">
                            <div className="job-header bg-blue-300/10 p-8 rounded-lg">
                                <div className="flex w-full">
                                    <div className='bg-gray-200 w-20 h-20 rounded-full'></div>
                                    <div className='ml-5'>
                                        <h1 className='text-xl font-medium'>Job Title</h1>
                                        <p className='text-sm flex items-center gap-2 text-gray-600 mt-2 mb-1'>
                                            by Airgas in Design, Development
                                        </p>

                                    </div>
                                    <div className="ml-auto flex gap-5">
                                        <AcademicCapIcon className='w-5 h-5' />
                                        <BoltIcon className='w-5 h-5' />
                                        <BookmarkIcon className='w-5 h-5' />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className='px-4 py-2 bg-pink-100/35 text-primary rounded-full'>
                                        Full Time
                                    </span>
                                    <button className="btn bg-primary text-white py-3 px-6 rounded-lg">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;