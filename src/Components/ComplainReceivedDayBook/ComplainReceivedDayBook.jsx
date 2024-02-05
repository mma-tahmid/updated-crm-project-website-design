import React, { useState } from 'react';

import { DatePicker, Space, Table } from 'antd';
import { MdModeEdit } from "react-icons/md";

const ComplainReceivedDayBook = () => {

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Location",
            dataIndex: "location",
            responsive: ['md']
        },

        {
            key: "2",  // data index a je value dibo oi same value key hisabe hobe
            title: "Complain no",
            dataIndex: "complainNo",

        },

        {
            key: "3",  // data index a je value dibo oi same value key hisabe hobe
            title: "Complain Date",
            dataIndex: "complainDate",
            responsive: ['md']
        },

        {
            key: "4",  // data index a je value dibo oi same value key hisabe hobe
            title: "Complain Name",
            dataIndex: "complainName",
            responsive: ['md']
        },

        {
            key: "5",  // data index a je value dibo oi same value key hisabe hobe
            title: "Mobile no ",
            dataIndex: "mobileNo",
            responsive: ['md']
        },

        {
            key: "6",  // data index a je value dibo oi same value key hisabe hobe
            title: "Invoice No",
            dataIndex: "invoiceNo",

        },

        {
            key: "7",  // data index a je value dibo oi same value key hisabe hobe
            title: "SB No",
            dataIndex: "sbNo",
            responsive: ['md']
        },
    ]

    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            location: "Dhaka",
            complainNo: "45778",
            complainDate: "20-06-2023",
            complainName: "ABC",
            mobileNo: "01879278983",
            invoiceNo: "123446",
            sbNo: "12345"
        },

        {
            key: "2",
            location: "Sylhet",
            complainNo: "23778",
            complainDate: "20-06-2023",
            complainName: "ABCD",
            mobileNo: "01459278983",
            invoiceNo: "323446",
            sbNo: "20345"

        },
    ])


    // For Small Device
    const expandedRowRender = (record) => (

        // Design In THIS PART
        <div className="grid grid-cols-2 gap-x-32">
            <div> Location: </div>
            <div> {record.location}</div>
            <div> Complain Date </div>
            <div> {record.complainDate}</div>
            <div>Complain Name</div>
            <div>{record.complainName}</div>
            <div>Mobile no</div>
            <div>{record.mobileNo}</div>
            <div>SB No</div>
            <div>{record.sbNo}</div>
        </div>

    )





    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>COMPLAIN RECEIVED DAYBOOK</div>

                    <div className='flex justify-center gap-x-3'>

                        <div>
                            <Space direction="vertical">
                                <DatePicker className='border-[#EB5757]' placeholder='Start-Date' />
                            </Space>
                        </div>

                        <div>
                            <Space direction="vertical">
                                <DatePicker className='border-[#EB5757]' placeholder='End-Date' />
                            </Space>

                        </div>

                    </div>

                </div>


                {/* 2nd Part */}
                <div className=' shadow-md  mt-2 '>

                    <div className='py-6 px-10 bg-[#FDECEC] flex gap-x-3  '>

                        <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                        <div className='  text-[#E74A3B] text-decoration-3 '>Searching Operation
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className='pt-8 px-14 pb-10 grid lg:grid-cols-2 place-items-center sm:grid-cols-2 grid-cols-1 md:gap-y-8  gap-y-4'>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter complain no' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Complain No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[273px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Customer Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Name</div>
                        </div>

                    </div>
                </div>



                {/* 3RD PART */}
                <div className=' shadow-md  mt-2 '>

                    <div className='py-6 px-10 bg-[#FDECEC] flex gap-x-3  '>

                        <div className='  text-[#E74A3B] text-decoration-3 '>Complain Details </div>
                    </div>

                    {/* TABLE */}
                    <div className='pt-1  pb-10 '>

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


                    {/* Button */}

                </div>

                <div className='flex justify-center gap-x-4 mt-4 mb-4'>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Edit</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Exit</button>

                </div>

            </div>

        </>
    );
};

export default ComplainReceivedDayBook;