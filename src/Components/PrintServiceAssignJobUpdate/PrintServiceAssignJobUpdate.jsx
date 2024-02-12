import { DatePicker, Input, Select, Space } from 'antd';
import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';
import { BiRightArrow } from "react-icons/bi";

const PrintServiceAssignJobUpdate = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>Print Service Job Update</div>

                    <div className='flex justify-center gap-x-3'>
                        {/* No Content */}

                    </div>

                </div>

                {/* 2nd Part */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] sm:flex sm:justify-between'>
                        <div className='py-6 px-10  flex gap-x-3  '>

                            <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-7 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Operation
                            </div>
                        </div>
                        {/* Search Filed */}
                        <div className='sm:pt-5 sm:px-9 pb-4 mx-9 '>
                            <div className="relative">
                                <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                                <div className="absolute top-[2px] left-[150px]  ">
                                    <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* Input Field */}
                    <div className='pt-8 px-14 pb-10 grid lg:grid-cols-4 place-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-y-8 md:gap-x-8 lg:gap-x-20  gap-y-4'>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Technician Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Technician Name</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Customer Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Name</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Customer Mobile' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Mobile</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Location No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Location No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Complain No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='SB No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Invoice No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice No</div>
                        </div>

                    </div>
                </div>


                {/* 3rd Part */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] sm:flex sm:justify-between'>
                        <div className='py-6 px-10  flex gap-x-3  '>

                            <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-7 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                            <div className='  text-[#E74A3B] text-decoration-3 '>Assign Job List Update
                            </div>
                        </div>
                        {/* Search Filed */}
                        <div className='sm:pt-5 sm:px-9 pb-4 mx-9 '>
                            <div className="relative">
                                <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                                <div className="absolute top-[2px] left-[150px]  ">
                                    <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* Input Field */}
                    <div className='pt-8  pb-10 grid lg:grid-cols-2 place-items-center '>

                        <div className='grid grid-cols-2 gap-y-4'>

                            <div className='text-[15px] font-[500]'>Job Status</div>
                            <div>
                                <Space>
                                    <Select className='w-[202px] h-[37px]'> </Select>
                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>Job No</div>
                            <div>
                                <Space>
                                    <Input className='w-[202px] h-[37px]' />
                                    {/* <Select className='w-[202px] h-[37px]'> </Select> */}
                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>Complain No</div>
                            <div>
                                <Space>
                                    <Input className='w-[202px] h-[37px]' />
                                    {/* <Select className='w-[202px] h-[37px]'> </Select> */}
                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>Date</div>
                            <div>
                                <Space>
                                    <DatePicker className='w-[202px] h-[37px]' />

                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>Warrenty Status</div>
                            <div>
                                <Space>
                                    <Select className='w-[202px] h-[37px] '> </Select>

                                </Space>
                            </div>

                        </div>

                        <div className='grid grid-cols-2 gap-y-4'>

                            <div className='text-[15px] font-[500]'>Invoice Nos</div>
                            <div>
                                <Space>
                                    <Input className='w-[202px] h-[37px]' />
                                    {/* <Select className='w-[202px] h-[37px] '> </Select> */}

                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>Vendor/Technician</div>
                            <div>
                                <Space>
                                    <Select className='w-[202px] h-[37px] '> </Select>

                                </Space>
                            </div>


                            <div className='text-[15px] font-[500]'> SB No</div>
                            <div>
                                <Space>
                                    <Input className='w-[202px] h-[37px]' />
                                    {/* <Select className='w-[202px] h-[37px] '> </Select> */}

                                </Space>
                            </div>

                            <div className='text-[15px] font-[500]'>SB Date</div>
                            <div>
                                <Space>
                                    <DatePicker className='w-[202px] h-[37px]' />

                                </Space>
                            </div>
                        </div>



                    </div>
                </div>


                <div className=' shadow-md  mt-2 '>

                    <div className='flex justify-center bg-[#FDECEC]'>
                        <div>
                            <div className='py-6 px-10  flex  gap-x-3  '>

                                <div className='  text-[#E74A3B] text-decoration-3 '>Problem Box</div>

                                <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-7 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>
                            </div>
                        </div>
                    </div>

                    <div className=' py-4 grid grid-cols-2 gap-y-3 px-10'>
                        <div className='text-[14px] font-[400]'>Problem Name</div>
                        <div className='text-[14px] font-[400]'>Description</div>
                        <div className='flex gap-x-4'>
                            <div className='pt-1'> <BiRightArrow className=' text-[#74747B]' /></div>
                            <div><span className='bg-[#FDECEC] text-[#FA6669] px-3'>12134</span></div>
                            <div>Gas Charge R-410  </div>
                        </div>

                        <div>Details Description</div>
                    </div>

                </div>

                {/* Button */}
                <div className='flex justify-center gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Update</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Cancel</button>



                </div>
            </div>
        </>
    );
};

export default PrintServiceAssignJobUpdate;