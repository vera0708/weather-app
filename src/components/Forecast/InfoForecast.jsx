import style from './InfoForecast.module.css';

const InfoForecast = (props) => {
    return (
        <div className={style.forecast_container}>
            <div className={style.wrapper}>
                {props.forecastData ?
                    <div className={style.info}>
                        <p className={style.dataformat}>{props.forecastData.location.localtime}</p><br />
                        <p className={style.locationformat}>{props.forecastData.location.name}, {props.forecastData.location.country}</p>
                        <div className={style.temperatureformat}>
                            <img className={style.picture} src={props.forecastData.current.condition.icon} alt="Weather icon" />
                            <p className={style.text}>{props.forecastData.current.temp_c}&#176;C</p>
                        </div>
                    </div>
                    : <div className={style.locationformat}> Enter the city and the forecast will be here</div>
                }
            </div>
        </div>
    )
}

export default InfoForecast;