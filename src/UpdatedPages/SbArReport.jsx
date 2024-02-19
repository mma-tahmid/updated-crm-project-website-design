import React from 'react';
import { HiDocumentReport } from "react-icons/hi";
import SearchField from '../UpdatedComponents/StatusCard/SearchField';
import { DatePicker, Space } from 'antd';
import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';
const SbArReport = () => {
    return (
        <>
            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>SERVICE BILL AR REPORT </div>

                </div>

                {/* Second Part */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex gap-x-4 px-8 py-3'>

                        <div className='pt-1'><HiDocumentReport className='text-[#EB5757]' /></div>
                        <div className='  text-[#E74A3B] text-decoration-3 '>Report </div>

                    </div>

                    <div className='mt-4 pb-4'>
                        <div className='sm:flex'>
                            <div className=' w-[100%] sm:w-[40%] md:w-[30%] mx-3'>
                                <div className='pb-3'>Showroom Selection</div>
                                <div>

                                    <div>
                                        <input type="radio" name="" id="" />
                                        <label className='pl-2' htmlFor="html">Al Show Room</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="" id="" />
                                        <label className='pl-2' htmlFor="html">Individual Show Room</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="" id="" />
                                        <label className='pl-2' htmlFor="html">All Reference Wise</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="" id="" />
                                        <label className='pl-2' htmlFor="html">Individual Reference</label>
                                    </div>
                                </div>

                            </div>

                            <div className='w-[100%] sm:w-[60%] md:w-[70%] mx-4'>
                                <div className=' pt-4 pb-3 flex justify-between'>
                                    <div>Period Selection</div>
                                    <div className='w-[200px] '> <SearchField /></div>
                                </div>

                                <div className='flex sm:gap-x-24 gap-x-3 '>

                                    <DatePicker className='w-[150px] sm:w-[202px] h-[37px]' />
                                    <DatePicker className='w-[150px] sm:w-[202px] h-[37px]' />
                                </div>

                                {/* Button */}
                                <div className='flex mt-8 gap-x-7'>
                                    <CustomButton btnName="Preview" />
                                    <CustomButton btnName="Close" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
};

export default SbArReport;