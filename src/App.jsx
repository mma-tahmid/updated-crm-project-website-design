
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ComplainReceived from './Components/ComplainReceived/ComplainReceived'
import ComplainReceived2 from './Components/ComplainReceived2/ComplainReceived2'
import ComplainReceivedEdit from './Components/ComplainReceivedEdit/ComplainReceivedEdit'
import ComplainReceivedDayBook from './Components/ComplainReceivedDayBook/ComplainReceivedDayBook'


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

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
