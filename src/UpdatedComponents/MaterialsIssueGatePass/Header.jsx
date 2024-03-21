import React from 'react';

const Header = () => {
    return (
        <>
            <div className='flex justify-center flex-col items-center pt-3'>
                <div className=' text-[18px] sm:text-[24px] font-[700]'>Esquire Customer Care Ltd</div>
                <div className=' text-[10px] sm:text-[13px] font-[500]'>260/A, Tejgaon I/A</div>
                <div className=' text-[10px] sm:text-[13px] font-[500] mt-2'>Nabisco , Tejgaon, , Dhaka-1208</div>
                <div className=' text-[10px] sm:text-[13px] font-[500]'>Tel:9883801,98826895,09602333775, 09602333776,09602333777</div>
                <div className=' hidden sm:flex md:hidden sm:text-[13px] font-[500]'>Hotline : 01730-066300,01552-325417, Fax: +880-2-9830820, <br /> E-mail:info_ccd@esquirebd.com</div>

                <div className='flex sm:hidden text-[10px] sm:text-[13px] '>Hotline : 01730-066300,01552-325417, Fax: +880-2-9830820</div>
                <div className='flex sm:hidden text-[10px] sm:text-[13px]'>E-mail:info_ccd@esquirebd.com</div>

                <div className='hidden md:flex text-[10px] sm:text-[13px] font-[500]'>Hotline : 01730-066300,01552-325417, Fax: +880-2-9830820, E-mail:info_ccd@esquirebd.com</div>
            </div>

        </>
    );
};

export default Header;