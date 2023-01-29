import { useState } from 'react';
import Container from '../Container/Container';
import style from './SearchForm.module.css';
import { API_KEY, API_URL } from '../../const/const';

async function getWeather(city) {
    const api_url = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`)
    const data = await api_url.json()
    return data;
}

const SearchForm = (props) => {
    const [city, setCity] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();

        const weatherData = await getWeather(city);
        props.setWeatherData(weatherData);
    };

    return (
        <div className={style.searchform}>
            <Container>
                <form className={style.wrapper} onSubmit={submitForm}>
                    <input
                        className={style.search}
                        type="text"
                        placeholder="Enter the name of city"
                        value={city}
                        onChange={eve => setCity(eve.target.value)}
                    />
                    <button
                        type="submit"
                        className={style.button}
                    >Beging search</button>
                </form>
            </Container>
        </div>
    )
}

export default SearchForm