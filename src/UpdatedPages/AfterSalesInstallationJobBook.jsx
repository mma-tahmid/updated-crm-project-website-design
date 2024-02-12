import React from 'react';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';

import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';

import { MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AfterSalesInstallationJobBook = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>INSTALLATION JOB BOOK</div>

                </div>


                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] sm:flex sm:justify-between'>
                        <div className='py-6 px-10  flex gap-x-3  '>

                            <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-6 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Operation
                            </div>
                        </div>

                    </div>

                    <div className='mt-5 px-5 flex justify-center gap-x-4 pb-4'>
                        <div> Job No/Invoice No: </div>
                        <SearchField />
                    </div>
                </div>


            </div>


            {/* Button */}

            <div className='flex justify-center gap-x-4 mt-4 mb-4'>

                <CustomButton btnName="IJCR Preview" />
                <CustomButton btnName="Issue Order Preview" />
                <CustomButton btnName="Issue Preview" />


            </div>


        </>
    );
};

export default AfterSalesInstallationJobBook;