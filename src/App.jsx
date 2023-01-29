import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import Info from './components/Info/Info';
import { useState } from "react";

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = () => {
  const [weatherData, setWeatherData] = useState();

  return (
    <div style={wrapper}>
      <Header />
      <SearchForm setWeatherData={setWeatherData} />
      <Info weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
