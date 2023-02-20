import style from './InfoForecast.module.css';

const InfoForecast = (props) => {
    const days = Array.from(Array(props.days).keys())

    return (
        <div className={style.forecast_container}>
            <div className={style.wrapper}>
                {props.forecastData ?

                    <div className={style.info}>
                        <p className={style.locationformat}>{props.forecastData.location.name}, {props.forecastData.location.country}</p><br />
                        {days.map((day) => (
                            <div key={day}>
                                <p className={style.astroformat}><span className={style.dataformat}>{props.forecastData.forecast.forecastday[day].date}  :  </span> sunrise:{props.forecastData.forecast.forecastday[day].astro.sunrise}, sunset:{props.forecastData.forecast.forecastday[day].astro.sunset}, min temp: {props.forecastData.forecast.forecastday[day].day.mintemp_c}&#176;C, max temp:{props.forecastData.forecast.forecastday[day].day.maxtemp_c}&#176;C. </p><br />
                                <div className={style.temperatureformat}>
                                    <img className={style.picture} src={props.forecastData.forecast.forecastday[day].day.condition.icon} alt="forecast icon" />
                                    <p className={style.astroformat}>{props.forecastData.forecast.forecastday[day].day.condition.text}.    Humidity:{props.forecastData.forecast.forecastday[day].day.avghumidity}%, chance of rain: {props.forecastData.forecast.forecastday[day].day.daily_chance_of_rain}%, chance of snow: {props.forecastData.forecast.forecastday[day].day.daily_chance_of_snow}%.</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    : <div className={style.waitingformat}> Enter the city and number of days (up to 3) <br /> and you see the forecast here</div>
                }
            </div>
        </div>
    )
}

export default InfoForecast;