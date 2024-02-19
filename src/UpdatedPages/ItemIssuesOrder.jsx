import React from 'react';
import InputField from "../UpdatedComponents/StatusCard/InputField"
import CustomButton from '../UpdatedComponents/StatusCard/CustomButton';
import TableItemIssuesOrder from '../UpdatedComponents/StatusCard/TableItemIssuesOrder';


const ItemIssuesOrder = () => {
    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='bg-[#FDECEC] flex sm:flex-row flex-col items-center sm:justify-between pb-3 sm:pb-0'>
                    <div className='sm:py-6 sm:px-10  sm:flex sm:gap-x-3 '>

                        {/* <div className='pt-1.5  '> <FaSearch className='text-[#FFF] bg-[#EB5757]'   /></div> */}
                        <div className='  text-[#E74A3B] text-decoration-3 '>Item Issue Order
                        </div>
                    </div>

                    <div className='sm:py-6 sm:px-10 mt-2 sm:mt-0'> <CustomButton btnName="Search here" /></div>

                </div>

                <div className=' mt-7'>
                    <div className='shadow-md'>
                        <div className='grid sm:grid-cols-3 place-items-center pb-10 '>
                            {/* 1st one */}
                            <div className='text-[14px]'>
                                <div className='flex gap-x-4'>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Installation Job</label>

                                </div>

                                <div className='flex gap-x-4 gap-y-2'>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Service Job</label>

                                </div>
                            </div>

                            {/* 2nd  */}

                            <div className='mt-2 sm:mt-0'>
                                <div><InputField labelName="Stock Issue Order No" placeholderName="I0#9632-2023" /></div>
                                <div className='pt-3'><InputField labelName="Job Card No" placeholderName="" /></div>
                            </div>

                            <div className='text-[13px] text-[#E74A3B] mt-2 sm:mt-0'>
                                <div>Md. Shariful Islam</div>
                                <div>MD-19-001136</div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className=' mt-7'>
                    <div className='shadow-md'>

                        <TableItemIssuesOrder />
                    </div>

                </div>

                {/* Input Field */}

                <div className='grid grid-cols-1 gap-y-2 md:grid-cols-3 place-items-center mt-9 '>
                    <InputField labelName="Note" placeholderName="" />
                    <InputField labelName="Total Oty" placeholderName="" />

                </div>


                <div className='sm:flex grid grid-cols-2 gap-y-4 place-items-center sm:justify-center sm:gap-x-4 mt-14 pb-10'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Day Book</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Save</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Priview</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Exit</button>
                </div>

            </div>


        </>
    );
};

export default ItemIssuesOrder;