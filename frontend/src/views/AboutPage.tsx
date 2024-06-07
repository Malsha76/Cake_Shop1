import React from 'react';
import Button from "../components/card/button";


class MenuPage extends React.Component<any, any>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
        <div className="min-h-screen flex flex-col  lg:px-32 px-5  bg-orange-100">
            <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 font-bold text-amber-950 italic">About Us</h1>

            <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="w-full lg:w-2/4">
                    <img className="rounded-lg" src="/src/assets/cake.jpg" alt="img"/>
                </div>
                <div className="w-full lg:w-2/4 p-4 space-y-3  items-center justify-center">
                    

            </div>
            </div>
        </div>

        );
    }

}

export default MenuPage;
