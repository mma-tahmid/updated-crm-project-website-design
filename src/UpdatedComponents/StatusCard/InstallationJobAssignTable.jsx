import { Table } from 'antd';
import React, { useState } from 'react';

const InstallationJobAssignTable = () => {

    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            sl: "1",
            date: "22/01/2023",
            invoice: "234",
            itemType: "N/A",
            customerName: "Alex",
            address: "Dhaka",
            district: "Dhaka",
            thana: "Dhaka",
            postalCode: "777",
            showRoom: "N/A"
        },

        {
            key: "2",
            sl: "2",
            date: "22/01/2023",
            invoice: "234",
            itemType: "N/A",
            customerName: "Alex",
            address: "Dhaka",
            district: "Dhaka",
            thana: "Dhaka",
            postalCode: "777",
            showRoom: "N/A"
        },


    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "SL",
            dataIndex: "sl",
        },

        {
            key: "2",
            title: "Date",
            dataIndex: "date",
            responsive: ['md'],

            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Invoice",
            dataIndex: "invoice",

        },

        {
            key: "4",
            title: "item type",
            dataIndex: "itemType",
            responsive: ['md'],
        },

        {
            key: "5",
            title: "Customer Name",
            dataIndex: "customerName",
            responsive: ['md'],
        },

        {
            key: "6",
            title: "Address",
            dataIndex: "address",
            responsive: ['md'],
            // Requested by filed ta Medium Device a show korbe na
        },

        {
            key: "7",
            title: "District",
            dataIndex: "district",
            responsive: ['md'],
        },

        {
            key: "8",
            title: "Thana",
            dataIndex: "thana",
            responsive: ['md'],
        },

        {
            key: "9",
            title: "Postal Code",
            dataIndex: "postalCode",
            responsive: ['md'],
        },

        {
            key: "10",
            title: "Show Room",
            dataIndex: "showRoom",
            responsive: ['md'],
        },
    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART



        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

            <div className="flex">
                <div className="w-[50%]">Date:</div>
                <div className="w-[48%]">{record.date}</div>

            </div>

            <div className="flex">
                <div className="w-[50%]">item type	:</div>
                <div className="w-[50%]">{record.itemType}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]">Customer Name	</div>
                <div className="w-[50%]">{record.customerName}</div>
            </div>
            <div className="flex">
                <div className="w-[50%]"> Address:</div>
                <div className="w-[50%]">{record.address}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> District:</div>
                <div className="w-[50%]">{record.district}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Thana:</div>
                <div className="w-[50%]">{record.thana}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Postal Code:</div>
                <div className="w-[50%]">{record.postalCode}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Show Room:</div>
                <div className="w-[50%]">{record.showRoom}</div>
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

export default InstallationJobAssignTable;