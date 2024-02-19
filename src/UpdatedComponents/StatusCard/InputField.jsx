import React from 'react';

const InputField = ({ labelName, placeholderName }) => {
    return (
        <>

            <div className='relative mt-3'>
                <label className='absolute top-[-10px] left-[16px] text-[#E74A3B]  text-[14px] bg-[#FFF] px-2' htmlFor=""> {labelName} </label>

                <input type="text" className='border border-[black] w-[240px] h-[34px] rounded-md placeholder:text-start px-4 py-5  placeholder:text-[13px] focus:outline-none focus:border-[#E74A3B]' placeholder={placeholderName} />
            </div>
        </>
    );
};

export default InputField;