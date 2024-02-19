import React from 'react';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';
import { DatePicker, Input, Select } from 'antd';

const ServiceBillReceived = () => {
    return (
        <>
            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>SERVICE BILL RECEIVED </div>

                    <div className='flex justify-center'>
                        <div className=' mt-2 w-[191px] sm:w-[191px] text-[#FFF] px-4 rounded text-decoration-2'> <SearchField />  </div>
                    </div>
                </div>


                {/* second Part */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center gap-y-3 sm:justify-between px-8 py-3'>


                        <div className='  text-[#E74A3B] text-decoration-3 '>Information </div>

                    </div>

                    <div className='sm:flex text-[12px] mt-4 pb-5'>
                        <div className='md:w-[50%] ml-20'>

                            <div>
                                <div className='flex'>
                                    <div className='w-[25%] '>Location</div>
                                    <div className='w-[25%]'><Select className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Received Voucher</div>
                                    <div><Input className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Received Date</div>
                                    <div> <DatePicker className='w-[160px]' /> </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Bill Reference No</div>
                                    <div><Input className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Customer Name</div>
                                    <div><Select className='w-[160px]' /></div>
                                </div>
                            </div>

                        </div>

                        <div className='md:w-[50%] ml-20'>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Amount</div>
                                    <div><Input className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '> Received Method</div>
                                    <div><Select className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>Note</div>
                                    <div><Input className='w-[160px]' /></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex mt-3'>
                                    <div className='w-[25%] '>SB Date</div>
                                    <div> <DatePicker className='w-[160px]' /> </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

                {/* Button */}
                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Save</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Preview</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>DayBook</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Exit</button>

                </div>

            </div>



        </>
    );
};

export default ServiceBillReceived;