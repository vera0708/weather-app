import { useState } from 'react';
import Container from '../Container/Container';
import style from './SearchForm.module.css';

const SearchForm = (props) => {
    const [city, setCity] = useState('');

    const submitForm = async (event) => {
        event.preventDefault();

        props.search(city);
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