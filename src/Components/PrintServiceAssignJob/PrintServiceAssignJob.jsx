import { Table } from 'antd';
import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { MdModeEdit } from 'react-icons/md';

const PrintServiceAssignJob = () => {





    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Complain No",
            dataIndex: "complainNo",

        },

        {
            key: "2",  // data index a je value dibo oi same value key hisabe hobe
            title: "Complain Date",
            dataIndex: "complainDate",
            responsive: ['md']
        },

        {
            key: "3",  // data index a je value dibo oi same value key hisabe hobe
            title: "Location Name",
            dataIndex: "locationName",
            responsive: ['md']
        },

        {
            key: "4",  // data index a je value dibo oi same value key hisabe hobe
            title: "Assign No",
            dataIndex: "assignNo",
            responsive: ['md']
        },

        {
            key: "5",  // data index a je value dibo oi same value key hisabe hobe
            title: "Assign Date",
            dataIndex: "assignDate",
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
            complainNo: 2344,
            complainDate: "20-06-2023",
            locationName: "Dhaka",
            assignNo: 2234,
            assignDate: "20-06-2023",
            invoiceNo: "327482",
            sbNo: "2348"
        },

        {
            key: "2",
            complainNo: 234456,
            complainDate: "21-06-2023",
            locationName: "Dhaka",
            assignNo: 2334,
            assignDate: "21-06-2023",
            invoiceNo: "12327482",
            sbNo: "2348"
        },
    ])


    // For Small Device
    const expandedRowRender = (record) => (

        // Design In THIS PART
        <div className="grid grid-cols-2 gap-x-32">
            <div> Complain No: </div>
            <div> {record.complainNo}</div>
            <div> Complain Date </div>
            <div> {record.complainDate}</div>
            <div>Location Name</div>
            <div>{record.locationName}</div>
            <div>Assign No</div>
            <div>{record.assignNo}</div>

            <div>Assign Date</div>
            <div>{record.assignDate}</div>

            <div>Invoice No</div>
            <div>{record.invoiceNo}</div>

            <div>SB No</div>
            <div>{record.sbNo}</div>
        </div>

    )



    return (
        <>

            <div className='conatiner mx-3 mt-2'>

                <div className='px-6 py-6 shadow-md sm:flex lg:justify-between sm:justify-between'>

                    <div className='text-[#E74A3B] sm:text-left text-center text-decoration-1'>Print Service Job</div>

                    <div className='flex justify-center gap-x-3'>
                        {/* No Content */}

                    </div>

                </div>


                {/* 2nd Part */}
                <div className=' shadow-md  mt-2 '>

                    <div className='bg-[#FDECEC] sm:flex sm:justify-between'>
                        <div className='py-6 px-10  flex gap-x-3  '>

                            <div className='shadow-lg text-[#E74A3B]  border border-[#E74A3B] rounded-md ]   icon-design-7 w-[22px]'> <MdModeEdit className='mt-[3px] mx-[2px]' /></div>

                            <div className='  text-[#E74A3B] text-decoration-3 '>Searching Operation
                            </div>
                        </div>
                        {/* Search Filed */}
                        <div className='sm:pt-5 sm:px-9 pb-4 mx-9 '>
                            <div className="relative">
                                <input className=" pl-3 pr-10 w-[177px]  h-[34px] rounded-[5px] bg-[#FFF] border-[1px] border-[#D9D9D9]  focus:outline-none focus:border-[#E74A3B] border-solid" placeholder="Search here" type="search" />
                                <div className="absolute top-[2px] left-[150px]  ">
                                    <IoSearchSharp className="text-[#FFF]  bg-[#EB5757] rounded-[3px] w-[25px] h-[30px] " />
                                </div>
                            </div>
                        </div>
                    </div>







                    {/* Input Field */}
                    <div className='pt-8 px-14 pb-10 grid lg:grid-cols-4 place-items-center md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-y-8 md:gap-x-8 lg:gap-x-20  gap-y-4'>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Enter District' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > District</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Customer Name' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Customer Name</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Vendor/technician' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Vendor/technician</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Thana' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Thana</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Area' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Area</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='SB No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > SB No</div>
                        </div>

                        <div className='relative'>
                            <input className='border rounded-md border-[#323232] focus:outline-none focus:border-[#E74A3B] w-[273px] sm:w-[230px] md:w-[210px] lg:w-[230px] h-[40px] pl-7 placeholder:text-[11px] ' type="text" placeholder='Invoice No' name="" id="" />
                            <div className='absolute left-[31px] top-[-7px] bg-[#FFF] px-3 form-label-title text-[#E74A3B]' > Invoice No</div>
                        </div>

                    </div>
                </div>



                {/* 3RD PART */}
                <div className=' shadow-md  mt-2 '>

                    <div className='py-6 px-10 bg-[#FDECEC] flex gap-x-3  '>

                        <div className='  text-[#E74A3B] text-decoration-3 '>Not Assign Job List</div>
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

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Preview</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Print</button>

                    <button className='text-[#FFF] bg-[#FA6669] w-[117px] h-[40px] rounded-[5px]'>Clear</button>

                    <button className='text-[#F9333E] border-2 border-[#F9333E] w-[117px] h-[40px] rounded-[5px]'>Close</button>

                </div>

            </div>

        </>
    );
};

export default PrintServiceAssignJob;