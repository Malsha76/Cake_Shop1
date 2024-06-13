import React from 'react';
import Card from "./../components/card/card";
import img1 from "../assets/menu1.jpg";
import img2 from "../assets/menu2.jpg";
import img3 from "../assets/menu3.jpg";
import img4 from "../assets/menu4.jpg";
import img5 from "../assets/menu5.jpg";
import img6 from "../assets/menu6.jpg";


function  Menu():JSX.Element {
        return (

            <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5  bg-orange-100 font-bold text-amber-950 italic">
                <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
                    Menu
                </h1>

                <div className=" flex flex-wrap pb-8 gap-8 justify-center font-bold text-amber-950 italic">
                    <Card img={img1} title="Espresso" price="2000Rs"/>
                    <Card img={img2} title="Cappuccino" price="2450Rs" />
                    <Card img={img3} title="Latte" price="1900Rs" />
                    <Card img={img4} title="Americano" price="2000Rs"  />
                    <Card img={img5} title="Mocchito" price="2250s"  />
                    <Card img={img6} title="Doppio" price="2300Rs"  />
                </div>
            </div>
        );

}

export default Menu;