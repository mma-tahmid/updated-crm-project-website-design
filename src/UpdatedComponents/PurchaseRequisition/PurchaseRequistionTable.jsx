import React from 'react';

const PurchaseRequistionTable = () => {


    return (

        <>


            <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto   '>

                <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>

                    <thead>

                        <tr>
                            <th colSpan='12' className='text-[24px] font-[700]'> Purchase Requistion [PR] </th>

                        </tr>

                        <tr className='border-2 border-[black]'>
                            <th rowSpan='1' colSpan='12'>

                                <div className='flex justify-around py-2'>
                                    <div> Required Date:  </div>
                                    <div> PR Date: </div>

                                    <div>PR No: 21 </div>
                                </div>
                            </th>
                        </tr>

                        <tr>

                            <th rowSpan='3' colSpan='' className='border-2 border-slate-500 w-[200px] py-2 '>SI No</th>

                            <th rowSpan='1' colSpan='6' className='border-2 border-slate-500 w-[200px] py-2'> Required For </th>

                            <th rowSpan='1' colSpan='5' className='border-2 border-slate-500 w-[200px] py-2'> Required Item </th>
                        </tr>




                        <tr>
                            <th rowSpan='1' colSpan='5' className='border-2 border-slate-500 w-[200px] py-2'> Invoice Details </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> In warnt. Period </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> items Name </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Part No Or Model No </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Country of origin </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Qty Pcs/set </th>

                            <th rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Estimated Cost </th>

                        </tr>


                        <tr>
                            <th rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> customers </th>

                            <th rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> No  </th>

                            <th rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Date  </th>

                            <th rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Model No  </th>

                            <th rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> Qty  </th>

                        </tr>

                    </thead>

                    <tbody className='text-center'>



                        {/* Content Part */}

                        <tr>

                            <td rowSpan='3' colSpan='' className='border-2 border-slate-500 w-[200px] py-2 '>1o</td>

                            <td rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 11 </td>

                            <td rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 1  </td>

                            <td rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 1  </td>

                            <td rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 1 1  </td>

                            <td rowSpan='' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 1  </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 2 </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 12 </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 13 </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 123 </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 1234 </td>

                            <td rowSpan='2' colSpan='1' className='border-2 border-slate-500 w-[200px] py-2'> 255 </td>

                        </tr>

                    </tbody>

                </table>


            </div>










        </>
    );
};

export default PurchaseRequistionTable;