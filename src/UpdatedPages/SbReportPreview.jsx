import React from 'react';

const SbReportPreview = () => {
    return (
        <>
            <div>

                <div className='flex justify-center mt-5 '>
                    <div> <img src="https://i.ibb.co/wr9xHw8/logo-image.png" alt="logo" /></div>
                    <div className='text-[28px] font-[700] text-[#DC3F3F]'> Esquire Customer Care ltd </div>
                </div>

                <div className='flex justify-center mt-2'>
                    <div className='w-[380px] text-[15px] font-[400] '>260/A, Tejgaon I/A Nabisco, Tejgaon, Dhaka-1208 Tel- 09610001010 E-mail-info_ccd@esquirebd.com</div>
                </div>

                {/* body */}

                <div className='px-14'>
                    <div className='border-2 border-[#323232] shadow-md rounded-[10px] px-4 py-4 '>

                        <div className='flex gap-x-4'>

                            <div className='w-6/12 text-[15px] font-[400] leading-[2]'>

                                <div>
                                    {/* 50% ar moddhe 100% abr 50% 50% nibo */}
                                    <div className='flex'>
                                        <div className='w-[25%]'>SB Date</div>
                                        <div className='w-[75%]'>02.10.23</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-x-44'>
                                        <div> SB No</div>
                                        <div>13781</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-x-24'>
                                        <div className='w-[25%]'>Customer Name  </div>
                                        <div className='w-[75%]'>Dr. Gazi Md. Zahirul Islam</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-x-24'>
                                        <div className='w-3/12' > Contact Address</div>
                                        <div className='w-3/12'>Rd#15, Hs#41,Blk#F,Bashundhara R/A</div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-x-24'>
                                        <div>Contact Person </div>
                                        <div></div>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-x-32'>
                                        <div> Contact No</div>
                                        <div>01716089283</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-x-24'>
                                        <div>Delivery Address </div>
                                        <div>Rd#15, Hs#41,Blk#F,Bashundhara R/A Dhaka 01716089283</div>
                                    </div>
                                </div>

                            </div>

                            <div className='w-6/12 text-[15px] font-[400]  leading-[2]'>
                                <div className='flex gap-x-6 '>
                                    <div>
                                        <div>Reference</div>
                                        <div>Job No</div>
                                        <div>Complain No </div>
                                        <div> Service Token </div>
                                        <div>Products Name</div>
                                        <div>Model</div>
                                        <div>Color</div>
                                        <div>Serial</div>
                                    </div>

                                    <div>
                                        <div>CCD</div>
                                        <div> N/A </div>
                                        <div>10181</div>
                                        <div> N/A </div>
                                        <div>AC</div>
                                        <div>ASG-24ABC-W</div>
                                        <div> N/A </div>
                                        <div> N/A  </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>




        </>
    );
};

export default SbReportPreview;