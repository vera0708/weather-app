import style from './Info.module.css';
// import exampleicon from '../../img/exampleicon.svg';

const Info = (props) => {

    /* current: cloud: 75
        temp_c: 10
        temp_f: 50
        feelslike_c: 7.9
        feelslike_f: 46.2
        humidity: 54
        condition:  code: 1003
                  icon: "//cdn.weatherapi.com/weather/64x64/night/116.png"
                  text: "Partly cloudy"
        location: country: "United Kingdom"
                 localtime: "2023-01-31 17:57"
                name: "London"
                region: "City of London, Greater London"
                tz_id: "Europe/London"
       */

    return (
        <div className={style.info_container}>
            <div div className={style.wrapper}>
                {props.weatherData ?
                    <div className={style.info}>
                        <p className={style.dataformat}>{props.weatherData.location.localtime}</p><br />
                        <p className={style.locationformat}>{props.weatherData.location.name}, {props.weatherData.location.country}</p>
                        <div className={style.temperatureformat}>
                            <img className={style.picture} src={props.weatherData.current.condition.icon} alt="Weather icon" />
                            <p className={style.text}>{props.weatherData.current.temp_c}&#176;C</p>
                        </div>
                        <p className={style.dataformat}>{props.weatherData.current.condition.text}.    UV: {props.weatherData.current.uv}</p><br />
                        <p className={style.dataformat}>Humidity: {props.weatherData.current.humidity}. Feels like {props.weatherData.current.feelslike_c}&#176;</p><br />
                    </div>
                    : <div className={style.dataformat}>Enter the city and the weather will be here</div>
                }
            </div>
        </div>
    )
}

export default Info