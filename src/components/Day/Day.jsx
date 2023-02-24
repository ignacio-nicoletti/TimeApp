import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './Day.module.css';

const Day = () => {
    const [info, setInfo] = useState('')
    // const llamadoApi = () => {
    //     const info = fetch('https://www.el-tiempo.net/api/json/v2/home')
    //         .then(response => response.json())
    //         .then(data => console.log((data)))
    // }
    useEffect(() => { // Pass in a callback function!
        fetch('http://api.weatherapi.com/v1/current.json?key=526941c44e464e61b43171239232402&q=buenos aires&aqi=no')
            .then(results => results.json())
            .then(data => {
                setInfo(data);
            });
    }, []);

    console.log(info);
    return (


        <>

            <div className={style.box}>

                <div className={style.foto}><img src={info?.current?.condition?.icon} alt="" /></div>
                <div className={style.info}>{info?.location?.country},{info.location?.name}</div>
                <div className={style.info}>{info?.location?.localtime}</div>
                <div className={style.temp}>{info?.current?.temp_c
                }°</div>




            </div>
        </>
    )
}

export default Day;



