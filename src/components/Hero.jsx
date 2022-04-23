import { useState } from "react";
import '../css/Hero.css'

export default function Hero(){

    const sliderPics=[
        "/images/slider pics/pic_1.png",
        "/images/slider pics/pic_2.jpg",
        "/images/slider pics/pic_3.jpg",
        "/images/slider pics/pic_4.png",
        "/images/slider pics/pic_5.png",
        "/images/slider pics/pic_6.png",
        "/images/slider pics/pic_7.png",
        "/images/slider pics/pic_8.png"
    ]

    const [position, setPosition]= useState(0);

    function prevImage(){
        setPosition(prevState=> prevState===0? sliderPics.length-1: prevState-1);
    }

    function nextImage(){
        setPosition(prevState=> prevState===sliderPics.length-1? 0: prevState+1);
    }

    setInterval(nextImage, 1000*7);

    return(
        <div className="hero">
            <img src={sliderPics[position]} alt="imagem do slider"/>
            <div className="hero__container">
                <button type="button" onClick={prevImage}>&lt;</button>
                <button type="button" onClick={nextImage}>&gt;</button>
            </div>
        </div>
    );
}