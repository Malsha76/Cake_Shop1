import React from 'react';
import Button from "../components/card/button";

class Home extends React.Component<any, any>{

render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
        <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-orange-100 font-bold text-amber-950 italic ">
          <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
            <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight font-bold text-amber-950 italic">
            Experience the sweetness at Sweet Bliss Cake Shop, where every cake is a masterpiece of flavor and artistry
            </h1>
            <p>
            From classic favorites to custom-designed masterpieces, we cater to all your sweet desires. 
            </p>

            <div className=" flex flex-row gap-6">
              <Button title="MORE MENU" />
            </div>

           </div>

          <div className="relative">
            <img src="/src/assets/home.png" alt="img" />

        </div>
        </div>
    );
  }

}

export default Home;
