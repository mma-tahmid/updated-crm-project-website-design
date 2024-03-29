
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ComplainReceived from './Components/ComplainReceived/ComplainReceived'
import ComplainReceived2 from './Components/ComplainReceived2/ComplainReceived2'
import ComplainReceivedEdit from './Components/ComplainReceivedEdit/ComplainReceivedEdit'
import ComplainReceivedDayBook from './Components/ComplainReceivedDayBook/ComplainReceivedDayBook'
import SalesServiceJobAssign from './Components/SalesServiceJobAssign/SalesServiceJobAssign'
import PrintServiceAssignJob from './Components/PrintServiceAssignJob/PrintServiceAssignJob'
import PrintServiceAssignJobUpdate from './Components/PrintServiceAssignJobUpdate/PrintServiceAssignJobUpdate'
import AfterSaleSalesServiceComplainMenu from './UpdatedPages/AfterSaleSalesServiceComplainMenu'
import AfterSaleSalesServiceConfiguration from './UpdatedPages/AfterSaleSalesServiceConfiguration'
import AfterSalesConfiguration from './UpdatedPages/AfterSalesConfiguration'
import AfterSalesShowroomSbMenu from './UpdatedPages/AfterSalesShowroomSbMenu'
import AfterSalesInstallationJobBook from './UpdatedPages/AfterSalesInstallationJobBook'
import NewVersionAfterSalesInstallationJobBook from './UpdatedPages/NewVersionAfterSalesInstallationJobBook'
import SpreadOperator from './UpdatedPages/SpreadOperator'
import ServiceBill from './UpdatedPages/ServiceBill'
import SBDayBook from './UpdatedPages/SBDayBook'
import SbArReport from './UpdatedPages/SbArReport'
import ServiceBillReceived from './UpdatedPages/ServiceBillReceived'
import InstallationJobAssign from './UpdatedPages/InstallationJobAssign'
import EngineerAssignToInstallationJob from './UpdatedPages/EngineerAssignToInstallationJob'
import ItemIssuesOrder from './UpdatedPages/ItemIssuesOrder'
import InstallationStatusUpdate from './UpdatedPages/InstallationStatusUpdate'
import JobDividedFrom from './UpdatedPages/JobDividedFrom'
import InstallationReportMenu from './UpdatedPages/InstallationReportMenu'
import VendorOrTechnicianChangeOnAssignJob from './UpdatedPages/VendorOrTechnicianChangeOnAssignJob'
import CDCJobReOpen from './UpdatedPages/CDCJobReOpen'
import ServiceCardOnCustomerComplain from './UpdatedPages/ServiceCardOnCustomerComplain'
import SbReportPreview from './UpdatedPages/SbReportPreview'
import ProblemlistPreview from './UpdatedPages/ProblemlistPreview'
import SbReportDayBookReportPreview from './UpdatedPages/SbReportDayBookReportPreview'
import CrmForm1 from './UpdatedPages/CrmForm1'
import ComplainMasterReportPreview from './UpdatedPages/ComplainMasterReportPreview'
import ComplainMasterReport from './UpdatedPages/ComplainMasterReport'
import SrPages from './UpdatedPages/SrPages'
import PurchaseOrderPreview from './UpdatedPages/PurchaseOrderPreview'
import AfterSalesInstallationMenu from './UpdatedPages/AfterSalesInstallationMenu'
import ProblemCreate from './UpdatedPages/ProblemCreate'
import ServiceBillExistingInvoiceBill from './UpdatedPages/ServiceBillExistingInvoiceBill'
import MaterialsIsssueGatePass from './UpdatedPages/MaterialsIsssueGatePass'
import MaterialsRequisition from './UpdatedPages/MaterialsRequisition'
import PurchaseRequisition from './UpdatedPages/PurchaseRequisition'


function App() {


  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complain-received" element={<ComplainReceived />} />
          <Route path="/complain-received2" element={<ComplainReceived2 />} />
          <Route path="/complain-received-edit" element={<ComplainReceivedEdit />} />
          <Route path="/complain-received-day-book" element={<ComplainReceivedDayBook />} />
          <Route path="/sales-service-job-assign" element={<SalesServiceJobAssign />} />
          <Route path="/print-service-assign-job" element={<PrintServiceAssignJob />} />
          <Route path="/print-service-assign-job-update" element={<PrintServiceAssignJobUpdate />} />

          {/* Update */}
          <Route path="after-saleSales-service-complain-menu" element={<AfterSaleSalesServiceComplainMenu />} />
          <Route path="after-saleSales-service-configuration" element={<AfterSaleSalesServiceConfiguration />} />
          <Route path="after-sales-configuration" element={<AfterSalesConfiguration />} />
          <Route path="after-sales-show-room-sbMenu" element={<AfterSalesShowroomSbMenu />} />
          <Route path="after-sales-installation-job-book" element={<AfterSalesInstallationJobBook />} />
          <Route path="new-version-after-sales-installation-job-book" element={<NewVersionAfterSalesInstallationJobBook />} />
          <Route path="spread-operator" element={<SpreadOperator />} />
          <Route path="service-bill" element={<ServiceBill />} />
          <Route path="sb-day-book" element={<SBDayBook />} />
          <Route path="sb-ar-report" element={<SbArReport />} />
          <Route path="service-bill-received" element={<ServiceBillReceived />} />
          <Route path="installation-job-assign" element={<InstallationJobAssign />} />
          <Route path="engineer-assign-to-installation-job" element={<EngineerAssignToInstallationJob />} />
          <Route path="item-issues-order" element={<ItemIssuesOrder />} />
          <Route path="installation-status-update" element={<InstallationStatusUpdate />} />
          <Route path="job-divided-form" element={<JobDividedFrom />} />
          <Route path="installation-report-menu" element={<InstallationReportMenu />} />
          <Route path="vendorOr-technician-changeOn-assign-job" element={<VendorOrTechnicianChangeOnAssignJob />} />
          <Route path="cdc-job-re-open" element={<CDCJobReOpen />} />
          <Route path="service-card-on-customer-complain" element={<ServiceCardOnCustomerComplain />} />
          <Route path="sb-report-preview" element={<SbReportPreview />} />
          <Route path="problem-list-preview" element={<ProblemlistPreview />} />
          <Route path="sb-report-day-book-report-preview" element={<SbReportDayBookReportPreview />} />
          <Route path="crm-form-one" element={<CrmForm1 />} />
          <Route path="complain-master-report-preview" element={<ComplainMasterReportPreview />} />

          <Route path="complain-master-report" element={<ComplainMasterReport />} />
          <Route path="sr-pages" element={<SrPages />} />
          <Route path="purchase-order-preview" element={<PurchaseOrderPreview />} />
          <Route path="after-sales-installation-menu" element={<AfterSalesInstallationMenu />} />

          <Route path="problem-create" element={<ProblemCreate />} />
          <Route path="service-bill-existing-invoice-bill" element={<ServiceBillExistingInvoiceBill />} />
          <Route path="materials-issues-gate-pass" element={<MaterialsIsssueGatePass />} />
          <Route path="materials-requistion" element={<MaterialsRequisition />} />
          <Route path="purchase-requistion" element={<PurchaseRequisition />} />






        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
