
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

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
