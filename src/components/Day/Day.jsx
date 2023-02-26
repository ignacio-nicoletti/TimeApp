import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './Day.module.css';

const Day = () => {
    const [info, setInfo] = useState('')
    const [render, setRender] = useState(false)
    const [ciudad, setCiudad] = useState('tu ciudad')

    useEffect(() => { // Pass in a callback function!
        fetch(`http://api.weatherapi.com/v1/current.json?key=526941c44e464e61b43171239232402&q=${ciudad ? ciudad : "buenos aires"}& aqi=no`)
            .then(results => results.json())
            .then(data => {
                setInfo(data);
            });
    }, [ciudad]);

    const handleChange = event => {
        setCiudad(event?.target?.value)
        setRender(!render)
    }
    console.log(ciudad);

    return (


        <>

            <div className={style.box}>
                <div className={style.input}>
                    <h6>Busca tu ciudad</h6>
                    <input type='search' value={ciudad} onChange={handleChange} />
                </div>
                <div className={style.foto}><img src={info?.current?.condition?.icon} alt="" /></div>
                <div className={style.temp}>{info?.current?.temp_c
                }°</div>
                <div className={style.info}>{info?.location?.country},{info.location?.name}</div>
                <div className={style.info}>{info?.location?.localtime}</div>
            </div>
        </>
    )
}

export default Day;



