import React, { useEffect, useState } from "react";
import style from './cities.module.css'



const Cities = () => {

    const [info, setInfo] = useState('')

    useEffect(() => { // Pass in a callback function!
        fetch('https://www.el-tiempo.net/api/json/v2/home')
            .then(results => results.json())
            .then(data => {
                setInfo(data);
            });
    }, []);

    console.log(info);

    return (

        <div className={style.box}>


            {info?.ciudades?.map(e => (

                < div className={style.city} >

                    <p>{e?.name}</p>
                    <p>Max: {e?.temperatures?.max}°</p>
                    <p>Min: {e?.temperatures?.min}°</p>
                    <p>{e?.stateSky?.description}</p>



                </div>


            ))}





        </div>
    )


}

export default Cities