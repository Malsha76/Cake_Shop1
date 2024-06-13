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
                <h2 className="font-semibold text-3xl items-center justify-center font-bold text-amber-950 italic">
                        What Makes Our Cake Special?
                    </h2>
                    <p>
                    At Sweet Bliss Cake Shop, we are passionate about creating delightful cakes that turn any occasion into 
                    a memorable celebration. Our skilled bakers use only the finest ingredients to craft each cake with love and 
                    precision, ensuring every bite is a treat for the senses. Whether you’re looking for a classic favorite or a 
                    custom-designed masterpiece, Sweet Bliss is dedicated to making your sweetest dreams come true. Join us
                     and experience the magic of our delicious creations!
                    </p>
                    
                    <div className=" flex flex-row gap-6">
                        <Button title="Learn more" />
                    </div> 

            </div>
            </div>
        </div>

        );
    }

}

export default MenuPage;
