import React from 'react';

const HeaderReq = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center pt-3'>
                <div className=' text-[18px] sm:text-[24px] font-[700]'>Esquire Customer Care Ltd</div>
                <div className=' text-[10px] sm:text-[16px] font-[500]'>Service Center</div>
                <div className=' text-[10px] sm:text-[16px] font-[500] mt-2'>260/A, Nabisco , Tejgaon, , Dhaka-1208</div>
            </div>

            <div className='flex justify-center mt-4'>
                <div className='border-2 border-[black] w-auto text-[17px] font-[600] '>
                    Material Requisition [MR]
                </div>
            </div>
        </>
    );
};

export default HeaderReq;