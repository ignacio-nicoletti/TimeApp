import React, { useEffect, useState } from "react";
import style from './cities.module.css'



const Cities = () => {
    const [render, setRender] = useState(false)
    const [info, setInfo] = useState('')
    const [inicio, setInicio] = useState(0)
    const [fin, setFin] = useState(6)

    useEffect(() => { // Pass in a callback function!
        fetch('https://www.el-tiempo.net/api/json/v2/home')
            .then(results => results.json())
            .then(data => {
                setInfo(data);
            });
    }, [render]);



    const handlerNext = () => {
        setInicio(6)
        setFin(12)
        setRender(!render)
        // console.log("me ejecute");
    }

    const handlerPrev = () => {
        setInicio(0)
        setFin(6)
        setRender(!render)
        // console.log("me ejecute");
    }


    console.log(info);

    return (
        <div>
            <h2>Otras ciudades</h2>

            <div className={style.box}>

                {info?.ciudades?.slice(inicio, fin).map(e => (

                    < div className={style.city} >

                        <h5>{e?.name}</h5>
                        <p>Max: {e?.temperatures?.max}°</p>
                        <p>Min: {e?.temperatures?.min}°</p>
                        <p>{e?.stateSky?.description}</p>



                    </div>


                ))}
            </div>
            <div className={style.button}>
                <button className={style.btn} onClick={handlerPrev}>{"<"}</button>
                <button className={style.btn} onClick={handlerNext}>{">"}</button>

            </div>




        </div>
    )


}

export default Cities