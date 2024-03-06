import React from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ProblemlistPreview = () => {


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

                <div className='flex justify-center mt-3'>
                    <div>
                        <div className='underline'>Problem List</div>
                        <div className='flex justify-center mt-2'>To</div>
                    </div>
                </div>

                {/* Table */}

                <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px]'>
                    <table className='table-auto border-2 border-slate-500 border-collapse w-[100%] '>
                        <thead>

                            <tr className='bg-[#EEEEEE]'>
                                <th className='border-2 border-slate-500 w-[150px] py-4'>SL.No</th>
                                <th className='border-2 border-slate-500 w-[400px] py-4'>PROBLEM_NAME</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>

                            <tr>
                                <td className='border-2 border-slate-500 w-[150px] py-4 '>1</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Drain Line Matarials</td>

                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[150px] py-4 '>2</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Drain Motor, Servicing & Delivery Charge</td>
                            </tr>

                            <tr>
                                <td className='border-2 border-slate-500 w-[150px] py-4 '>3</td>
                                <td className='border-2 border-slate-500 w-[400px] py-4'>Spin Motor Rewinding, Servicing & Delivery Charge</td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className='flex justify-center my-3 '>
                    <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                </div>

            </div>




            {/* for Print Preview Mode  */}

            <div className="hidden">
                <div ref={componentRef}>
                    {/* Your component content here */}
                    <div>

                        <div className='flex justify-center mt-5 '>
                            <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                            <div className='text-[16px] sm:text-[28px] font-[700] text-[#DC3F3F] pt-2 sm:pt-0'> Esquire Customer Care ltd </div>
                        </div>

                        <div className='flex justify-center mt-2'>
                            <div className=' w-[250px] sm:w-[380px] text-[12px] sm:text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                        </div>

                        <div className='flex justify-center mt-3'>
                            <div>
                                <div className='underline'>Problem List</div>
                                <div className='flex justify-center mt-2'>To</div>
                            </div>
                        </div>

                        {/* Table */}

                        <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px]'>
                            <table className='table-auto border-2 border-slate-500 border-collapse w-[100%] '>
                                <thead>

                                    <tr className='bg-[#EEEEEE]'>
                                        <th className='border-2 border-slate-500 w-[150px] py-4'>SL.No</th>
                                        <th className='border-2 border-slate-500 w-[400px] py-4'>PROBLEM_NAME</th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[150px] py-4 '>1</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>Drain Line Matarials</td>

                                    </tr>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[150px] py-4 '>2</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>Drain Motor, Servicing & Delivery Charge</td>
                                    </tr>

                                    <tr>
                                        <td className='border-2 border-slate-500 w-[150px] py-4 '>3</td>
                                        <td className='border-2 border-slate-500 w-[400px] py-4'>Spin Motor Rewinding, Servicing & Delivery Charge</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProblemlistPreview;