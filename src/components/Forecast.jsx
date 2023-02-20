import { useState } from "react";
import { API_KEY, API_FORECAST_URL } from '../const/const.js';
import InfoForecast from "./Forecast/InfoForecast.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import Spinner from "./Spinner/Spinner.jsx";

async function getForecast(city, days) {
    try {
        const response = await fetch(`${API_FORECAST_URL}?key=${API_KEY}&q=${city}&days=${days}`);

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
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState(3);

    const search = async (city) => {
        setLoading(true);

        const daysFromPromt = prompt('Enter the number of days', 3);
        // todo - add check if promt value is a number of number is greater than 3
        const daysNumber = Number(daysFromPromt);
        setDays(daysNumber);

        const response = await getForecast(city, daysNumber);
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
        <InfoForecast forecastData={forecastData} days={days} />
    </>
    )
};

export default Forecast;