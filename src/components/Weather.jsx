import { useState } from "react";
import { API_KEY, API_URL } from '../const/const.js';
import InfoWeather from "./Weather/InfoWeather.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import Spinner from "./Spinner/Spinner.jsx";

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

function Weather() {

    const [weatherData, setWeatherData] = useState();
    const [loading, setLoading] = useState(false)

    const search = async (city) => {
        setLoading(true);
        const response = await getWeather(city);
        setLoading(false);

        if (response.ok) {
            setWeatherData(response.data);
        } else {
            alert(response.message);
        }
    };

    return (<>
        <SearchForm search={search} />
        {loading ? <Spinner /> : null}
        <InfoWeather weatherData={weatherData} />
    </>
    )
};

export default Weather;