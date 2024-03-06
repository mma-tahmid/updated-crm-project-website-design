import React from 'react';

const Tablw2PurchaseOrder = () => {
    return (
        <>

            <div className='mx-1'>

                <table className='table-auto border-2 border-[#ED6C6C] border-collapse max-w-[100%] text-[12px] '>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className='border-2 border-[#ED6C6C] w-[800px] py-3'> PRICE SUMMERY</th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>



                        <tr>
                            <td className='border-2 border-[#ED6C6C] w-[800px] py-3 '>
                                <div className='flex'>
                                    <div className='w-[50%]'>Total Price </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="" className='border-2 border-[#ED6C6C] w-[800px] py-3'>
                                <div className='flex'>
                                    <div className='w-[50%]'>Discount </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="" className='border-2 border-[#ED6C6C] w-[800px] py-3'>
                                <div className='flex'>
                                    <div className='w-[50%]'>Add Discount   </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="" className='border-2 border-[#ED6C6C] w-[800px] py-3'>
                                <div className='flex'>
                                    <div className='w-[50%]'>Transport Charge </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="" className='border-2 border-[#ED6C6C] w-[800px] py-3'>
                                <div className='flex'>
                                    <div className='w-[50%]'>Other Charge  </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>

                            </td>
                        </tr>

                        <tr>
                            <td colSpan="" className='border-2 border-[#ED6C6C] w-[800px] py-3'>
                                <div className='flex'>
                                    <div className='w-[50%]'>Final Amount  </div>
                                    <div className='w-[8%]'> - </div>
                                    <div className='w-[42%]'> 1200 </div>
                                </div>

                            </td>
                        </tr>












                    </tbody>

                </table>



            </div>

        </>
    );
};

export default Tablw2PurchaseOrder;