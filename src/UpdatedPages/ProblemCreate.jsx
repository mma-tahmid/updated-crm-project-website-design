import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';
import { MdModeEdit } from 'react-icons/md';

const ProblemCreate = () => {
    return (
        <>
            <div className='mx-2 mt-2'>

                <div className='shadow-md py-2'>
                    <div className='text-[#E74A3B] text-[19px] px-14'>Problem Create</div>

                </div>

                {/* 2ndddd */}

                <div className='shadow-md'>
                    <div className='pt-2'>
                        <TitleBar titleName="Searching Operation" />
                    </div>

                    <div className='flex sm:flex-row flex-col justify-around items-center mt-8 pb-10'>
                        <div className='flex items-center gap-x-8'>
                            <div>Problem Name</div>
                            <div><input className='w-[150px] sm:w-[200px] h-[40px] rounded-[5px] border border-[#F9333E] ' type="text" name="" id="" /></div>
                        </div>

                        <button className=' mt-6 sm:mt-0 bg-[#FA6669] text-[#FFFFFF] px-7 py-1 rounded-[5px]'>Add</button>
                    </div>

                </div>

                {/* new Part */}

                <div className='shadow-md mt-3 pb-8'>

                    <div className=' bg-[#FDECEC] flex items-center justify-between'>

                        <div className='flex gap-x-3 px-6 py-6'>
                            <div className='relative shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px]'>
                                <div className='absolute top-[3px]'> <MdModeEdit /> </div>
                            </div>
                            {/* <div className='shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px] icon-design'><MdModeEdit /></div> */}

                            <div className=' text-[#E74A3B] text-decoration-3 '>Problem Box</div>

                        </div>

                        <div className='pr-6'>
                            <SearchField />
                        </div>

                    </div>


                    {/* Table */}
                    <div className='hidden sm:flex justify-between px-16 mt-3'>
                        <div>Problem Name</div>
                        <div>Description</div>
                    </div>


                    <div className='flex sm:flex-row flex-col justify-between px-2 sm:px-16 mt-3'>
                        <div className='flex gap-x-6'>
                            <div className='bg-[#FDECEC] px-4 py-0.5 text-[#FA6669] '>12134</div>
                            <div>Gas Charge R-410  </div>
                        </div>

                        <div className='mt-2 sm:mt-0'> Description Info ssssjvjv  </div>
                    </div>

                    <div className='flex sm:flex-row flex-col justify-between px-2 sm:px-16 mt-3'>
                        <div className='flex gap-x-6'>
                            <div className='bg-[#FDECEC] px-4 py-0.5 text-[#FA6669] '>12134</div>
                            <div>Gas Charge R-410  </div>
                        </div>

                        <div className='mt-2 sm:mt-0'> Description Info  </div>
                    </div>

                </div>

                {/* Button */}

                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Save</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Preview</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>DayBook</button>


                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Exit</button>

                </div>
            </div>
        </>
    );
};

export default ProblemCreate;