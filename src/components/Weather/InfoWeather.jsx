import style from './InfoWeather.module.css';

const InfoWeather = (props) => {

    return (
        <div className={style.info_container}>
            <div className={style.wrapper}>
                {props.weatherData ?
                    <div className={style.info}>
                        <p className={style.dataformat}>{props.weatherData.location.localtime}</p><br />
                        <p className={style.locationformat}>{props.weatherData.location.name}, {props.weatherData.location.country}</p>
                        <div className={style.temperatureformat}>
                            <img className={style.picture} src={props.weatherData.current.condition.icon} alt="Weather icon" />
                            <p className={style.text}>{props.weatherData.current.temp_c}&#176;C</p>
                        </div>
                        <p className={style.dataformat}>{props.weatherData.current.condition.text}.    UV: {props.weatherData.current.uv}</p><br />
                        <p className={style.dataformat}>Wind direction: {props.weatherData.current.wind_dir}.    Wind speed, km/h: {props.weatherData.current.wind_kph}</p><br />
                        <p className={style.dataformat}>Humidity: {props.weatherData.current.humidity}. Feels like {props.weatherData.current.feelslike_c}&#176;</p><br />
                    </div>
                    : <div className={style.dataformat}>Enter the city and the weather will be here</div>
                }
            </div>
        </div>
    )
}

export default InfoWeather