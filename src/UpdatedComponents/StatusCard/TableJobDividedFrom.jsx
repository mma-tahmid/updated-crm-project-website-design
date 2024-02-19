import { Table } from 'antd';
import React, { useState } from 'react';

const TableJobDividedFrom = () => {

    const [dataSources, setDataSource] = useState([
        {
            key: "1",
            stockItemName: "N/A",
            productType: "N/A",
            remainingQty: "N/A",
            quantity: "N/A",
        },

        {
            key: "2",
            stockItemName: "N/A",
            productType: "..",
            remainingQty: "10",
            quantity: "2",
        }



    ])

    const columnss = [
        {
            key: "1",  // data index a je value dibo oi same value key hisabe hobe
            title: "Stock Item Name",
            dataIndex: "stockItemName",

        },

        {
            key: "2",
            title: "Product Type",
            dataIndex: "productType",


            // medium device thake start kore large device a ai content gulo show korbe na.medium device ar niche show kore na. 
        },

        {
            key: "3",
            title: "Remaining Qty",
            dataIndex: "remainingQty",
            responsive: ['md'],

        },


        {
            key: "4",
            title: "Quantity",
            dataIndex: "quantity",
            responsive: ['md'],
        },


    ]

    const expandedRowRender = (record) => (
        // Design In THIS PART



        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2">

            <div className="flex">
                <div className="w-[50%]">Remaining Qty	</div>
                <div className="w-[48%]">{record.remainingQty}</div>

            </div>

            <div className="flex">
                <div className="w-[50%]">Quantity </div>
                <div className="w-[48%]">{record.quantity}</div>

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

export default TableJobDividedFrom;