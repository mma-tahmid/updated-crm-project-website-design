import React from 'react';

const CustomButton = ({ btnName }) => {
    return (

        <div>
            <button className='text-[#FFF] text-[13px] bg-[#FA6669] w-[145px] h-[40px] rounded-[5px]'> {btnName} </button>
        </div>
    );
};

export default CustomButton;