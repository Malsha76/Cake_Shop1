import {Component} from "react";
import menu from "../../../images/MenuCard.webp";

export class About extends Component {
    render() {
        return (
            <>
              
                <div className={' flex '}>
                    <div className={'h-auto pt-5 pl-10 pr-10 mx-auto'}>
                        <h1 className={'mb-2 italic pd-8px text-3xl text-pink-300 underline decoration-2'}> About Us</h1>
                        <p className={'pb-3 text-9px'}> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Deleniti ea earum enim ex excepturi explicabo laborum libero optio repudiandae tenetur.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A cumque delectus, ea expedita magnam nisi possimus quaerat quibusdam.
                            Facere, molestias.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad animi atque commodi, consectetur corporis cumque dolores doloribus ea eius excepturi, exercitationem explicabo hic illo illum labore magni mollitia non officiis provident quae quam quia quisquam reprehenderit rerum sapiente sit,
                            
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab atque beatae, corporis dicta doloremque earum fugiat hic magnam nam,
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