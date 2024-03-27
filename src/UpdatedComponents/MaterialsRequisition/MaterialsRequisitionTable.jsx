import React from 'react';

const MaterialsRequisitionTable = () => {
    return (
        <>


            <div className='px-4 sm:px-14 mt-7 sm:text-[10px] lg:text-[15px] overflow-x-auto  '>

                <table className='table-auto border-2 border-slate-500 border-collapse max-w-[100%]'>

                    <thead>

                        <tr className='bg-[#EEEEEE]'>

                            <th className='border-2 border-slate-500 w-[700px] py-2'>Number Of Parts Required </th>

                            <th className='border-2 border-slate-500 w-[200px] py-2'>Part No</th>

                            <th className='border-2 border-slate-500 w-[200px] py-2'>Quantity </th>

                            <th className='border-2 border-slate-500 w-[300px] py-2'> Estimated Cost (TK) </th>

                        </tr>

                    </thead>



                    <tbody className='text-center'>



                        <tr>

                            <td className='border-2 border-slate-500 w-[700px] py-2 '>1</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>ssf</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[300px] py-2'>30</td>

                        </tr>

                        <tr>

                            <td className='border-2 border-slate-500 w-[700px] py-2 '>1</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>ssf</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[300px] py-2'>30</td>

                        </tr>

                        <tr>

                            <td className='border-2 border-slate-500 w-[700px] py-2 '>1</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>ssf</td>

                            <td className='border-2 border-slate-500 w-[200px] py-2'>3</td>

                            <td className='border-2 border-slate-500 w-[300px] py-2'>30</td>

                        </tr>

                        <tr>
                            <td colSpan='4'>

                                {/* <div className='mt-16 flex flex-row justify-between px-2 mb-3'>
                                    <div className='overline'>Technician ID #  </div>
                                    <div className='overline'> SuperVisor ID #  </div>
                                    <div className='overline'> Recommened by ID # </div>
                                    <div className='overline'> Authenticated By ID #  </div>
                                    <div className='overline'> Issued By ID #  </div>

                                </div> */}

                                <div className='mt-16 grid gap-y-8 grid-cols-2 sm:grid-cols-3 sm:gap-y-8 md:grid-cols-5 sm:px-2 mb-3'>
                                    <div className='overline font-[700] '>Technician ID #  </div>
                                    <div className='overline font-[700]'> SuperVisor ID #  </div>
                                    <div className='overline font-[700]'> Recommened by ID # </div>
                                    <div className='overline font-[700]'> Authenticated By ID #  </div>
                                    <div className='overline font-[700]'> Issued By ID #  </div>
                                </div>

                            </td>
                        </tr>


                    </tbody>

                </table>



            </div>

        </>
    );
};

export default MaterialsRequisitionTable;