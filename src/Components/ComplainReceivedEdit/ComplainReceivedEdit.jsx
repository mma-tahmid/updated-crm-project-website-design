import React from 'react';
import { MdModeEdit } from "react-icons/md";

const ComplainReceivedEdit = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>


                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>COMPLAIN RECEIVED Edit</div>

                    <div className='flex justify-center'>
                        <div className=' mt-2 w-[191px] sm:w-[191px] bg-[#F9333E] text-[#FFF] px-4 rounded text-decoration-2'> Existing Customer Invoice </div>
                    </div>

                </div>



                <div className=' shadow-md  mt-2 '>

                    <div className='py-6 bg-[#FDECEC] relative '>
                        <div className='pl-[49px]   text-[#E74A3B] text-decoration-3 '>Complain Received Info
                        </div>
                        <div className='shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px] absolute top-[29px] left-[253px] icon-design'><MdModeEdit /></div>

                    </div>


                    {/* Form Part */}
                    <div className=' pt-5 px-9 pb-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-y-4  gap-y-4'>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter complain no' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Invoice No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice No </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Product Type' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Product Type </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Contact No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Contact Person </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Complain Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Invoice Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Model Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Model Name</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Contact No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Contact No </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Location Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Location Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter SB No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Quantity' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Quantity </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Area Code' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Area Code </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Customer Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter SB Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Product Serial Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Product Serial Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter STE Address' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > STE Address</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Warranty Status' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Warranty Status </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Reference' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Reference </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Gurranty Card Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Gurranty Card Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Assign to Department' name="" id="" />

                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Assign to Department </div>
                        </div>



                    </div>

                </div>

                {/* 2nd Part */}

                <div className=' shadow-md  mt-5 '>

                    <div className='pb-4'>
                        <div className='py-6 bg-[#FDECEC] flex justify-center gap-x-4'>
                            <div className='text-[#E74A3B]  text-decoration-4 my-auto'>Problem Box</div>
                            <div className='text-[#E74A3B] my-auto shadow-lg border border-[#E74A3B] rounded-md px-1'> <MdModeEdit /> </div>

                        </div>

                        <div className=' mt-3 flex sm:flex lg:flex border-b-2 border-[#B9B9B9] '>
                            <div className='w-[60%] pl-10'>Problem Name</div>
                            <div className='w-[30%]'>Description</div>

                        </div>

                        <div className='mt-2'>
                            <div className='px-8 py-1'>
                                <div className='sm:flex flex'>
                                    <div className='w-[6%] text-center text-[#FA6669] '><span className='bg-[#FDECEC] px-3'>1755</span></div>
                                    <div className='w-[10%]'></div>
                                    <div className='w-[30%]'>Refrigarator Isssue</div>
                                    <div className='w-[10%]'> </div>
                                    <div className='w-[44%]'>THis is </div>
                                </div>
                            </div>

                            <div className='px-8 py-1'>
                                <div className='flex'>
                                    <div className='w-[6%] text-center text-[#FA6669] '><span className='bg-[#FDECEC] px-3'>1755</span></div>
                                    <div className='w-[10%]'></div>
                                    <div className='w-[30%]'>Refrigarator Isssue</div>
                                    <div className='w-[10%]'> </div>
                                    <div className='w-[44%]'>THis is </div>
                                </div>
                            </div>

                            <div className='px-8 py-1'>
                                <div className='flex'>
                                    <div className='w-[6%] text-center text-[#FA6669] '><span className='bg-[#FDECEC] px-3'>1755</span></div>
                                    <div className='w-[10%]'></div>
                                    <div className='w-[30%]'>Refrigarator Isssue</div>
                                    <div className='w-[10%]'> </div>
                                    <div className='w-[44%]'>THis is </div>
                                </div>
                            </div>
                        </div>
                    </div>






                </div>

                {/* Button Part */}

                <div className='flex justify-center gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Edit</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>DayBook</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Exit</button>

                </div>

            </div>

        </>
    );
};

export default ComplainReceivedEdit;