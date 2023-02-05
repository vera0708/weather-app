import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import Info from './components/Info/Info';
import { useState } from "react";
import { API_KEY, API_URL } from './const/const';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

async function getWeather(city) {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);

    if (response.status >= 500) {
      return { ok: false, message: 'Network issue' };
    } else if (response.status >= 400) {
      return { ok: false, message: 'City is incorrect' };
    }

    const weatherData = await response.json();

    return { ok: true, data: weatherData };
  } catch (e) {
    console.error(e);

    return { ok: false, message: 'Something went wrong. Try again later' };
  }
}

const App = () => {
  const [weatherData, setWeatherData] = useState();

  const search = async (city) => {
    const response = await getWeather(city);

    if (response.ok) {
      setWeatherData(response.data);
    } else {
      alert(response.message);
    }
  };

  return (
    <div style={wrapper}>
      <Header />
      <SearchForm search={search} />
      <Info weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
