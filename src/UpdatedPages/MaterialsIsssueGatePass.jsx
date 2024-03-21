import React from 'react';
import Header from '../UpdatedComponents/MaterialsIssueGatePass/Header';
import Title from '../UpdatedComponents/MaterialsIssueGatePass/Title';
import MaterialsTable from '../UpdatedComponents/MaterialsIssueGatePass/MaterialsTable';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
const MaterialsIsssueGatePass = () => {


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <>
            <div>
                <Header />

                <Title />

                <MaterialsTable />

                <div className='flex justify-center mt-3 '>
                    <button className='bg-[#FA6669] text-[#FFF] px-6 py-2 rounded-md' onClick={handlePrint}>Print</button>
                </div>
            </div>


            {/* For Print Preview */}

            <div className='hidden'>
                <div ref={componentRef}>

                    <Header />

                    <Title />

                    <MaterialsTable />

                </div>
            </div>
        </>
    );
};

export default MaterialsIsssueGatePass;