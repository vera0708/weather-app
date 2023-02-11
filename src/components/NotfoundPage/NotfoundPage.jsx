import { Link } from "react-router-dom";
import style from './NotfoundPage.module.css';


const NotfoundPage = () => {
    return (
        <div div className={style.notfound}>
            This page does not exist. Go to <Link to='/'><span> weather page</span></Link>
        </div>
    )
}
export { NotfoundPage }