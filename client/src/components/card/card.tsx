import React from "react";
import Button from "../card/Button";
import { BsStarHalf } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
            <div className="flex flex-wrap justify-center">
                <div className="w-3/6 sm:w-4/8 px-1">
                    <img src={props.img}
                alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                </div>
            </div>
            <div className=" flex flex-col items-center mt-5 gap-3">
                <h2 className=" font-semibold text-xl font-bold text-amber-950 italic">{props.title}</h2>
                <div className=" flex  text-amber-950 ">
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarFill className=" text-brightColor" />
                    <BsStarHalf className=" text-brightColor" />
                </div>
                <h3 className=" font-semibold text-lg font-bold text-pink-500 italic" >{props.price}</h3>
                {/*<h3 className=" font-semibold text-lg" >$15.99</h3>*/}
                <div>
                    <span className=" flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer">
            <FaRegPlusSquare size={20} />
          </span>
        </div>

            <div className={'px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'}>
                    <button ><Link to={'/order'} >Order Now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Card;
