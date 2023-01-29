import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as GitHubIcon } from '../../img/github.svg';
import { ReactComponent as TelegIcon } from '../../img/telegram.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me/Vera_07_08' target="_blank" rel="noreferrer">Vera Deeva</a></p>
                    <p>Coder: <a href='https://t.me/Vera_07_08' target="_blank" rel="noreferrer">Vera Deeva</a></p>
                    <p>© WeatherApp, 2023</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href='https://t.me/Vera_07_08' className={style.link}>
                            <TelegIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://github.com/vera0708' className={style.link}>
                            <GitHubIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
)

export default Footer