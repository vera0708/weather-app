import Container from '../Container/Container';
import style from './Header.module.css';
import { ReactComponent as WeatherIcon } from '../../img/weathericon.svg';
import { ReactComponent as ForecastIcon } from '../../img/forecasticon.svg';


const Header = () => (
    <header className={style.header}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.blockicons}>
                    <div className={style.anyblock}>
                        <WeatherIcon />
                        <p className={style.texticon}>current weather</p>
                    </div>
                    <div className={style.anyblock}>
                        <ForecastIcon />
                        <p className={style.texticon}>daily forecast</p>
                    </div>
                </div>
                <div>
                    <h1>Weather forecasts and nowcasts in elegant way</h1>
                </div>
            </div>
        </Container>
    </header>
)

export default Header