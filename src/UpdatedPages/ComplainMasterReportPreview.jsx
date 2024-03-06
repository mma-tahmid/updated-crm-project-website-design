import React from 'react';

const ComplainMasterReportPreview = () => {
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

                <div className='flex justify-center mt-1'>
                    <div>
                        <div className=''>Complain Master Details</div>
                        <div className='flex justify-center'>02.10.23 to 02.10.23</div>
                    </div>
                </div>


                {/* TABLE */}

                <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto   '>
                    <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>
                        <thead>

                            <tr className='bg-[#EEEEEE]'>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>SL</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Location</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Complain No </th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'> Job  No </th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'> Warranty </th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>Invoice No </th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>SB No </th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>SB Date</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>9868</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>26.09.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>CCD</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>9868-3</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>02.10.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>HO-22-0..</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Team Group</td>
                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>9868</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>26.09.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>CCD</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>9868-3</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>02.10.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>HO-22-0..</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Team Group</td>
                            </tr>
                            
                            <tr>
                                <td className='border-2 border-slate-500 w-[400px] py-4 '>9868</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>26.09.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>CCD</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>9868-3</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>02.10.23</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>HO-22-0..</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'></td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Team Group</td>
                            </tr>




                        </tbody>
                    </table>

                </div>

                {/* <div className='flex justify-center my-3 '>
                    <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                </div> */}
            </div>
        </>
    );
};

export default ComplainMasterReportPreview;