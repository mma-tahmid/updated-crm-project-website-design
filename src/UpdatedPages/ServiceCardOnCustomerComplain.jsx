import React from 'react';
import { useRef } from 'react';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { useReactToPrint } from 'react-to-print';


const ServiceCardOnCustomerComplain = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <>
            <div >
                {/* Your component content here */}
                <div className='flex justify-center mt-5 '>
                    <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                    <div className='text-[28px] font-[700] text-[#DC3F3F]'> Esquire Customer Care ltd </div>
                </div>

                <div className='flex justify-center mt-2'>
                    <div className='w-[380px] text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                </div>

                <div className='flex justify-center my-4'>
                    <div className=' text-[16px] font-[600] underline'>Service Card On Customer Complain</div>
                </div>

                {/* Body */}
                <div className='px-14'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-4 '>

                        <div className='flex gap-x-4'>

                            <div className='lg:w-4/12 text-[15px] font-[400] leading-[2]'>

                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Job No</div>
                                        <div>Complain No</div>
                                        <div>Complain Date  </div>
                                        <div> Complain Assign Date  </div>
                                    </div>

                                    <div>
                                        <div>9868-3</div>
                                        <div>9868</div>
                                        <div>26.09.23</div>
                                        <div>02.10.2023</div>

                                    </div>

                                </div>

                            </div>

                            <div className='lg:w-4/12 text-[15px] font-[400]  leading-[2]'>
                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Invoice No</div>
                                        <div>Invoice Date</div>
                                        <div>SB No </div>
                                        <div> SB Amount </div>
                                    </div>

                                    <div>
                                        <div>HO-22-018811</div>
                                        <div>5.17.2023 12:00a m</div>
                                        <div>N/A</div>
                                        <div>N/A</div>

                                    </div>

                                </div>
                            </div>

                            <div className='lg:w-4/12 text-[15px] font-[400] leading-[2]'>
                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Date</div>

                                    </div>

                                    <div>
                                        <div>22-12-2023</div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 2nd  */}
                <div className='px-14 mt-5'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-4 '>

                        <div className='flex gap-x-4'>

                            <div className='lg:w-6/12 text-[15px] font-[400] leading-[2]'>

                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Customer Name</div>
                                        <div>Customer Address</div>
                                        <div>Phone No  </div>

                                    </div>

                                    <div>
                                        <div>Team Group (MD House)</div>
                                        <div>Rd#03, Hs# 18/A, Banani DOHS, Dhaka.</div>
                                        <div>01988582808</div>
                                    </div>

                                </div>

                            </div>

                            <div className='lg:w-6/12 text-[15px] font-[400]  leading-[2]'>
                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Contact Person Name</div>

                                    </div>

                                    <div>
                                        <div>Mr Nahid</div>


                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                {/* 3rd */}

                <div className='px-14 mt-5'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px]   '>

                        <div className='text-[14px] text-[#000000] font-[400] text-center px-4'>Problem & Product Related Information</div>
                        <div className='border border-[black]'> </div>

                        <div className='px-4 py-4'>
                            <div className=' flex gap-x-4 '>

                                <div className='lg:w-8/12 text-[15px] font-[400] leading-[2]'>

                                    <div className='flex gap-x-8 '>

                                        <div>
                                            <div>Product Serial Matches With The Serial Of On CM </div>
                                            <div>Service To Give Within Warranty Period</div>
                                            <div> Nature Of Complain </div>
                                            <div>Complain Received By </div>
                                            <div>Executed By</div>

                                        </div>

                                        <div>
                                            <div className='flex gap-x-3 '>
                                                <div>yes</div>
                                                <div><RiCheckboxBlankLine className='w-6 h-6 text-[#FA6669]' /></div>
                                                <div>No</div>
                                                <div><RiCheckboxBlankLine className='w-6 h-6  text-[#FA6669]' /></div>
                                            </div>

                                            <div className='flex gap-x-3 '>
                                                <div>yes</div>
                                                <div><RiCheckboxBlankLine className='w-6 h-6 text-[#FA6669]' /></div>
                                                <div>No</div>
                                                <div><RiCheckboxBlankLine className='w-6 h-6  text-[#FA6669]' /></div>
                                            </div>

                                            <div className='text-[#FA6669]'>Only Fitting (Outdoor)</div>
                                            <div>Hamidcro</div>
                                            <div>EE294 Md Shamim Miah</div>

                                        </div>

                                    </div>


                                </div>


                                <div className='lg:w-4/12 text-[15px] font-[400] leading-[2]'>

                                    <div className='flex gap-x-5 '>

                                        <div>Reference Name</div>


                                        <div>COD</div>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                </div>

                {/* 4th */}

                <div className='px-14 mt-5'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px]   '>

                        <div className='flex justify-around font-[700]'>
                            <div>Product Name</div>
                            <div>Model No</div>
                            <div>Quantity</div>
                            <div>SI No</div>

                        </div>

                        <div className='border border-[black]'> </div>

                        <div className='px-4 py-4'>
                            <div className=' flex gap-x-4 text-[15px] font-[400] leading-[2] justify-around '>

                                <div>AC</div>
                                <div>ASGA30FETA</div>
                                <div>1</div>
                                <div>123</div>

                            </div>

                            <div className=' flex gap-x-4 text-[15px] font-[400] leading-[2] justify-around '>

                                <div>AC</div>
                                <div>ASGA30FETA</div>
                                <div>1</div>
                                <div>123</div>

                            </div>

                        </div>
                    </div>
                </div>


                {/* 5th */}
                <div className='px-14 mt-5 text-[15px]'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-2 py-2 leading-[2]   '>

                        <div className='flex justify-around font-[700]'>
                            <div>Remarks</div>
                            <div>Work Completed</div>
                            <div className='flex gap-x-3'>
                                <div>Yes</div>
                                <div><RiCheckboxBlankLine className='w-7 h-7 text-[#FA6669]' /></div>
                            </div>

                            <div className='flex gap-x-3'>
                                <div>No</div>
                                <div><RiCheckboxBlankLine className='w-7 h-7 text-[#FA6669]' /></div>
                            </div>

                            <div>Completion Date</div>

                        </div>


                        <div className=' px-24 pt-4'>Comments: </div>

                    </div>
                </div>

                {/* last part */}
                <div className='px-14 mt-5'>
                    <div className='text-[15px] font-[600]'>Note to Customer : Please Preserve this copy for Having next service</div>

                    <div className='mt-14 flex justify-between'>
                        <div className='overline'> Customer Signature </div>
                        <div className='overline'> Technician Signature </div>
                        <div className='overline'> CRO Signature </div>
                        <div className='overline'> Authenticated By</div>
                    </div>



                </div>

            </div>


            {/* for Print Preview Mode  */}

            <div className="hidden">
                <div ref={componentRef}>
                    {/* Your component content here */}
                    <div className='flex justify-center mt-2 '>
                        <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                        <div className='text-[24px] font-[700] text-[#DC3F3F]'> Esquire Customer Care ltd </div>
                    </div>

                    <div className='flex justify-center mt-2'>
                        <div className='w-[380px] text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                    </div>

                    <div className='flex justify-center my-2'>
                        <div className=' text-[16px] font-[600] underline'>Service Card On Customer Complain</div>
                    </div>

                    {/* Body */}
                    <div className='px-14'>
                        <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-3 '>

                            <div className='flex gap-x-6'>

                                <div className='lg:w-4/12 text-[9px] font-[400] leading-[2]'>

                                    <div className='flex gap-x-6 '>
                                        <div>
                                            <div>Job No</div>
                                            <div>Complain No</div>
                                            <div>Complain Date  </div>
                                            <div> Complain Assign Date  </div>
                                        </div>

                                        <div>
                                            <div>9868-3</div>
                                            <div>9868</div>
                                            <div>26.09.23</div>
                                            <div>02.10.2023</div>

                                        </div>

                                    </div>

                                </div>

                                <div className='lg:w-4/12 text-[9px] font-[400]  leading-[2]'>
                                    <div className='flex gap-x-6 '>
                                        <div>
                                            <div>Invoice No</div>
                                            <div>Invoice Date</div>
                                            <div>SB No </div>
                                            <div> SB Amount </div>
                                        </div>

                                        <div>
                                            <div>HO-22-018811</div>
                                            <div>5.17.2023 12:00a m</div>
                                            <div>N/A</div>
                                            <div>N/A</div>

                                        </div>

                                    </div>
                                </div>

                                <div className='lg:w-4/12 text-[9px] font-[400] leading-[2]'>
                                    <div className='flex gap-x-6 '>
                                        <div>
                                            <div>Date</div>

                                        </div>

                                        <div>
                                            <div>22-12-2023</div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* 2nd  */}
                    <div className='px-14 mt-3'>
                        <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-3 '>

                            <div className='flex gap-x-4'>

                                <div className='lg:w-6/12 text-[9px] font-[400] leading-[2]'>

                                    <div className='flex gap-x-6 '>
                                        <div>
                                            <div>Customer Name</div>
                                            <div>Customer Address</div>
                                            <div>Phone No  </div>

                                        </div>

                                        <div>
                                            <div>Team Group (MD House)</div>
                                            <div>Rd#03, Hs# 18/A, Banani DOHS, Dhaka.</div>
                                            <div>01988582808</div>
                                        </div>

                                    </div>

                                </div>

                                <div className='lg:w-6/12 text-[9px] font-[400]  leading-[2]'>
                                    <div className='flex gap-x-6 '>
                                        <div>
                                            <div>Contact Person Name</div>

                                        </div>

                                        <div>
                                            <div>Mr Nahid</div>


                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>


                    {/* 3rd */}

                    <div className='px-14 mt-3'>
                        <div className='border-2 border-[#323232] shadow-md rounded-[10px]   '>

                            <div className='text-[12px] text-[#000000] font-[400] text-center px-4'>Problem & Product Related Information</div>
                            <div className='border border-[black]'> </div>

                            <div className='px-4 py-4'>
                                <div className=' flex gap-x-4 '>

                                    <div className='lg:w-8/12 text-[9px] font-[400] leading-[2]'>

                                        <div className='flex gap-x-8 '>

                                            <div>
                                                <div>Product Serial Matches With The Serial Of On CM </div>
                                                <div>Service To Give Within Warranty Period</div>
                                                <div> Nature Of Complain </div>
                                                <div>Complain Received By </div>
                                                <div>Executed By</div>

                                            </div>

                                            <div>
                                                <div className='flex gap-x-3 '>
                                                    <div>yes</div>
                                                    <div><RiCheckboxBlankLine className='w-6 h-6 text-[#FA6669]' /></div>
                                                    <div>No</div>
                                                    <div><RiCheckboxBlankLine className='w-6 h-6  text-[#FA6669]' /></div>
                                                </div>

                                                <div className='flex gap-x-3 '>
                                                    <div>yes</div>
                                                    <div><RiCheckboxBlankLine className='w-6 h-6 text-[#FA6669]' /></div>
                                                    <div>No</div>
                                                    <div><RiCheckboxBlankLine className='w-6 h-6  text-[#FA6669]' /></div>
                                                </div>

                                                <div className='text-[#FA6669]'>Only Fitting (Outdoor)</div>
                                                <div>Hamidcro</div>
                                                <div>EE294 Md Shamim Miah</div>

                                            </div>

                                        </div>


                                    </div>


                                    <div className='lg:w-4/12 text-[9px] font-[400] leading-[2]'>

                                        <div className='flex gap-x-5 '>

                                            <div>Reference Name</div>


                                            <div>COD</div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                    {/* 4th  */}

                    <div className='px-14 mt-3'>
                        <div className='border-2 border-[#323232] shadow-md rounded-[10px]   '>

                            <div className='flex justify-around font-[700]'>
                                <div>Product Name</div>
                                <div>Model No</div>
                                <div>Quantity</div>
                                <div>SI No</div>

                            </div>

                            <div className='border border-[black]'> </div>

                            <div className='px-4 py-3'>
                                <div className=' flex gap-x-4 text-[9px] font-[400] leading-[2] justify-around '>

                                    <div>AC</div>
                                    <div>ASGA30FETA</div>
                                    <div>1</div>
                                    <div>123</div>

                                </div>

                                <div className=' flex gap-x-4 text-[9px] font-[400] leading-[2] justify-around '>

                                    <div>AC</div>
                                    <div>ASGA30FETA</div>
                                    <div>1</div>
                                    <div>123</div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* 5th */}

                    <div className='px-14 mt-3 text-[9px]'>
                        <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-2 py-2 leading-[2]   '>

                            <div className='flex justify-around font-[700]'>
                                <div>Remarks</div>
                                <div>Work Completed</div>
                                <div className='flex gap-x-3'>
                                    <div>Yes</div>
                                    <div><RiCheckboxBlankLine className='w-7 h-7 text-[#FA6669]' /></div>
                                </div>

                                <div className='flex gap-x-3'>
                                    <div>No</div>
                                    <div><RiCheckboxBlankLine className='w-7 h-7 text-[#FA6669]' /></div>
                                </div>

                                <div>Completion Date</div>

                            </div>


                            <div className=' px-7 pt-1'>Comments: </div>

                        </div>
                    </div>

                    {/* last Part */}

                    <div className='px-14 mt-3'>
                        <div className='text-[15px] font-[600]'>Note to Customer : Please Preserve this copy for Having next service</div>

                        <div className='mt-9 flex justify-between'>
                            <div className='overline'> Customer Signature </div>
                            <div className='overline'> Technician Signature </div>
                            <div className='overline'> CRO Signature </div>
                            <div className='overline'> Authenticated By</div>
                        </div>

                    </div>

                </div>
            </div>



            <div className='flex justify-center my-3 '>
                <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
            </div>
        </>
    );
};

export default ServiceCardOnCustomerComplain;