import React from 'react';
import { MdModeEdit } from 'react-icons/md';

const TitleBar = ({ titleName }) => {
    return (
        <>
            <div className=' bg-[#FDECEC] flex'>

                <div className='flex gap-x-3 px-6 py-6'>
                    <div className='relative shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px]'>
                        <div className='absolute top-[3px]'> <MdModeEdit /> </div>
                    </div>
                    {/* <div className='shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px] icon-design'><MdModeEdit /></div> */}

                    <div className=' text-[#E74A3B] text-decoration-3 '>{titleName}</div>

                </div>

            </div>
        </>
    );
};

export default TitleBar;