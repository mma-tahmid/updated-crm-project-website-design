import React from 'react';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';
import { DatePicker } from 'antd';
import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';


const ComplainMasterReport = () => {

    return (
        <>

            <div className='px-6 mt-3'>

                <div className='shadow-md border py-5 px-6 text-[#E74A3B]'>
                    COMPLAIN MASTER REPORT
                </div>


                <div className='shadow-md border   mt-4'>
                    <div className='bg-[#FDECEC] py-6 px-6'>

                        <div className='text-[#E74A3B]'>Report</div>

                    </div>

                    {/* Content */}
                    <div className='mt-3 flex justify-around text-[#000000] text-[16px] font-[500]'>
                        <div className=''>Report Name</div>
                        <div className='invisible sm:visible'>Report Parameter</div>
                        <div> <SearchField /> </div>
                    </div>

                    <div className='flex px-4 gap-x-8 mt-3 mb-4'>
                        <div className='w-3/12 shadow-md border '>

                            <div className='flex justify-center items-center my-3 text-[12px] md:text-[16px]'>
                                <div>
                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Al</label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Location Wise</label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Product Wise</label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Model Wise</label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">CRO Wise </label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Reference Wisse </label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Technitian Wise </label> </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className=' flex gap-x-3 items-center'>
                                            <div><input type="radio" name="" id="" /></div>
                                            <div> <label htmlFor="">Complain No</label> </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='w-9/12 shadow-md border'>

                            <div className='flex justify-around mt-6 '>
                                <DatePicker placeholder='From Date' className='w-[150px] sm:w-[202px] h-[37px]' />
                                <DatePicker placeholder='To Date' className='w-[150px] sm:w-[202px] h-[37px]' />
                            </div>


                            <div className='mt-6 mb-6 px-24 text-[16px] text-[#EB5757] font-[600]'> Job Status </div>

                            <div className='flex justify-around'>
                                <div className='flex gap-x-3 items-center'>
                                    <input type="radio" name=" " id=" " />
                                    <label htmlFor="">All job</label>
                                </div>

                                <div className='flex gap-x-3 items-center'>
                                    <input type="radio" name=" " id=" " />
                                    <label htmlFor="">Complete</label>
                                </div>

                                <div className='flex gap-x-3 items-center'>
                                    <input type="radio" name=" " id=" " />
                                    <label htmlFor="">WIP</label>
                                </div>

                                <div className='flex gap-x-3 items-center'>
                                    <input type="radio" name=" " id=" " />
                                    <label htmlFor="">Not Assign</label>
                                </div>

                            </div>

                            {/* Button  */}
                            <div className='flex mt-8 mb-2 justify-center gap-x-7'>
                                <CustomButton btnName="Preview" />
                                <CustomButton btnName="Close" />
                            </div>


                        </div>
                    </div>



                </div>

            </div>

        </>
    );
};

export default ComplainMasterReport;
