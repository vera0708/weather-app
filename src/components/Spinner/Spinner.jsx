import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={style.loadingio}>
            <div className={style.ldio}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner;