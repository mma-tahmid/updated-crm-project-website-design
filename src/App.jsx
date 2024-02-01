
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ComplainReceived from './Components/ComplainReceived/ComplainReceived'


function App() {


  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complain-received" element={<ComplainReceived />} />



        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
