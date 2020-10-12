import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import './GetStartSection.scss';

import arr1 from './arrow1Copy2.png';
import arr2 from './arrow1Copy3.png';

configureAnchors({scrollDuration: 400});

const countries = [
    {
        country: 'Singapore',
        countryCode: 'SG',
    },
    {
        country: 'Indonesia',
        countryCode: 'ID',
    },
    {
        country: 'Australia',
        countryCode: 'AU',
    },
    {
        country: 'Taiwan',
        countryCode: 'TW',
    },
    {
        country: 'Hong Kong',
        countryCode: 'HK',
    },
    {
        country: 'Thailand',
        countryCode: 'TH',
    },
    {
        country: 'India',
        countryCode: 'IN',
    },
    {
        country: 'Vietnam',
        countryCode: 'VN',
    },
];


function GetStartSection() {
    const [name, setName] = useState('');
    const [businesName, setBusinesNmae] = useState('');
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');

    const sendData = (e) => {
        e.preventDefault();
        console.log({
            name: name,
            businesNmae: businesName,
            phone: `${code}${phone}`
        })
    }

    return (
        <ScrollableAnchor id={'getStart'}>
            <section className="getStart">
                <div className="container__fluid">
                    <div className="getStart__content">
                        <div className="getStartHead">
                            <h2>let’s do this</h2>
                            <h5 className="section__name">
                                Fill up the form and we’ll get in touch within
                                a few hours
                        </h5>
                        </div>

                        <div className="meet__us">
                            <div className="arrow__box meet__us-arrow">
                                <img src={arr1} alt="img" />
                                <p>Or meet us in</p>
                            </div>

                            <CountriesList />
                        </div>

                        <div className="form__box">
                            <div className="form__box-bg"></div>
                            <form className="contact__form">
                                <div className="arrow__box sign__us-arrow">
                                    <img src={arr2} alt="img" />
                                    <p>Let’s get to know each other</p>
                                </div>
                                <div className="form__head">
                                    <h6>Hi, we’re Tinvio! And you?</h6>
                                </div>
                                <div className="input__wrap">
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Name"
                                        className="form__input"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="input__wrap">
                                    <input
                                        name="businessname"
                                        type="text"
                                        placeholder="Business Name"
                                        className="form__input"
                                        onChange={(e) => {
                                            setBusinesNmae(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="input__wrap spec__wrap">
                                    <input
                                        name="code"
                                        type="text"
                                        placeholder="+65"
                                        className="form__input code__input"
                                        onChange={(e) => {
                                            setCode(e.target.value);
                                        }}
                                    />
                                    <input
                                        name="phone"
                                        type="text"
                                        placeholder=""
                                        className="form__input phone__input"
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="input__wrap">
                                    <button
                                        type="submit"
                                        className="btn btn__red form__btn"
                                        value="Get Started"
                                        onClick={(e) => sendData(e)}
                                    >Get Started</button>
                                    <p className="no__spam">No spam, promise 🙌</p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </ScrollableAnchor>

    )
}

const CountriesList = () => {

    const Country = (arr) => {
        const allCountries = arr.map((el, i) => {
            return (
                <li className="country__item" key={i}>
                    <ReactCountryFlag
                        countryCode={el.countryCode}
                        svg
                        style={{
                            width: '15px',
                            height: '15px',
                        }}
                        title={el.countryCode}
                    />
                    <div className='country__name'>
                        {el.country}
                    </div>
                </li>
            )
        });

        return allCountries;

    }
    return (
        <ul className="countries__list">
            {Country(countries)}
        </ul>
    )
}

export default GetStartSection;
