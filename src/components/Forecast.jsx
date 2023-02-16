import { useState } from "react";
import { API_KEY, API_FORECAST_URL } from '../const/const.js';
import InfoForecast from "./Forecast/InfoForecast.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import Spinner from "./Spinner/Spinner.jsx";

async function getForecast(city, days) {

    days = prompt('Enter the number of days', 3);
    try {
        const response = await fetch(`${API_FORECAST_URL}?key=${API_KEY}&q=${city}&days=5`);

        if (response.status >= 500) {
            return { ok: false, message: 'Network issue' };
        } else if (response.status >= 400) {
            return { ok: false, message: 'City is incorrect' };
        }

        const forecastData = await response.json();

        return { ok: true, data: forecastData };
    } catch (e) {
        console.error(e);

        return { ok: false, message: 'Something went wrong. Try again later' };
    }
}

function Forecast() {
    const [forecastData, setForecastData] = useState();
    const [loading, setLoading] = useState(false)

    const search = async (city) => {
        setLoading(true);
        const response = await getForecast(city);
        setLoading(false);

        if (response.ok) {
            setForecastData(response.data);
        } else {
            alert(response.message);
        }
    };

    return (<>
        <SearchForm search={search} />
        {loading ? <Spinner /> : null}
        <InfoForecast forecastData={forecastData} />
    </>
    )
};

export default Forecast;