import React from 'react';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';

import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';

import { MdModeEdit } from 'react-icons/md';


const AfterSalesInstallationJobBook = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>INSTALLATION JOB BOOK</div>

                </div>


                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between py-3'>
                        <div className='sm:py-6 sm:px-10   flex gap-x-3 '>

                            <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-6 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Operation
                            </div>
                        </div>

                    </div>


                    <div className=' flex sm:flex-row flex-col items-center sm:justify-center sm:gap-x-4 gap-y-4  mt-4 pb-4'>
                        <div> Job No/Invoice No: </div>
                        <SearchField />
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

                <div><CustomButton btnName="IJCR Preview" /></div>
                <div> <CustomButton btnName="Issue Order Preview" /></div>
                <div><CustomButton btnName="Issue Preview" /></div>

            </div>


        </>
    );
};

export default AfterSalesInstallationJobBook;