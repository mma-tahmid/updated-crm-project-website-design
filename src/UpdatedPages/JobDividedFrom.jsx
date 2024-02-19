import React from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';
import { DatePicker, Select } from 'antd';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import TableJobDividedFrom from '../UpdatedComponents/StatusCard/TableJobDividedFrom';

const JobDividedFrom = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between border'>

                    <div className=' relative text-[#E74A3B] sm:text-left text-center text-decoration-1'>Job Divided From

                        <div className='invisible sm:visible absolute top-[5px] left-[200px] '> <MdOutlineModeEditOutline className='border-2 border-[#EB5757] text-[#EB5757] rounded-[6px] bg-[#FCEAEA] shadow-lg' /> </div>

                    </div>

                </div>


                <div className=' shadow-md  mt-7 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between pb-4 sm:pb-0'>
                        <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                            {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                            <div className='text-[#E74A3B] text-decoration-3 '>Searching Box
                            </div>
                        </div>

                        <div className='sm:py-6 sm:px-10 mt-3 sm:mt-0'> <CustomButton btnName="Search here" /></div>

                    </div>


                    <div className='mt-7 sm:flex sm:justify-between px-3 lg:px-20 pb-16'>
                        <div>
                            <InputField labelName='primary job no' />
                        </div>

                        <div className='mt-3 sm:mt-0'>
                            <input type="radio" name="" id="" />
                            <label htmlFor=""> Mother Job Closed </label>
                        </div>

                    </div>
                </div>


                {/* TABLE */}

                <div className=' shadow-md  mt-7 '>

                    <div className='bg-[#FDECEC] py-4 md:py-0 flex sm:flex-row flex-col items-center sm:justify-between pb-4 sm:pb-0'>
                        <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                            {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                            <div className='  text-[#E74A3B] text-decoration-3 '>Product Box
                            </div>
                        </div>

                    </div>

                    <TableJobDividedFrom />
                    {/* <TableInstallationStatusUpdate /> */}


                </div>

                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF]  bg-[#FA6669] w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>New Job Create </button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>Close</button>

                </div>

            </div>




        </>
    );
};

export default JobDividedFrom;