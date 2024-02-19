import React from 'react';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import { MdModeEdit } from 'react-icons/md';

const ServiceBill = () => {

    
    return (
        <>
            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>SERVICE BILL </div>

                    <div className='flex justify-center'>
                        <div className=' mt-2 w-[191px] sm:w-[191px] bg-[#F9333E] text-[#FFF] px-4 rounded text-decoration-2'> Existing Customer Invoice </div>
                    </div>
                </div>


                {/* second Part */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center gap-y-3 sm:justify-between px-8 py-3'>


                        <div className='  text-[#E74A3B] text-decoration-3 '>Master Data </div>
                        <div className='font-[500] text-[15px] border border-[#F9333E] px-3'>SB Token</div>

                    </div>

                    <div className='mt-5 pb-7  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center gap-y-3 '>
                        <InputField labelName="Location" placeholderName="Location" />
                        <InputField labelName="Contact No" placeholderName="Contact No" />
                        <InputField labelName="Job No" placeholderName="Job No" />
                        <InputField labelName="Color" placeholderName="Color" />
                        <InputField labelName="Date" placeholderName="Date" />
                        <InputField labelName="SB No" placeholderName="SB No" />
                        <InputField labelName="Contact Person" placeholderName="Contact Person" />
                        <InputField labelName="Reference" placeholderName="Reference" />
                        <InputField labelName="Customer Name" placeholderName="Customer Name" />
                        <InputField labelName="Complain No" placeholderName="Complain No" />
                        <InputField labelName="Product Name" placeholderName="Product Name" />
                        <InputField labelName="Serial No" placeholderName="Serial No" />
                        <InputField labelName="Customer Address" placeholderName="Customer Address" />
                        <InputField labelName="Model Name" placeholderName="Model Name" />
                    </div>

                </div>


                {/* 3rd Part */}
                <div className=' shadow-md  mt-4 '>

                    <div className='py-6 bg-[#FDECEC] flex justify-center gap-x-4'>
                        <div className='text-[#E74A3B]  text-decoration-4 my-auto'>Problem Box</div>
                        <div className='text-[#E74A3B] my-auto shadow-lg border border-[#E74A3B] rounded-md px-1'> <MdModeEdit /> </div>

                    </div>

                    <div className='sm:grid hidden sm:grid-cols-4 gap-y-4 mx-3 mt-3'>
                        <div> Problem Name</div>
                        <div>Quantity</div>
                        <div>Rate</div>
                        <div>Description</div>

                        <div className='flex gap-x-3'>
                            <div className=' text-center text-[#FA6669] '><span className='bg-[#FDECEC] px-3'>1755</span></div>

                            <div>Refrigarator Isssue</div>
                        </div>

                        <div>2</div>
                        <div>**</div>
                        <div>This is </div>

                    </div>

                    {/* for mobile device Repeat Code  */}
                    <div className='flex sm:hidden text-[12px] justify-around'>
                        <div className='grid grid-cols-1 gap-y-2 mx-3 mt-3'>
                            <div className='flex gap-x-2'>
                                <div> Problem Name</div>
                                <div className='flex gap-x-3'>
                                    <div className=' text-center text-[#FA6669] '><span className='bg-[#FDECEC] px-3'>1755</span></div>

                                    <div>Refrigarator Isssue</div>
                                </div>
                            </div>

                            <div className='flex gap-x-3'>
                                <div className='w-[50%]'>Quantity</div>
                                <div className='w-[50%]' >2</div>
                            </div>

                            <div className='flex gap-x-3'>
                                <div className='w-[50%]'>Rate</div>
                                <div className='w-[50%]'>**</div>
                            </div>

                            <div className='flex gap-x-3'>
                                <div className='w-[50%]'>Description</div>
                                <div className='w-[50%]'>This is </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-9 ml-9 pb-6 md:flex md:gap-x-10'>
                        <div>  <input className=' w-[250px] sm:w-[364px] border h-[94px] border-[#A7A7A7] placeholder:text-[#F9333E]' placeholder='Write note Here' type="text" />
                        </div>

                        <div className='pt-4'>
                            <input className='w-[250px] sm:w-[305px] border h-[52px] border-[#A7A7A7] placeholder:text-[#F9333E] ' placeholder='Enter Total Amount Here' type="text" />
                        </div>
                    </div>

                </div>


                {/* Buton Part */}

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

export default ServiceBill;