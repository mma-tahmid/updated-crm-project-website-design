import React from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SbReportPreview = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    return (
        <>
            <div>

                <div className='flex justify-center mt-5 '>
                    <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                    <div className='text-[16px] sm:text-[28px] font-[700] text-[#DC3F3F] pt-2 sm:pt-0'> Esquire Customer Care ltd </div>
                </div>

                <div className='flex justify-center mt-2'>
                    <div className=' w-[250px] sm:w-[380px] text-[12px] sm:text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                </div>

                {/* body */}

                <div className=' px-4 sm:px-14 mt-7'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-4 '>
                        {/* gap-x-4 */}
                        <div className='flex sm:flex-row flex-col sm:gap-x-6  '>

                            <div className='sm:w-7/12 text-[10px] sm:text-[10px] lg:text-[15px] font-[400] leading-[2]'>

                                <div>

                                    <div className='flex'>
                                        <div className=' w-[50%] sm:w-[40%] lg:w-[30%]'>SB Date</div>
                                        <div className=' w-[50%] sm:w-[60%] lg:w-[70%]'>02.10.23</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className=' w-[50%] sm:w-[40%] lg:w-[30%] '> SB No</div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%] '>13781</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex'>
                                        <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Customer Name  </div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%] '>Dr. Gazi Md. Zahirul Islam</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex'>
                                        <div className='w-[50%] sm:w-[40%] lg:w-[30%]' > Contact Address</div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>Rd#15, Hs#41,Blk#F,Bashundhara R/A</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Contact Person </div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%]'></div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex'>
                                        <div className='w-[50%] sm:w-[40%] lg:w-[30%]'> Contact No</div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>01716089283</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Delivery Address </div>
                                        <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>Rd#15, Hs#41, Blk#F, Bashundhara R/A Dhaka 01716089283</div>
                                    </div>
                                </div>

                            </div>


                            <div className='sm:w-5/12 text-[10px] sm:text-[10px] lg:text-[15px] font-[400]  leading-[2]'>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Reference</div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>CCD</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Job No</div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>N/A  </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Complain No </div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>10181 </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'> Service Token</div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>N/A </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Products Name </div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>AC </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Model </div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> ASG-24ABC-W</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Color </div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex '>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Serial </div>
                                        <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>


                {/* Table PART */}

                <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px]'>
                    <table className='table-auto border-2 border-slate-500 border-collapse '>
                        <thead>

                            <tr>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Particulars Of Service</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Quantity</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Rate</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Amount</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>AC Down Servicing</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>AC Down Servicing</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>Total Amount</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>7,800.00</td>
                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 font-[700] '>Take In Word</td>
                                <td colSpan="3" className='border-2 border-slate-500 py-4 w-[400px] font-[700] '>Seven Thousand Eight Hundred Taka Only</td>


                            </tr>



                        </tbody>
                    </table>

                </div>


                <div className=' px-4 sm:px-14 mt-14 text-[12px] sm:text-[20px] '>
                    <div className='flex justify-between'>
                        <div className='overline'>Prepared By</div>
                        <div className='overline'>Authenticated By</div>
                    </div>
                </div>

                {/* Button */}

                <div className='flex justify-center my-3 '>
                    <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                </div>


            </div >




            {/* for Print Preview Mode  */}

            <div className="hidden">

                <div ref={componentRef}>

                    <div>

                        <div className='flex justify-center mt-5 '>
                            <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                            <div className='text-[16px] sm:text-[28px] font-[700] text-[#DC3F3F] pt-2 sm:pt-0'> Esquire Customer Care ltd </div>
                        </div>

                        <div className='flex justify-center mt-2'>
                            <div className=' w-[250px] sm:w-[380px] text-[12px] sm:text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                        </div>

                        {/* body */}

                        <div className=' px-4 sm:px-14 mt-7'>
                            <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-4 '>
                                {/* gap-x-4 */}
                                <div className='flex sm:flex-row flex-col sm:gap-x-6  '>

                                    <div className='sm:w-7/12 text-[10px] sm:text-[10px] lg:text-[15px] font-[400] leading-[2]'>

                                        <div>

                                            <div className='flex'>
                                                <div className=' w-[50%] sm:w-[40%] lg:w-[30%]'>SB Date</div>
                                                <div className=' w-[50%] sm:w-[60%] lg:w-[70%]'>02.10.23</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className=' w-[50%] sm:w-[40%] lg:w-[30%] '> SB No</div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%] '>13781</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Customer Name  </div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%] '>Dr. Gazi Md. Zahirul Islam</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[50%] sm:w-[40%] lg:w-[30%]' > Contact Address</div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>Rd#15, Hs#41,Blk#F,Bashundhara R/A</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Contact Person </div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%]'></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[50%] sm:w-[40%] lg:w-[30%]'> Contact No</div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>01716089283</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[40%] lg:w-[30%]'>Delivery Address </div>
                                                <div className='w-[50%] sm:w-[60%] lg:w-[70%]'>Rd#15, Hs#41, Blk#F, Bashundhara R/A Dhaka 01716089283</div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='sm:w-5/12 text-[10px] sm:text-[10px] lg:text-[15px] font-[400]  leading-[2]'>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Reference</div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>CCD</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Job No</div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>N/A  </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Complain No </div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>10181 </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'> Service Token</div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>N/A </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Products Name </div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'>AC </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Model </div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> ASG-24ABC-W</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Color </div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[40%]'>Serial </div>
                                                <div className='w-[50%] sm:w-[50%] lg:w-[60%]'> </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* Table PART */}

                        <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px]'>
                            <table className='table-auto border-2 border-slate-500 border-collapse '>
                                <thead>

                                    <tr>
                                        <th className='border-2 border-slate-500 w-[400px] py-4'>Particulars Of Service</th>
                                        <th className='border-2 border-slate-500 w-[400px] py-4'>Quantity</th>
                                        <th className='border-2 border-slate-500 w-[400px] py-4'>Rate</th>
                                        <th className='border-2 border-slate-500 w-[400px] py-4'>Amount</th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[400px] py-4 '>AC Down Servicing</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                    </tr>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[400px] py-4 '>AC Down Servicing</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>1</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>2,300.00</td>
                                    </tr>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[400px] py-4 '>Total Amount</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>7,800.00</td>
                                    </tr>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[400px] py-4 font-[700] '>Take In Word</td>
                                        <td colSpan="3" className='border-2 border-slate-500 py-4 w-[400px] font-[700] '>Seven Thousand Eight Hundred Taka Only</td>


                                    </tr>



                                </tbody>
                            </table>

                        </div>


                        <div className=' px-4 sm:px-14 mt-14 text-[12px] sm:text-[20px] '>
                            <div className='flex justify-between'>
                                <div className='overline'>Prepared By</div>
                                <div className='overline'>Authenticated By</div>
                            </div>
                        </div>

                        {/* Button */}

                    </div >

                </div>
            </div >

        </>
    );
};

export default SbReportPreview;