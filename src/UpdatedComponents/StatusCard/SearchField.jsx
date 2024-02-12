import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchField = () => {
    return (
        <>

            <div className="relative">
                <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                <div className="absolute top-[2px] left-[150px]  ">
                    <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                </div>
            </div>

        </>
    );
};

export default SearchField;