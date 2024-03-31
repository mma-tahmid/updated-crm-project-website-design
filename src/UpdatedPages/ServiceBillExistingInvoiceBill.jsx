import React from 'react';
import InputField from '../UpdatedComponents/StatusCard/InputField';
import { MdModeEdit } from 'react-icons/md';
import SearchField from '../UpdatedComponents/StatusCard/SearchField';

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

                    <div className='py-6 bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between px-10 '>
                        <div className='text-[#E74A3B]  text-decoration-4 my-auto'>Existing Invoice Info</div>


                        <div className='flex gap-x-5 mt-3'>

                            <div> <SearchField /> </div>

                            <div> <button className='bg-[#FA6669] text-[white] px-3 py-1 rounded-[4px]'> Close </button> </div>

                        </div>

                    </div>


                    {/* Check Box  */}

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  mt-2 px-2 sm:px-4 text-[13px]'>
                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label className='ml-2' htmlFor="checkbox">Inventory</label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label className='ml-2' htmlFor="checkbox">Customer name </label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label className='ml-2' htmlFor="checkbox">Mobile no </label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label className='ml-2' htmlFor="checkbox">Gurranty Card No </label>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <label className='ml-2' htmlFor="checkbox"> SB no </label>
                        </div>

                    </div>


                    <div className='mt-3 pb-4'>
                        <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto overflow-y-auto max-h-[700px]'>

                            <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>

                                <thead>

                                    <tr className='bg-[#EEEEEE]'>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'>Invoice no</th>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'>Gurranty card no</th>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'>Ledger name </th>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'> mobile no </th>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'> Ledger address </th>

                                        <th className='border-2 border-slate-500 w-[400px] py-2'> postal code </th>



                                    </tr>

                                </thead>



                                <tbody className='text-center'>

                                    <tr>

                                        <td className='border-2 border-slate-500 w-[400px] py-2 '>Banani TSO</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>EE294 Md Shami..</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>AC</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>ASGA3</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'></td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>   CSE </td>

                                    </tr>

                                    <tr>

                                        <td className='border-2 border-slate-500 w-[400px] py-2 '>Banani TSO</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>EE294 Md Shami..</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>AC</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>ASGA3</td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'></td>

                                        <td className='border-2 border-slate-500 w-[400px] py-2'>   CSE </td>

                                    </tr>







                                </tbody>

                            </table>



                        </div>


                    </div>



                </div>
            </div>
        </>
    )
};

export default ServiceBillExistingInvoiceBill;