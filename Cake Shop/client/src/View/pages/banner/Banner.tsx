import {Component} from "react";
import cake from "../../../assets/cake.jpg";

export class Banner extends Component {
    render() {
        return (
            <>
                <div className='ricePlate flex justify-center items-center gap-44 bg-pink-200 from-fuchsia-200'>
                    <div className={'pl-32'}>
                        <h4 className='text-2xl font-bold'>WELCOME TO</h4>
                       <h1 className='text-8xl font-bold'>Cuppy Cake</h1>
                        
                        <h6 className={''}> where every slice is a piece of heaven! </h6>
                        <button className='bg-red-600 rounded-full p-2 text-2xl mt-20'>Latest Collection</button>
                    </div>
                    <div className={''}>
                        <img className='scale-95 ' src={cake} alt='cake'/>
                    </div>

                </div>

            </>
        );
    }
}