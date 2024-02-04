import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { IoSearchSharp } from "react-icons/io5";
import { Table } from 'antd';

const ComplainReceived2 = () => {

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Invoice no",
            dataIndex: "invoiceNo",
        },

        {
            key: "2",  // data index a je value dibo oi same value key hisabe hobe
            title: "Gurranty card no",
            dataIndex: "gurrantyCardNo",
            responsive: ['md']
        },

        {
            key: "3",  // data index a je value dibo oi same value key hisabe hobe
            title: "Ledger name",
            dataIndex: "leaderName",
        },

        {
            key: "4",  // data index a je value dibo oi same value key hisabe hobe
            title: "Mobile no",
            dataIndex: "mobileNo",
            responsive: ['md']
        },

        {
            key: "5",  // data index a je value dibo oi same value key hisabe hobe
            title: "Ledger address ",
            dataIndex: "leaderAddress",
            responsive: ['md']
        },

        {
            key: "6",  // data index a je value dibo oi same value key hisabe hobe
            title: "Postal code",
            dataIndex: "postalCode",
            responsive: ['md']
        },
    ]


    const expandedRowRender = (record) => (

        // Design In THIS PART
        <div className="grid grid-cols-2 gap-x-32">
            <div> Gurranty card no: </div>
            <div> {record.gurrantyCardNo}</div>
            <div> Mobile No </div>
            <div> {record.mobileNo}</div>
            <div>Ledger address	</div>
            <div>{record.leaderAddress}</div>
            <div>Postal code </div>
            <div>{record.postalCode}</div>
        </div>



    )

    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            invoiceNo: 123446,
            gurrantyCardNo: 2424288,
            leaderName: "ABC",
            mobileNo: "01879278983",
            leaderAddress: "Dhaka",
            postalCode: "12345"

        },

        {
            key: "2",
            invoiceNo: 122343,
            gurrantyCardNo: 133234,
            leaderName: "ABC",
            mobileNo: "0178345666",
            leaderAddress: "Sylhet",
            postalCode: "1256"

        },


    ])



    return (
        <div>
            <div className='conatiner mx-3 mt-2'>


                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>COMPLAIN RECEIVED</div>

                    <div className='flex justify-center'>
                        <div className=' mt-2 w-[191px] sm:w-[191px] bg-[#F9333E] text-[#FFF] px-4 rounded text-decoration-2'> Existing Customer Invoice </div>
                    </div>

                </div>



                <div className=' shadow-md  mt-2 '>

                    <div className='py-6 bg-[#FDECEC] relative '>
                        <div className='pl-[49px]   text-[#E74A3B] text-decoration-3 '>Complain Received Info
                        </div>
                        <div className='shadow-lg text-[#E74A3B] pl-1 border border-[#E74A3B] rounded-md w-[25.44px] absolute top-[29px] left-[253px] icon-design'><MdModeEdit /></div>

                    </div>


                    {/* Form Part */}
                    <div className=' pt-5 px-9 pb-8 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-y-4  gap-y-4'>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter complain no' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Invoice No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice No </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Product Type' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Product Type </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Contact No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Contact Person </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Complain Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Invoice Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Model Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Model Name</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Contact No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Contact No </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Location Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Location Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter SB No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Quantity' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Quantity </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Area Code' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Area Code </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Customer Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter SB Date' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB Date </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Product Serial Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Product Serial Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter STE Address' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > STE Address</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Warranty Status' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Warranty Status </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Reference' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Reference </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Gurranty Card Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Gurranty Card Name </div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[100%] sm:w-[250px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter Assign to Department' name="" id="" />

                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Assign to Department </div>
                        </div>



                    </div>

                </div>

                {/* 2nd Part */}

                <div className=' shadow-md  mt-5 '>

                    <div className='pb-4'>
                        <div className='py-6 bg-[#FDECEC] sm:flex sm:justify-between sm:px-10 '>

                            <div className='text-[#E74A3B] text-center  text-[16px] font-[500] my-auto'>Existing Invoice Info </div>

                            <div className='flex justify-center gap-x-2 mt-4 '>
                                {/* search input Field */}
                                <div className="relative">
                                    <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                                    <div className="absolute top-[2px] left-[150px]  ">
                                        <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                                    </div>
                                </div>

                                {/* Close Button */}

                                <button className='bg-[#FA6669] text-[#FFF] rounded-sm  w-[76px] h-[31px]'> Close</button>

                            </div>
                        </div>


                        <div className='pt-2'>

                            <div className='sm:flex sm:justify-around '>
                                <div className=''>
                                    <input type="checkbox" name="" id="" />
                                    <span className='px-1 text-[14px] font-[500]'>Inventory</span>
                                </div>

                                <div className=''>
                                    <input type="checkbox" name="" id="" />
                                    <span className='px-1 text-[14px] font-[500]'>Customer name</span>
                                </div>

                                <div className=''>
                                    <input type="checkbox" name="" id="" />
                                    <span className='px-1 text-[14px] font-[500]'>Mobile no</span>
                                </div>

                                <div className=''>
                                    <input type="checkbox" name="" id="" />
                                    <span className='px-1 text-[14px] font-[500]'>Gurranty card no</span>
                                </div>

                                <div className=''>
                                    <input type="checkbox" name="" id="" />
                                    <span className='px-1 text-[14px] font-[500]'>SB no</span>
                                </div>

                            </div>

                        </div>

                        {/* TABLE PART */}

                        <div className='pt-1'>
                            <Table
                                columns={columnss}
                                dataSource={dataSources}

                                pagination={{ pageSize: 2 }}

                                expandable={{
                                    expandedRowRender,
                                    defaultExpandedRowKeys: ['0'],
                                }}
                            //pagination={false}
                            >
                            </Table >
                        </div>





                    </div>






                </div>

                {/* Button Part */}

                {/* <div className='flex justify-center gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Edit</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E]  w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>DayBook</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Exit</button>

                </div> */}

            </div>
        </div>
    );
};

export default ComplainReceived2;