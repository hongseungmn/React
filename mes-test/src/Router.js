import { BrowserRouter, Route, Routes } from "react-router-dom"
import DepartureDetail from "./pages/Departure/detail"
import Departure from "./pages/Departure";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Departure/>}/>
        <Route path="/departure/:flt" element={<DepartureDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;