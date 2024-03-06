import React from 'react';

const SbReportDayBookReportPreview = () => {
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

                {/* Content */}

                <div className='flex sm:flex-row flex-col sm:justify-around items-center gap-y-4  mt-7'>
                    {/* *** Item Center */}
                    <div className='flex gap-x-4 items-center'>
                        <div className='text-[11px] sm:text-[13px]'>MR no</div>
                        <div className='border-2 border-[#000000] w-[130px] md:w-[160px] py-2 px-2'>456666</div>
                    </div>

                    <div className='flex gap-x-4 items-center'>
                        <div className='text-[11px] sm:text-[13px]'>Date</div>
                        <div className='border-2 border-[#000000] w-[130px] md:w-[160px] py-2 px-2'>456666</div>
                    </div>

                    <div className='flex gap-x-4 items-center'>
                        <div className='text-[11px] sm:text-[13px]'>Amount</div>
                        <div className='border-2 border-[#000000] w-[130px] md:w-[160px] py-2 px-2'>456666</div>
                    </div>


                </div>


                <div className='px-2 sm:px-12 md:px-24 mt-14 text-[9px] sm:text-[15px]'>

                    <div className='flex items-center  '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Amount In Word</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%]'> Seven Thousand Eight Hundred Taka Only </div>
                    </div>

                    <div className='flex items-center  mt-6 '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Received From</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%]'> Dr. Gazi Md. Zahirul Islam (01716089283) </div>
                    </div>

                    <div className='flex items-center  mt-6 '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Mobile No</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%]'> 01716089283 </div>
                    </div>

                    <div className='flex items-center  mt-6 '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Date</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%]'>  </div>
                    </div>

                    <div className='flex items-center  mt-6 '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Received Against</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%] lg:w-[70%]'>SB -13781 02-10.23 </div>
                    </div>

                    <div className='flex items-center  mt-6 '>
                        <div className='w-[30%] sm:w-[30%] md:w-[30%] lg:w-[20%]'>Bank</div>
                        <div className='border-b-2 border-[#000000] w-[70%] sm:w-[70%] md:w-[70%]  lg:w-[70%]'> </div>
                    </div>



                </div>

            </div>

        </>
    );
};

export default SbReportDayBookReportPreview;