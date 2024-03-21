import React from 'react';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import { MdModeEdit } from 'react-icons/md';

const ServiceBillExistingInvoiceBill = () => {
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
                </div>
            </div>
        </>
    )
};

export default ServiceBillExistingInvoiceBill;