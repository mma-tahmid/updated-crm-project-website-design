import React from 'react';

const MaterialsTable = () => {
    return (
        <>
            <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto   '>

                <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className='border-2 border-slate-500 w-[100px] py-2'>SL</th>

                            <th className='border-2 border-slate-500 w-[900px] py-2'>Materials Name</th>

                            <th className='border-2 border-slate-500 w-[200px] py-2'>Quantity </th>

                            <th className='border-2 border-slate-500 w-[200px] py-2'> Unit </th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>



                        <tr>

                            <td className='border-2 border-slate-500 w-[100px] py-2 '>1</td>

                            <td className='border-2 border-slate-500 w-[700px] py-2'>ssf</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>30</td>

                        </tr>

                        <tr>

                            <td className='border-2 border-slate-500 w-[100px] py-2 '>1</td>

                            <td className='border-2 border-slate-500 w-[700px] py-2'>ssf</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>30</td>

                        </tr>

                        <tr>

                            <td colSpan='2' className='border-2 border-slate-500 w-[100px] py-2 '>Total</td>

                            <td className='border-2 border-slate-500 w-[700px] py-2'>ssf</td>

                            {/* <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>30</td> */}

                        </tr>

                    </tbody>

                </table>

                <div className='mt-2 text-[15px] font-[700]' >Note: </div>



            </div>

        </>
    );
};

export default MaterialsTable;