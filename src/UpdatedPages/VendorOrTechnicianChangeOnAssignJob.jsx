import React from 'react';
import TitleBar from '../UpdatedComponents/StatusCard/TitleBar';
import { MdModeEdit, MdOutlineModeEditOutline } from 'react-icons/md';
import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import { Input, Select } from 'antd';
const VendorOrTechnicianChangeOnAssignJob = () => {
    return (
        <>
            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between border'>

                    <div className=' flex gap-x-7 text-[#E74A3B] sm:text-left text-center text-decoration-1'>Vendor Or Technician Change On Assign Job

                        <div className='mt-1 '> <MdOutlineModeEditOutline className='border-2 border-[#EB5757] text-[#EB5757] rounded-[6px] bg-[#FCEAEA] shadow-lg' /> </div>

                    </div>

                </div>


                <div className=' shadow-md  mt-7 '>

                    <div className='bg-[#FDECEC]  pb-4 sm:pb-0'>
                        <div className='py-6 px-10 flex gap-x-3 '>


                            <div className='text-[#E74A3B] text-decoration-3 '>Job Information </div>
                            <div className='mt-1.5'> <MdOutlineModeEditOutline className='border-2 border-[#EB5757] text-[#EB5757] rounded-[6px] bg-[#FCEAEA] shadow-lg' /> </div>
                        </div>

                    </div>


                    <div className='mt-4 pb-11 grid sm:grid-cols-2 grid-cols-1 gap-y-3 place-items-center'>

                        <div><InputField labelName="Job No/ Invoice No" /></div>



                        <div>

                            <div className='relative pt-3'> <Select className='border-[black]  w-[240px] h-[42px]' />
                                <label className=' bg-[#FFF] px-3 absolute top-[2px] left-[21px] text-[#E74A3B] text-[14px]' htmlFor="">New Vendor </label>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-8 mb-4'>

                    <button className='text-[#FFF]  bg-[#FA6669] w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>Update</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>Close </button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[140px] sm:w-[170px] h-[40px] rounded-[5px]'>Close</button>

                </div>
            </div>



        </>
    );
};

export default VendorOrTechnicianChangeOnAssignJob;