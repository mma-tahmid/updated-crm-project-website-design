import React from 'react';

const TablePurchaseOrder = () => {
    return (
        <>
            {/* className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto  ' */}
            <div className='overflow-x-auto overflow-y-auto'>

                <table className='table-auto border-2 border-[#ED6C6C] border-collapse max-w-[100%] text-[9px] sm:text-[12px]'>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>Order no</th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>Specification</th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>Quantity </th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'> PRICE (BDT)  </th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'> TOTAL (BDT) </th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>DISCOUNT (BDT)  </th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>FINAL  (BDT) </th>

                            <th className='border-2 border-[#ED6C6C] w-[400px] py-3'>Note </th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>



                        <tr>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3 '>#FCEAB7</td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>#FCEAB7</td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>1 pis</td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>18425 </td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>18425</td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>0 </td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>18425</td>

                            <td className='border-2 border-[#ED6C6C] w-[400px] py-3'>#####</td>

                        </tr>

                        <tr>
                            <td colSpan="6" className='border-2 border-[#ED6C6C] w-[400px] py-3'>TOTAL AMOUNT</td>
                            <td colSpan="2" className='border-2 border-[#ED6C6C] w-[400px] py-3'>18425</td>
                        </tr>

                        <tr>
                            <td colSpan="8" className='border-2 border-[#ED6C6C] w-[400px] py-3'>AMOUNT IN WORD     -     eighteen thousand four hundred twenty five taka only</td>
                        </tr>












                    </tbody>

                </table>



            </div>
        </>
    );
};

export default TablePurchaseOrder;