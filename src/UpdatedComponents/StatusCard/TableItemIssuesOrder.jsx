import { Table } from 'antd';
import React, { useState } from 'react';

const TableItemIssuesOrder = () => {

    const [dataSources, setDataSource] = useState([
        {
            stockName: "1/2 Connection nut",
            quantity: "2",
            unit: "Pcs",
        },

        {
            stockName: "1/2 Connection nut",
            quantity: "2",
            unit: "Pcs",
        },


    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Stock Name",
            dataIndex: "stockName",
            
        },

        {
            key: "2",
            title: "Quantity",
            dataIndex: "quantity",


            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Unit",
            dataIndex: "unit",

        },

    ]

    // const expandedRowRender = (record) => (
    //     // Design In THIS PART



    //     <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

    //         <div className="flex">
    //             <div className="w-[50%]">sL</div>
    //             <div className="w-[48%]">{record.sl}</div>

    //         </div>

    //         <div className="flex">
    //             <div className="w-[50%]">Customer Name:</div>
    //             <div className="w-[50%]">{record.customerName}</div>
    //         </div>

    //         <div className="flex">
    //             <div className="w-[50%]">Show Room</div>
    //             <div className="w-[50%]">{record.showRoom}</div>
    //         </div>
    //         <div className="flex">
    //             <div className="w-[50%]"> Thana:</div>
    //             <div className="w-[50%]">{record.thana}</div>
    //         </div>

    //         <div className="flex">
    //             <div className="w-[50%]"> Area: </div>
    //             <div className="w-[50%]">{record.area}</div>
    //         </div>

    //         <div className="flex">
    //             <div className="w-[50%]"> Vendor Or Tech:</div>
    //             <div className="w-[50%]">{record.vendorOrTech}</div>
    //         </div>


    //     </div>

    // );




    return (
        <>

            <div className='mt-4'>
                <Table
                    columns={columnss}
                    dataSource={dataSources}

                    pagination={{ pageSize: 2 }}

                // expandable={{
                //     expandedRowRender,
                //     defaultExpandedRowKeys: ['0'],
                // }}
                // pagination={false}
                >
                </Table >


            </div >

        </>
    );
};

export default TableItemIssuesOrder;