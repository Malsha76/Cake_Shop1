import React from "react";
import {Link} from "react-router-dom";

const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full">
                {props.title}
            </button>
 </div>

 );
};

export default Button;
