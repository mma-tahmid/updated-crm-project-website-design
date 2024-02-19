import React from 'react';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';

import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';

import { MdModeEdit } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";

const NewVersionAfterSalesInstallationJobBook = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>INSTALLATION JOB BOOK</div>

                </div>


                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between pb-4 sm:pb-0'>
                        <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                            {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Box
                            </div>
                        </div>

                        <div className='sm:py-6 sm:px-10'><CustomButton btnName="Search here" /></div>

                    </div>
                    {/* flex sm:flex-row flex-col items-center */}
                    <div className='mt-5 px-5 flex sm:flex-row flex-col items-center sm:justify-center gap-x-4 pb-4'>
                        <div> Job No/Invoice No: </div>
                        <input className='border-2 sm:w-[250px] w-[200px]' type="text" />
                    </div>
                </div>


            </div>


            {/* Button */}
            {/* sm:gap-x-4 */}
            {/* <div className='text-center md:flex gap-x-2 justify-center   mt-4 mb-4'>

                <div className='my-2'><CustomButton btnName="IJCR Preview" /></div>
                <div className='my-2'> <CustomButton btnName="Issue Order Preview" /></div>
                <div className='my-2'><CustomButton btnName="Issue Preview" /></div>

            </div> */}

            <div className=' flex sm:flex-row flex-col gap-x-2 gap-y-2 sm:justify-center items-center mt-4 mb-4'>

                <div><CustomButton btnName="IJCR Preview" /> </div>
                <div> <CustomButton btnName="Issue Order Preview" /></div>
                <div><CustomButton btnName="Issue Preview" /></div>

            </div>


        </>
    );
};

export default NewVersionAfterSalesInstallationJobBook;