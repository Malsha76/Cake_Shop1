import {Component} from "react";
import menu from "../../../assets/MenuCard.webp";

export class About extends Component {
    render() {
        return (
            <>
              
                <div className={' flex '}>
                    <div className={'h-auto pt-5 pl-10 pr-10 mx-auto'}>
                        <h1 className={'mb-2 italic pd-8px text-3xl text-pink-300 underline decoration-2'}> About Us</h1>
                        <p className={'pb-3 text-9px'}> At Sweet Delights Cake Shop, we believe that every occasion deserves a sweet celebration. Our bakery specializes 
                            in crafting exquisite cakes that not only look stunning but taste divine.
                            <br/>
                            <br/>
                            From classic favorites to innovative designs, each cake is made with the finest ingredients and a touch of love. Whether you're celebrating a birthday, 
                            wedding, or any special event, our team is dedicated to making your moments unforgettable.
                            <br/>
                            <br/>
                            Visit us and experience the magic of our delectable creations!
                            
                            <br/>
                            
                        </p>
                    </div>
                </div>

                <div className={'pl-72 '}>
                    <img className='scale-95 pl-20' src={menu} alt='menu'/>
                </div>
                <div className={'pl-72'}>
                    <img className='scale-95 pl-20' src={menu} alt='menu'/>
                </div>
            </>
        );
    }
}