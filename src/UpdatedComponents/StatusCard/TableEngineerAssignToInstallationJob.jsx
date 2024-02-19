import { Table } from 'antd';
import React, { useState } from 'react';

const TableEngineerAssignToInstallationJob = () => {


    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            sl: "1",
            date: "22/01/2023",
            invoice: "234",
            customerName: "Alex",
            showRoom: "N/A",
            thana: "Dhaka",
            area: "Dhanmondi",
            vendorOrTech: "N/A"
        },

        {
            key: "2",
            sl: "1",
            date: "22/01/2023",
            invoice: "234",
            customerName: "Alex",
            showRoom: "N/A",
            thana: "Dhaka",
            area: "Dhanmondi",
            vendorOrTech: "N/A"
        },



    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "SL",
            dataIndex: "sl",
            responsive: ['md'],
        },

        {
            key: "2",
            title: "Date",
            dataIndex: "date",


            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Invoice",
            dataIndex: "invoice",

        },


        {
            key: "4",
            title: "Customer Name",
            dataIndex: "customerName",
            responsive: ['md'],
        },

        {
            key: "5",
            title: "Show Room",
            dataIndex: "showRoom",
            responsive: ['md'],
        },

        {
            key: "6",
            title: "Thana",
            dataIndex: "thana",
            responsive: ['md'],
        },

        {
            key: "7",
            title: "Area",
            dataIndex: "area",
            responsive: ['md'],
            // Requested by filed ta Medium Device a show korbe na
        },

        {
            key: "8",
            title: "Vendor Or Tech",
            dataIndex: "vendorOrTech",
            responsive: ['md'],
        },

    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART



        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

            <div className="flex">
                <div className="w-[50%]">sL</div>
                <div className="w-[48%]">{record.sl}</div>

            </div>

            <div className="flex">
                <div className="w-[50%]">Customer Name:</div>
                <div className="w-[50%]">{record.customerName}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]">Show Room</div>
                <div className="w-[50%]">{record.showRoom}</div>
            </div>
            <div className="flex">
                <div className="w-[50%]"> Thana:</div>
                <div className="w-[50%]">{record.thana}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Area: </div>
                <div className="w-[50%]">{record.area}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Vendor Or Tech:</div>
                <div className="w-[50%]">{record.vendorOrTech}</div>
            </div>


        </div>

    );




    return (
        <>

            <div className='mt-4'>
                <Table
                    columns={columnss}
                    dataSource={dataSources}

                    pagination={{ pageSize: 2 }}

                    expandable={{
                        expandedRowRender,
                        defaultExpandedRowKeys: ['0'],
                    }}
                // pagination={false}
                >
                </Table >


            </div >



        </>
    );
};

export default TableEngineerAssignToInstallationJob;