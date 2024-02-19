import { Table } from 'antd';
import React, { useState } from 'react';

const TableInstallationStatusUpdate = () => {

    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            jobNo: "101",
            jobDate: "20-01-2024",
            invoice: "12435",
            customerName: "Karim",
            vendorTechnician: "N/A",
            status: "pending",
            completeDate: "20-01-2024",
            note: "N/A",
            select: "N/A",
        },

        {
            key: "1",
            jobNo: "101",
            jobDate: "20-01-2024",
            invoice: "12435",
            customerName: "Rahim",
            vendorTechnician: "N/A",
            status: "pending",
            completeDate: "20-01-2024",
            note: "N/A",
            select: "N/A",
        },





    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Job No",
            dataIndex: "jobNo",

        },

        {
            key: "2",
            title: "Job Date",
            dataIndex: "jobDate",
            responsive: ['md'],


            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Invoice",
            dataIndex: "invoice",
            responsive: ['md'],

        },


        {
            key: "4",
            title: "Customer Name",
            dataIndex: "customerName",

        },

        {
            key: "5",
            title: "Vendor/Technician",
            dataIndex: "vendorTechnician",
            responsive: ['md'],
        },

        {
            key: "6",
            title: "Status",
            dataIndex: "status",
            responsive: ['md'],
        },

        {
            key: "7",
            title: "Complete Date",
            dataIndex: "completeDate",
            responsive: ['md'],
            // Requested by filed ta Medium Device a show korbe na
        },

        {
            key: "8",
            title: "Note",
            dataIndex: "note",
            responsive: ['md'],
        },

        {
            key: "8",
            title: "select",
            dataIndex: "select",
            responsive: ['md'],
        },

    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART



        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

            <div className="flex">
                <div className="w-[50%]">Job Date	</div>
                <div className="w-[48%]">{record.jobDate}</div>

            </div>

            <div className="flex">
                <div className="w-[50%]">Invoice</div>
                <div className="w-[50%]">{record.invoice}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]">Customer Name	</div>
                <div className="w-[50%]">{record.customerName}</div>
            </div>
            <div className="flex">
                <div className="w-[50%]"> Vendor/Technician	</div>
                <div className="w-[50%]">{record.vendorTechnician}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Status </div>
                <div className="w-[50%]">{record.status}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Complete Date	</div>
                <div className="w-[50%]">{record.completeDate}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> Note	</div>
                <div className="w-[50%]">{record.note}</div>
            </div>

            <div className="flex">
                <div className="w-[50%]"> select	</div>
                <div className="w-[50%]">{record.select}</div>
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

export default TableInstallationStatusUpdate;