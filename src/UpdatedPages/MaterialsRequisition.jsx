import React from 'react';
import HeaderReq from '../UpdatedComponents/MaterialsRequisition/HeaderReq';
import CustomerInformation from '../UpdatedComponents/MaterialsRequisition/CustomerInformation';
import MaterialsRequisitionTable from '../UpdatedComponents/MaterialsRequisition/MaterialsRequisitionTable';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


const MaterialsRequisition = () => {


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (

        <>

            <div>
                <HeaderReq />

                <CustomerInformation />

                <MaterialsRequisitionTable />

                <div className='flex justify-center mt-3 '>
                    <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                </div>
                
            </div>

            {/* For Print Preview */}

            <div className='hidden'>
                <div ref={componentRef}>
                    <HeaderReq />

                    <CustomerInformation />

                    <MaterialsRequisitionTable />

                </div>

            </div>



        </>
    );
};

export default MaterialsRequisition;