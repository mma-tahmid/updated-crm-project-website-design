import React from 'react';
import TableEngineerAssignToInstallationJob from '../UpdatedComponents/StatusCard/TableEngineerAssignToInstallationJob';
import InputField from "../UpdatedComponents/StatusCard/InputField"
import CustomButton from "../UpdatedComponents/StatusCard/CustomButton"
const EngineerAssignToInstallationJob = () => {
    return (

        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>Engineer Assign To Installation Job</div>

                </div>



                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between pb-4 sm:pb-0'>
                        <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                            {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Box
                            </div>
                        </div>

                        <div className='sm:py-6 sm:px-10'> <CustomButton btnName="Search here" /></div>

                    </div>


                    <div className='mt-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 place-items-center pb-8'>
                        <InputField labelName="District" placeholderName="District" />
                        <InputField labelName="Note Add" placeholderName="Note Add" />
                        <InputField labelName="Vendor/technician" placeholderName="Vendor/technician" />
                        <InputField labelName="Area" placeholderName="Area" />
                        <InputField labelName="Thana" placeholderName="Thana" />
                        <InputField labelName="Invoice No" placeholderName="Invoice No" />

                    </div>
                </div>



                {/* Table */}

                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between pb-4 sm:pb-0'>
                        <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                            {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                            <div className='  text-[#E74A3B] text-decoration-3 '>Not Assign Job List
                            </div>
                        </div>

                    </div>


                    <TableEngineerAssignToInstallationJob />


                </div>

                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Assign</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Close</button>

                </div>

            </div>

        </>
    );
};

export default EngineerAssignToInstallationJob;