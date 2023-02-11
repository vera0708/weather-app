import { Route, Routes } from "react-router-dom";
import { NotfoundPage } from "./components/NotfoundPage/NotfoundPage.jsx";


import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Weather from "./components/Weather.jsx";
import Forecast from "./components/Forecast.jsx";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = () => {

  return (
    <div style={wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/forecast' element={<Forecast />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
