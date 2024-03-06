import React from 'react';
import TablePurchaseOrder from '../UpdatedComponents/StatusCard/TablePurchaseOrder';
import Tablw2PurchaseOrder from '../UpdatedComponents/StatusCard/Tablw2PurchaseOrder';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PurchaseOrderPreview = () => {

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <div>
                <div className='border border-[#EB5757] sm:mx-3 my-3' >

                    {/* 1st content */}
                    <div className='bg-[#FDECEC] my-1'>
                        <div className='py-2 text-[#E74A3B] pl-10'>ORDER DETAILS</div>
                    </div>

                    {/* 2nd */}

                    <div className='border border-[#EB5757] mx-1 my-2'>

                        <div className='flex sm:flex-row flex-col  gap-x-5 items-center  '>

                            <div className='w-[100%] sm:w-2/12 text-[15px] font-[400] leading-[2]'>

                                <div className='bg-[#EB5757] '>

                                    <div className='flex justify-center items-center 8 sm:py-14  md:py-14 lg:py-10'>
                                        <div className='text-[#FFFFFF] text-[16px] '>
                                            <div>Work No</div>
                                            <div className='text-center'> 213</div>
                                        </div>
                                    </div>
                                </div>




                            </div>

                            <div className='w-[100%] mt-3 sm:mt-0  sm:w-9/12  lg:text-[15px] font-[400]'>


                                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 md:gap-x-8 text-[12px] sm:text-[9px] md:text-[9px] lg:text-[12px] leading-6'>

                                    <div className='mx-1 sm:mx-0'>
                                        <div>
                                            <div className='flex'>
                                                <div className='w-[35%] sm:w-[25%] md:w-[50%] lg:w-[35%]'>Location</div>
                                                <div className='w-[8%] sm:w-[12%] md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[63%] md:w-[42%] lg:w-[49%]'> Esquire Customer Care Ltd.</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex '>
                                                <div className='w-[35%] sm:w-[30%] md:w-[50%] lg:w-[35%]'>Party Name</div>
                                                <div className='w-[8%] sm:w-[5%] md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[65%] md:w-[42%] lg:w-[49%]'> ELCO WIRES AND CABLES LTD.</div>

                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Party Address</div>
                                                <div className='w-[8%] sm:w-[16%] md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'>  Moghbazar,Dhaka</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Phone No</div>
                                                <div className='w-[8%] sm:w-[16%] md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'> 01710020100 </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Party Bill No</div>
                                                <div className='w-[8%] sm:w-[16%]  md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'> 9384493833</div>                                        </div>
                                        </div>

                                        <div>
                                            <div className='flex'>
                                                <div className='w-[35%] sm:w-[60%] md:w-[50%] lg:w-[35%]'>Party Delivery Challan No</div>
                                                <div className='w-[8%] sm:w-[8%] md:w-[8%] lg:w-[16%]'>-</div>
                                                <div className='w-[57%] sm:w-[32%] md:w-[42%] lg:w-[49%]'> 098837</div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* 2nd */}

                                    <div className='mx-1 sm:mx-0'>

                                        <div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[60%] md:w-[50%] lg:w-[35%]'>Purchase Invoice No</div>
                                                    <div className='w-[8%] sm:w-[8%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[32%] md:w-[34%] lg:w-[49%]'> 98357</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Date</div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>28-11-2023 </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>MRR No  </div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>578245 </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>PR No </div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>98572 </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Complain No </div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>98572</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>ST No  </div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'> 98572</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>


                    </div>

                    {/* 3rd */}

                    <div className='flex sm:flex-row flex-col'>
                        <div className='mx-1 my-2'>

                            <TablePurchaseOrder />

                        </div>

                        <div className='my-2'>
                            <Tablw2PurchaseOrder />
                        </div>
                    </div>

                    {/* 4th  */}

                    <div className='bg-[#FDECEC] my-1'>
                        <div className='py-2 text-[#E74A3B] pl-10'>Terms And Condition</div>
                    </div>

                    <div className='mt-4 px-8 leading-10 text-[14px]'>
                        <div> 1. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days</div>
                        <div>
                            2. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days
                        </div>

                        <div>
                            3. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days
                        </div>
                    </div>

                    <div className='flex justify-center my-3 '>
                        <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                    </div>
                </div>
            </div>


            {/* For Print Preview */}
            <div className='hidden'>
                <div ref={componentRef}>
                    {/* Your component content here */}
                    <div className='border border-[#EB5757] sm:mx-3 my-3' >

                        {/* 1st content */}
                        <div className='bg-[#FDECEC] my-1'>
                            <div className='py-2 text-[#E74A3B] pl-10'>ORDER DETAILS</div>
                        </div>

                        {/* 2nd */}

                        <div className='border border-[#EB5757] mx-1 my-2'>

                            <div className='flex sm:flex-row flex-col  gap-x-5 items-center  '>

                                <div className='w-[100%] sm:w-2/12 text-[15px] font-[400] leading-[2]'>

                                    <div className='bg-[#EB5757] '>

                                        <div className='flex justify-center items-center 8 sm:py-14  md:py-14 lg:py-10'>
                                            <div className='text-[#FFFFFF] text-[16px] '>
                                                <div>Work No</div>
                                                <div className='text-center'> 213</div>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                                <div className='w-[100%] mt-3 sm:mt-0  sm:w-9/12  lg:text-[15px] font-[400]'>


                                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 md:gap-x-8 text-[12px] sm:text-[9px] md:text-[9px] lg:text-[12px] leading-6'>

                                        <div className='mx-1 sm:mx-0'>
                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[25%] md:w-[50%] lg:w-[35%]'>Location</div>
                                                    <div className='w-[8%] sm:w-[12%] md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[63%] md:w-[42%] lg:w-[49%]'> Esquire Customer Care Ltd.</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex '>
                                                    <div className='w-[35%] sm:w-[30%] md:w-[50%] lg:w-[35%]'>Party Name</div>
                                                    <div className='w-[8%] sm:w-[5%] md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[65%] md:w-[42%] lg:w-[49%]'> ELCO WIRES AND CABLES LTD.</div>

                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Party Address</div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'>  Moghbazar,Dhaka</div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Phone No</div>
                                                    <div className='w-[8%] sm:w-[16%] md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'> 01710020100 </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Party Bill No</div>
                                                    <div className='w-[8%] sm:w-[16%]  md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[49%] md:w-[42%] lg:w-[49%]'> 9384493833</div>                                        </div>
                                            </div>

                                            <div>
                                                <div className='flex'>
                                                    <div className='w-[35%] sm:w-[60%] md:w-[50%] lg:w-[35%]'>Party Delivery Challan No</div>
                                                    <div className='w-[8%] sm:w-[8%] md:w-[8%] lg:w-[16%]'>-</div>
                                                    <div className='w-[57%] sm:w-[32%] md:w-[42%] lg:w-[49%]'> 098837</div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* 2nd */}

                                        <div className='mx-1 sm:mx-0'>

                                            <div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[60%] md:w-[50%] lg:w-[35%]'>Purchase Invoice No</div>
                                                        <div className='w-[8%] sm:w-[8%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[32%] md:w-[34%] lg:w-[49%]'> 98357</div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Date</div>
                                                        <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>28-11-2023 </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>MRR No  </div>
                                                        <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>578245 </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>PR No </div>
                                                        <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>98572 </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>Complain No </div>
                                                        <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'>98572</div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex'>
                                                        <div className='w-[35%] sm:w-[35%] md:w-[50%] lg:w-[35%]'>ST No  </div>
                                                        <div className='w-[8%] sm:w-[16%] md:w-[16%] lg:w-[16%]'>-</div>
                                                        <div className='w-[57%] sm:w-[49%] md:w-[34%] lg:w-[49%]'> 98572</div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>


                        </div>

                        {/* 3rd */}

                        <div className='flex sm:flex-row flex-col'>
                            <div className='mx-1 my-2'>

                                <TablePurchaseOrder />

                            </div>

                            <div className='my-2'>
                                <Tablw2PurchaseOrder />
                            </div>
                        </div>

                        {/* 4th  */}

                        <div className='bg-[#FDECEC] my-1'>
                            <div className='py-2 text-[#E74A3B] pl-10'>Terms And Condition</div>
                        </div>

                        <div className='mt-4 px-8 leading-10 text-[14px]'>
                            <div> 1. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days</div>
                            <div>
                                2. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days
                            </div>

                            <div>
                                3. Delivery within 30-40 days of issueing PO,Considering Ready stock and import lead days
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </>
    );
};

export default PurchaseOrderPreview;